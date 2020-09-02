from trails.models import Trail
from rest_framework import viewsets, permissions
from .serializers import TrailSerializer

# Trail Viewset
class TrailViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = TrailSerializer

    def get_queryset(self):
        return self.request.user.trails.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    

