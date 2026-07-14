from fastapi import APIRouter, UploadFile, File, HTTPException

from app.models.document import UploadResponse
from app.services.pdf_service import save_pdf, extract_text
from app.services.embedding_service import get_embedding_model
from app.vectorstore.faiss_store import save_to_faiss
from app.services.pdf_service import split_text
router = APIRouter(
    prefix="/documents",
    tags=["Documents"]
)


@router.post("/upload", response_model=UploadResponse)
async def upload_pdf(file: UploadFile = File(...)):
    if not file.filename.endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    file_path = save_pdf(file)

    pdf_data = extract_text(file_path)
    documents = split_text(pdf_data["text"])

    embedding_model = get_embedding_model()

    save_to_faiss(
    documents,
    embedding_model
)

    return UploadResponse(
        filename=file.filename,
        pages=pdf_data["pages"],
        characters=len(pdf_data["text"]),
        preview=pdf_data["text"][:500],
        message="PDF uploaded successfully."
    )