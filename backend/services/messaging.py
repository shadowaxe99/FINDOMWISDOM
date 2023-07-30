```python
from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

User = get_user_model()
channel_layer = get_channel_layer()

class MessagingService:
    def __init__(self, sender, receiver, message):
        self.sender = sender
        self.receiver = receiver
        self.message = message

    def send_message(self):
        try:
            receiver_user = User.objects.get(username=self.receiver)
            async_to_sync(channel_layer.send)(
                receiver_user.channel_name,
                {
                    "type": "chat.message",
                    "message": self.message,
                    "sender": self.sender
                }
            )
            return True
        except ObjectDoesNotExist:
            return False
```