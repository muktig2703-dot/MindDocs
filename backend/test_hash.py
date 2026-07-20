from app.auth.hashing import (
    hash_password,
    verify_password,
)

password = "MindDocs123"

hashed = hash_password(password)

print("Hashed Password:")
print(hashed)

print()

print(
    verify_password(
        "MindDocs123",
        hashed,
    )
)

print(
    verify_password(
        "WrongPassword",
        hashed,
    )
)