```python
from django.core.wsgi import get_wsgi_application
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from backend import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'profiles', views.ProfileViewSet)
router.register(r'matchmaking', views.MatchmakingViewSet)
router.register(r'communication', views.CommunicationViewSet)
router.register(r'transactions', views.TransactionViewSet)
router.register(r'tasks', views.TaskViewSet)
router.register(r'community', views.CommunityViewSet)
router.register(r'reports', views.ReportViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

application = get_wsgi_application()
```