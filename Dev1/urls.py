from django.urls import path
from . import views

urlpatterns = [
    path('', views.hoja_vida, name='dev1-hoja-vida'),
]
