from pydantic import BaseModel
from pydantic import EmailStr
from pydantic import field_validator
import re
class RegisterRequest(BaseModel):
    name: str
    username: str
    email: EmailStr
    password: str
    @field_validator("username")
    @classmethod
    def validate_username(cls, value):
        if not re.fullmatch(r"[A-Za-z0-9_]+", value):
            raise ValueError(
                "Username may contain only letters, numbers and underscores."
            )
        return value

    @field_validator("password")
    @classmethod
    def validate_password(cls, value):
        if len(value) < 8:
            raise ValueError(
                "Password must be at least 8 characters."
            )

        if not re.search(r"[a-z]", value):
            raise ValueError(
                "Password must contain a lowercase letter."
            )

        if not re.search(r"[A-Z]", value):
            raise ValueError(
                "Password must contain an uppercase letter."
            )

        if not re.search(r"\d", value):
            raise ValueError(
                "Password must contain a number."
            )

        if not re.search(r"[@$!%*?&^#()_\-+=]", value):
            raise ValueError(
                "Password must contain a special character."
            )

        return value



class UserResponse(BaseModel):
    id: int
    name: str
    username: str
    email: EmailStr
    model_config = {
        "from_attributes": True
    }

class LoginRequest(BaseModel):
    username: str
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str