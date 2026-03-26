from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='home.html'), name='home'),
    path('dev1/', include('Dev1.urls')),
    path('dev2/', include('Dev2.urls')),
    path('dev3/', include('Dev3.urls')),
    path('dev4/', include('Dev4.urls')),
]
