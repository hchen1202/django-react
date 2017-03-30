from rest_framework import serializers

from accounts.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class UserRegistrationSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')

    def create(self, validated_data):
        # 
        user = User.objects.create(**validated_data)
        # class models.User Methods, set_password
        user.set_password(validated_data['password'])
        # Saving Objects
        user.save()
        return user