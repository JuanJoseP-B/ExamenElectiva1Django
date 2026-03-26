from django.urls import path
from . import views

urlpatterns = [
    path('', views.hoja_vida, name='dev4-hoja-vida'),
]