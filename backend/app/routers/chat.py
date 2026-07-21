from fastapi import APIRouter, HTTPException

from app.schemas.chat import ChatRequest, ChatResponse
from app.prompts.rag_prompt import RAG_PROMPT
from app.services.chat_service import ask_llm
from app.services.embedding_service import get_embedding_model
from app.vectorstore.faiss_store import load_faiss, search_documents

router = APIRouter(
    prefix="/chat",
    tags=["Chat"]
)


@router.post("/", response_model=ChatResponse)
async def chat(request: ChatRequest):

    embeddings = get_embedding_model()

    db = load_faiss(embeddings)

    if db is None:
        raise HTTPException(
            status_code=404,
            detail="No documents uploaded yet."
        )

    results = search_documents(
        db,
        request.question
    )

    context = "\n\n".join(
        doc.page_content for doc in results
    )

    prompt = RAG_PROMPT.format(
        context=context,
        question=request.question
    )

    answer = ask_llm(prompt)

    sources = []

    for doc in results:
        source = f"{doc.metadata['source']} (Page {doc.metadata['page']})"

        if source not in sources:
            sources.append(source)

    return ChatResponse(
        answer=answer,
        sources=sources
    )