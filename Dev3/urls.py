from django.urls import path
from . import views

urlpatterns = [
    path('', views.hoja_vida, name='dev3-hoja-vida'),
]