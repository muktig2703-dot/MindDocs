from pydantic import BaseModel


class UploadResponse(BaseModel):
    filename: str
    pages: int
    characters: int
    preview: str
    message: str