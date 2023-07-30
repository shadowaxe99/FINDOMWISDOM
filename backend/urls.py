```python
from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
    path('profiles/', views.ProfileList.as_view()),
    path('profiles/<int:pk>/', views.ProfileDetail.as_view()),
    path('matchmaking/', views.MatchmakingList.as_view()),
    path('matchmaking/<int:pk>/', views.MatchmakingDetail.as_view()),
    path('communication/', views.CommunicationList.as_view()),
    path('communication/<int:pk>/', views.CommunicationDetail.as_view()),
    path('transactions/', views.TransactionList.as_view()),
    path('transactions/<int:pk>/', views.TransactionDetail.as_view()),
    path('tasks/', views.TaskList.as_view()),
    path('tasks/<int:pk>/', views.TaskDetail.as_view()),
    path('community/', views.CommunityList.as_view()),
    path('community/<int:pk>/', views.CommunityDetail.as_view()),
    path('reports/', views.ReportList.as_view()),
    path('reports/<int:pk>/', views.ReportDetail.as_view()),
]
```