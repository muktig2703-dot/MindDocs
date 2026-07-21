from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.auth.hashing import hash_password
from app.core.database import get_db
from app.models.user import User
from app.schemas.auth import (
    RegisterRequest,
    UserResponse,
)

from app.auth.hashing import verify_password

from app.auth.jwt_handler import create_access_token

from app.schemas.auth import (
    LoginRequest,
    TokenResponse,
)

from app.auth.jwt_handler import get_current_user_token
router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)

@router.post(
    "/register",
    response_model=UserResponse,
)
def register(
    request: RegisterRequest,
    db: Session = Depends(get_db),
):
    existing_email = (
        db.query(User)
        .filter(User.email == request.email)
        .first()
    )

    if existing_email:
        raise HTTPException(
            status_code=400,
            detail="Email already registered.",
        )

    existing_username = (
        db.query(User)
        .filter(
            User.username == request.username
        )
        .first()
    )

    if existing_username:
        raise HTTPException(
            status_code=400,
            detail="Username already exists.",
        )

    user = User(
        name=request.name,
        username=request.username,
        email=request.email,
        hashed_password=hash_password(
            request.password
        ),
    )

    db.add(user)

    db.commit()

    db.refresh(user)

    return user

@router.post(
    "/login",
    response_model=TokenResponse,
)
def login(
    request: LoginRequest,
    db: Session = Depends(get_db),
):
    user = (
        db.query(User)
        .filter(User.username == request.username)
        .first()
    )

    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password.",
        )

    if not verify_password(
        request.password,
        user.hashed_password,
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password.",
        )

    token = create_access_token(
        {
            "sub": str(user.id),
        }
    )

    return TokenResponse(
        access_token=token,
        token_type="bearer",
    )

@router.get(
    "/me",
    response_model=UserResponse,
)
def get_current_user(
    payload=Depends(get_current_user_token),
    db: Session = Depends(get_db),
):
    user = (
        db.query(User)
        .filter(
            User.id == int(payload["sub"])
        )
        .first()
    )

    if user is None:
        raise HTTPException(
            status_code=404,
            detail="User not found.",
        )

    return user