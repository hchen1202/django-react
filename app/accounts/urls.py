from django.conf.urls import url

from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

import accounts.views


urlpatterns = [
    url(r'^register/$', accounts.views.UserRegisterView.as_view()),
    url(r'^login/$', accounts.views.UserLoginView.as_view()),
    url(r'^api-token-auth/', obtain_jwt_token)
]

