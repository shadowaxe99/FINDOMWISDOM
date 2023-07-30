```python
from django.contrib.auth.hashers import make_password, check_password

def encrypt_password(raw_password):
    """
    This function takes a raw password, encrypts it, and returns the hashed password.
    """
    hashed_password = make_password(raw_password)
    return hashed_password

def check_encrypted_password(raw_password, hashed_password):
    """
    This function takes a raw password and a hashed password, checks the validity, and returns a boolean.
    """
    return check_password(raw_password, hashed_password)

def secure_user_authentication(username, password, user_data):
    """
    This function takes a username and password, checks them against the user_data, and returns a boolean.
    """
    if username in user_data:
        return check_encrypted_password(password, user_data[username]['password'])
    return False
```