```python
from django.shortcuts import render
from rest_framework import viewsets
from .models import User, Profile, Matchmaking, Communication, Transaction, Task, Community, Report
from .serializers import UserSerializer, ProfileSerializer, MatchmakingSerializer, CommunicationSerializer, TransactionSerializer, TaskSerializer, CommunitySerializer, ReportSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class MatchmakingViewSet(viewsets.ModelViewSet):
    queryset = Matchmaking.objects.all()
    serializer_class = MatchmakingSerializer

class CommunicationViewSet(viewsets.ModelViewSet):
    queryset = Communication.objects.all()
    serializer_class = CommunicationSerializer

class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class CommunityViewSet(viewsets.ModelViewSet):
    queryset = Community.objects.all()
    serializer_class = CommunitySerializer

class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
```