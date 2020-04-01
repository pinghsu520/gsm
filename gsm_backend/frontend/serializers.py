from rest_framework import serializers
from . import models

# this converts model data into json and you will connection
# this to the views
class FormsSerializers(serializers.ModelSerializer):
	class Meta:
		model= models.Forms
		fields = ("__all__")