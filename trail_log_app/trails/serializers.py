from rest_framework import serializers
from trails.models import Trail

# Trail serializer
class TrailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trail
        fields = '__all__'

