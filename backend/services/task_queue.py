```python
from celery import Celery
from .models import Task

# Initialize Celery
celery_app = Celery('tasks', broker='pyamqp://guest@localhost//')

@celery_app.task
def assign_task(task_id):
    task = Task.objects.get(id=task_id)
    task.status = 'Assigned'
    task.save()

@celery_app.task
def update_task_status(task_id, status):
    task = Task.objects.get(id=task_id)
    task.status = status
    task.save()

@celery_app.task
def check_task_completion(task_id):
    task = Task.objects.get(id=task_id)
    if task.status == 'Completed':
        return True
    return False
```