```python
from django.db import models
from .User import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    preferences = models.TextField()
    interests = models.TextField()
    financial_limits = models.DecimalField(max_digits=10, decimal_places=2)
    kinks = models.TextField()
    power_dynamics = models.CharField(max_length=255)

    def __str__(self):
        return self.user.username
```