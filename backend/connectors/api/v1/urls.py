from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import promtdetoxViewSet

router = DefaultRouter()
router.register("promtdetox", promtdetoxViewSet, basename="promtdetox")

urlpatterns = [
    path("connectors/", include(router.urls)),
]
