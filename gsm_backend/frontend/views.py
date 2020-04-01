
from django.shortcuts import render;
# from django.shortcuts import render_to_response
from django.http import HttpResponse;
import datetime;
from django.views.generic import TemplateView;
from rest_framework import viewsets;
from .models import Forms;
from .serializers import FormsSerializers;


class FormsViewSet(viewsets.ModelViewSet):
	serializer_class = FormsSerializers
	queryset = Forms.objects.all()
