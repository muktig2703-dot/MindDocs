from pathlib import Path

from pypdf import PdfReader
from langchain_core.documents import Document
from langchain_text_splitters import RecursiveCharacterTextSplitter

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)


def save_pdf(file):
    file_path = UPLOAD_DIR / file.filename
    with open(file_path, "wb") as f:
        f.write(file.file.read())

    return file_path


def extract_text(file_path):
    reader = PdfReader(file_path)

    documents = []

    total_text = ""

    for page_number, page in enumerate(reader.pages, start=1):
        text = page.extract_text()

        if not text:
            continue

        total_text += text + "\n"

        documents.append(
            Document(
                page_content=text,
                metadata={
                    "source": file_path.name,
                    "page": page_number
                }
            )
        )

    return {
        "pages": len(reader.pages),
        "text": total_text,
        "documents": documents
    }


def split_text(documents):
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200
    )

    return splitter.split_documents(documents)