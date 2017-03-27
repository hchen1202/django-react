from accounts.models import User

from rest_framework import generics

from accounts.serializers import UserSerializer

# Create your views here.

class UserRegisterView() :




class UserLoginView():
    serializer_class = UserSerializer
    authentication_classes = (BasicAuthentication,)

