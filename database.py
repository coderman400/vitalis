from pydantic import BaseModel

# Mock user database for demonstration purposes
fake_users_db = {
    "user1": {
        "username": "user1",
        "password": "password123",  # Simple password storage, in practice, hash this!
    }
}

# User models
class User(BaseModel):
    username: str
    password: str

class UserInDB(User):
    hashed_password: str

def get_user(username: str) -> dict:
    """ Retrieve user data from the mock database """
    return fake_users_db.get(username)

def verify_password(stored_password: str, input_password: str) -> bool:
    """ Verify password (in a real app, compare hashes) """
    return stored_password == input_password
