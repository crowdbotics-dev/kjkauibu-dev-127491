from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    FFFsefeViewSet,
    KungshuViewSet,
    FFFsefeViewSet,
    KungshuViewSet,
    FFFsefeViewSet,
    KungshuViewSet,
    FFFsefeViewSet,
    KungshuViewSet,
)

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register("fffsefe", FFFsefeViewSet)
router.register("kungshu", KungshuViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
