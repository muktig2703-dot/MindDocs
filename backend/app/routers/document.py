from fastapi import APIRouter, UploadFile, File, HTTPException
from fastapi.responses import FileResponse
from app.schemas.document import UploadResponse, DocumentResponse
from app.services.pdf_service import save_pdf, extract_text
from app.services.embedding_service import get_embedding_model
from app.vectorstore.faiss_store import save_to_faiss
from app.services.pdf_service import split_text
from fastapi import Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.document import Document
from app.models.user import User
from app.auth.jwt_handler import get_current_user_token
from pydantic import BaseModel
router = APIRouter(
    prefix="/documents",
    tags=["Documents"]
)
class RenameDocumentRequest(BaseModel):
    filename: str

@router.post("/upload", response_model=UploadResponse)
async def upload_pdf(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    payload=Depends(get_current_user_token),
):
    if not file.filename.endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )
    

    file_path = save_pdf(file)

    pdf_data = extract_text(file_path)
    documents = split_text(pdf_data["documents"])

    embedding_model = get_embedding_model()

    save_to_faiss(
    documents,
    embedding_model
)
    user = (
    db.query(User)
    .filter(
        User.id == int(payload["sub"])
    )
    .first()
)
    
    document_record = Document(
    filename=file.filename,
    path=str(file_path),
    pages=pdf_data["pages"],
    characters=len(pdf_data["text"]),
    size=file.size,
    preview=pdf_data["text"][:500],
    user_id=user.id,
)

    db.add(document_record)
    db.commit()
    db.refresh(document_record)
    return UploadResponse(
        filename=file.filename,
        pages=pdf_data["pages"],
        characters=len(pdf_data["text"]),
        preview=pdf_data["text"][:500],
        message="PDF uploaded successfully."
    )

@router.get(
    "/",
    response_model=list[DocumentResponse],
)
def get_documents(
    payload=Depends(get_current_user_token),
    db: Session = Depends(get_db),
):
    documents = (
        db.query(Document)
        .filter(
            Document.user_id == int(payload["sub"])
        )
        .order_by(Document.uploaded_at.desc())
        .all()
    )

    return documents

@router.get("/{document_id}/view")
def view_document(
    document_id: int,
    payload=Depends(get_current_user_token),
    db: Session = Depends(get_db),
):
    document = (
        db.query(Document)
        .filter(
            Document.id == document_id,
            Document.user_id == int(payload["sub"]),
        )
        .first()
    )

    if not document:
        raise HTTPException(
            status_code=404,
            detail="Document not found.",
        )

    return FileResponse(
    path=document.path,
    media_type="application/pdf",
    headers={
        "Content-Disposition": "inline"
    },
)

@router.patch("/{document_id}")
def rename_document(
    document_id: int,
    request: RenameDocumentRequest,
    payload=Depends(get_current_user_token),
    db: Session = Depends(get_db),
):
    document = (
        db.query(Document)
        .filter(
            Document.id == document_id,
            Document.user_id == int(payload["sub"]),
        )
        .first()
    )

    if not document:
        raise HTTPException(
            status_code=404,
            detail="Document not found.",
        )

    document.filename = request.filename

    db.commit()

    db.refresh(document)

    return {
        "message": "Document renamed successfully."
    }

@router.delete("/{document_id}")
def delete_document(
    document_id: int,
    payload=Depends(get_current_user_token),
    db: Session = Depends(get_db),
):
    document = (
        db.query(Document)
        .filter(
            Document.id == document_id,
            Document.user_id == int(payload["sub"]),
        )
        .first()
    )

    if not document:
        raise HTTPException(
            status_code=404,
            detail="Document not found.",
        )

    db.delete(document)

    db.commit()

    return {
        "message": "Document deleted."
    }

@router.patch("/{document_id}/pin")
def toggle_pin(
    document_id: int,
    payload=Depends(get_current_user_token),
    db: Session = Depends(get_db),
):
    document = (
        db.query(Document)
        .filter(
            Document.id == document_id,
            Document.user_id == int(payload["sub"]),
        )
        .first()
    )

    if not document:
        raise HTTPException(
            status_code=404,
            detail="Document not found.",
        )

    document.pinned = not document.pinned

    db.commit()

    db.refresh(document)

    return document

@router.get("/storage")
def get_storage(
    payload=Depends(get_current_user_token),
    db: Session = Depends(get_db),
):
    documents = (
        db.query(Document)
        .filter(
            Document.user_id == int(payload["sub"])
        )
        .all()
    )

    total_used = sum(
        doc.size or 0
        for doc in documents
    )

    total_limit = 5 * 1024 * 1024 * 1024  # 5 GB

    return {
        "used": total_used,
        "total": total_limit,
    }