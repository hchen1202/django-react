from accounts.models import User

# REST framework includes a set of named constants, The full set of HTTP status codes included in the status module.
from rest_framework import status
# The generic views provided by REST framework allow you to quickly build API views that map closely to your database models.
from rest_framework.generics import GenericAPIView
# This authentication scheme uses HTTP Basic Authentication, signed against a user's username and password. 
from rest_framework.authentication import BasicAuthentication
from rest_framework.mixins import CreateModelMixin
# permissions determine whether a request should be granted or denied access. The IsAuthenticated permission class will deny permission to any unauthenticated user, and allow permission otherwise.
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.parsers import JSONParser

from accounts.serializers import UserSerializer
from accounts.serializers import UserRegistrationSerializer, UserSerializer

from rest_framework_jwt.settings import api_settings

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


# Create your views here.

class UserRegisterView(GenericAPIView) :
    serializer_class = UserRegistrationSerializer
    authentication_classes = ()

    """
    A view that can accept POST requests with JSON content.
    """
    #parser_classes = (JSONParser)

    def post(self, request):
        # User Register View
        return self.create(request)


class UserLoginView(GenericAPIView):
    serializer_class = UserSerializer
    authentication_classes = (BasicAuthentication)
    permission_classes = (IsAuthenticated)

    def post(self, request):
        """User login with username and password."""
        token = AuthToken.objects.create(request.user)
        return Response({
            'user': self.get_serializer(request.user).data,
            'token': token
        })


