```python
import stripe
from django.conf import settings
from .models import Transaction

stripe.api_key = settings.STRIPE_SECRET_KEY

def process_payment(transaction_id):
    transaction = Transaction.objects.get(id=transaction_id)
    try:
        charge = stripe.Charge.create(
            amount=transaction.amount,
            currency='usd',
            source=transaction.stripe_token,
            description=f'Payment from {transaction.user.username} to {transaction.recipient.username}'
        )
        if charge.paid:
            transaction.status = 'completed'
            transaction.save()
            return True
        else:
            transaction.status = 'failed'
            transaction.save()
            return False
    except stripe.error.CardError as e:
        transaction.status = 'failed'
        transaction.save()
        return False
```