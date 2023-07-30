```python
from django.db import models
from .User import User
from .Task import Task

class Report(models.Model):
    reporter = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reporter')
    reported_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reported_user')
    related_task = models.ForeignKey(Task, on_delete=models.CASCADE, null=True)
    description = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Report {self.id} by {self.reporter.username} on {self.reported_user.username}'
```