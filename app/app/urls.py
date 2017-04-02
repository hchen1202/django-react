# @Author: Hao Chen <clovemac>
# @Date:   2017-03-08T22:34:43-05:00
# @Email:  hao@genm.co
# @Project: GenmMobile
# @Last modified by:   clovemac
# @Last modified time: 2017-03-09T18:13:07-05:00

from django.conf import settings
from django.conf.urls import include, url
from django.contrib import admin
from django.views.decorators.cache import cache_page
from django.views.generic import TemplateView

# from base import views as base_views

urlpatterns = [
    # catch all others because of how history is handled by react router - cache this page because it will never change
    # url(r'', cache_page(settings.PAGE_CACHE_SECONDS)(base_views.IndexView.as_view()), name='index'),
    
    url(r'^api/',  include('accounts.urls', namespace='accounts')),
    url(r'', TemplateView.as_view(template_name="index.html")),
    #url(r'^admin/', admin.site.urls),
]
