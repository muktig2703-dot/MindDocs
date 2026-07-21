from pydantic import BaseModel


class UploadResponse(BaseModel):
    filename: str
    pages: int
    characters: int
    preview: str
    message: str

from datetime import datetime

class DocumentResponse(BaseModel):
    id: int
    filename: str
    pages: int
    characters: int
    preview: str
    pinned: bool
    uploaded_at: datetime

    model_config = {
        "from_attributes": True
    }