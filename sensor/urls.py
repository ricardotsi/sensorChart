from django.conf.urls import url
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    url(r'^ajax/ventilacao/$', views.ventilacao, name='ventilacao'),
    url(r'^ajax/luz/$', views.luz, name='luz'),
]