```python
from django.db import models
from .User import User
from .Transaction import Transaction

class Task(models.Model):
    assigned_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='assigned_tasks')
    assigned_to = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tasks')
    description = models.TextField()
    due_date = models.DateTimeField()
    status = models.CharField(max_length=20, default='Pending')
    transaction = models.ForeignKey(Transaction, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f'Task {self.id}: {self.description}'

    def mark_as_complete(self):
        self.status = 'Completed'
        self.save()

    def assign_transaction(self, transaction):
        self.transaction = transaction
        self.save()
```