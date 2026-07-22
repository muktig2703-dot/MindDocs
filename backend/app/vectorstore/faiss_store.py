from pathlib import Path

from langchain_community.vectorstores import FAISS

VECTOR_DB = Path("vectorstore")


def save_to_faiss(documents, embeddings):
    if (
    VECTOR_DB.exists()
    and (VECTOR_DB / "index.faiss").exists()
    and (VECTOR_DB / "index.pkl").exists()
):
        db = FAISS.load_local(
            str(VECTOR_DB),
            embeddings,
            allow_dangerous_deserialization=True
        )

        db.add_documents(documents)

    else:
        db = FAISS.from_documents(
            documents,
            embeddings
        )

    db.save_local(str(VECTOR_DB))

    return db


def load_faiss(embeddings):
    if (
    not VECTOR_DB.exists()
    or not (VECTOR_DB / "index.faiss").exists()
    or not (VECTOR_DB / "index.pkl").exists()
):
        return None


    return FAISS.load_local(
        str(VECTOR_DB),
        embeddings,
        allow_dangerous_deserialization=True
    )

def search_documents(db, question, k=4):
    return db.similarity_search(question, k=k)