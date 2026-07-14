from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import health
from app.routers import document
from app.routers import chat
app = FastAPI(
    title="MindDocs API",
    description="AI-powered RAG chatbot for chatting with PDF documents.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(document.router)
app.include_router(chat.router)
@app.get("/")
def root():
    return {
        "message": "Welcome to MindDocs API 🚀"
    }