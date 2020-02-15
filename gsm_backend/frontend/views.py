
from django.shortcuts import render
# from django.shortcuts import render_to_response
from django.http import HttpResponse
import datetime
from django.views.generic import TemplateView


def index(request):
	return render(request, 'gsm/index.html') 
	
    # html = "Test"
    # return HttpResponse(html)