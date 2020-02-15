from django.contrib import admin
from django.urls import path
from . import views
from django.views.generic import TemplateView



urlpatterns = [
# path('', views.index ),
path('', TemplateView.as_view(template_name='gsm/index.html')),
]
