#from typing import Dict
from datetime import datetime
from pydantic import BaseModel, validator, PositiveInt

class User(BaseModel):
    id: int
    username: str
    signup_ts: datetime 
    tastes: dict[str, PositiveInt]

    # @validator('password2')
    # def passwords_match(cls, v, values, **kwargs):
    #     if 'password1' in values and v != values['password1']:
    #         raise ValueError('passwords do not match')
    #     return v

if __name__ == "__main__":
    # Usage example
    user_data = {
        'id': 1,
        'username': 'johndoe',
        'signup_ts': '2024-07-01 09:00',
        'tastes': {
            'wine': -1,
            'ricedal': 10,
            'cabbage': 5,
        }
    }

    try:
        user = User(**user_data)
        print("User validated successfully!")
    except ValueError as e:
        print(f"Validation error: {e}")
