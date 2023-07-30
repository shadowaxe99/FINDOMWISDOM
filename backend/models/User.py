```python
from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # Additional fields as per the application requirements
    is_dominant = models.BooleanField(default=False)
    is_submissive = models.BooleanField(default=False)
    financial_limit = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return self.username
```