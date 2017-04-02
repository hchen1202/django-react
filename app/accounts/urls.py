from django.conf.urls import url

from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

from accounts import views


urlpatterns = [
    url(r'^register/$', views.UserRegisterView.as_view(), name="register"),
    url(r'^login/$', views.UserLoginView.as_view()),
    url(r'^api-token-auth/', obtain_jwt_token)
]

