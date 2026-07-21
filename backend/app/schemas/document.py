from pydantic import BaseModel
from datetime import datetime

class UploadResponse(BaseModel):
    filename: str
    pages: int
    characters: int
    preview: str
    message: str

class DocumentResponse(BaseModel):
    id: int
    filename: str
    pages: int
    characters: int
    size : int
    preview: str
    pinned: bool
    uploaded_at: datetime

    model_config = {
        "from_attributes": True
    }