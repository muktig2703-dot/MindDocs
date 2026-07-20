from app.auth.jwt_handler import (
    create_access_token,
    verify_access_token,
)

token = create_access_token(
    {
        "sub": "mukti@email.com",
    }
)

print("TOKEN:")
print(token)

print()

payload = verify_access_token(token)

print(payload)