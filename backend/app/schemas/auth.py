from pydantic import BaseModel
from pydantic import EmailStr


class RegisterRequest(BaseModel):
    name: str
    username: str
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    id: int
    name: str
    username: str
    email: EmailStr

    model_config = {
        "from_attributes": True
    }

class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str