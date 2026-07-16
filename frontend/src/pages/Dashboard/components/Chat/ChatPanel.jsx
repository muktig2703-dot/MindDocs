import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import SuggestedPrompts from "./SuggestedPrompts";

function ChatPanel() {
  return (
    <section
      className="
        flex
        h-[850px]
        flex-col
        overflow-hidden
        rounded-3xl
        border
      "
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <ChatHeader />

      <div
        className="
          flex-1
          space-y-6
          overflow-y-auto
          p-6
        "
      >
        <ChatMessage
          role="assistant"
          text={`Hello! 👋

Upload a document and ask me anything.

I'll answer using only the contents of your uploaded PDFs.`}
        />

        <ChatMessage
          role="user"
          text="Summarize this document."
        />

        <ChatMessage
          role="assistant"
          text={`This paper introduces Retrieval-Augmented Generation (RAG), a technique that combines semantic search with large language models to provide grounded and accurate answers from external documents.`}
        />

        <SuggestedPrompts />
      </div>

      <ChatInput />
    </section>
  );
}

export default ChatPanel;