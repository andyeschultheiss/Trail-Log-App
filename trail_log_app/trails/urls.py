from rest_framework import routers
from .api import TrailViewSet

router = routers.DefaultRouter()
router.register('api/trails', TrailViewSet,'trails')

urlpatterns = router.urls