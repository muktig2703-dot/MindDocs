import { useEffect, useRef, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import SuggestedPrompts from "./SuggestedPrompts";
import ChatTyping from "./ChatTyping";
import { askQuestion } from "../../../../services/chatService";
import { useDocuments } from "../../../../context/DocumentContext";
import { useChat } from "../../../../context/ChatContext";
import toast from "react-hot-toast";

function ChatPanel() {
  const {
  currentSession,
  currentSessionId,
  createSession,
  appendMessage,
} = useChat();

const messages = currentSession?.messages ?? [];

const [loading, setLoading] = useState(false);
const {documents} = useDocuments();
useEffect(() => {
  if (!currentSessionId) {
    createSession(
      documents[0]?.filename ??
      "Unknown Document"
    );
  }
}, [
  currentSessionId,
  createSession,
  documents,
]);

const sendMessage = async (question) => {
  if (!question.trim()) return;

  const userMessage = {
    role: "user",
    text: question,
  };

  appendMessage(
  currentSessionId,
  userMessage
);

  setLoading(true);

  try {
    const response = await askQuestion(question);

    appendMessage(
  currentSessionId,
  {
    role: "assistant",
    text: response.answer,
    sources: response.sources,
  }
);

  } catch (error) {
    toast.error(
      error.response?.data?.detail ||
      "Unable to get an answer."
    );
  } finally {
    setLoading(false);
  }
};
const bottomRef = useRef(null);
useEffect(() => {
  bottomRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages, loading]);
  return (
    <section
      className="
        flex
        h-[650px]
        lg:h-[850px]
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
        {messages.map((message, index) => (
  <ChatMessage
  key={index}
  role={message.role}
  text={message.text}
  sources={message.sources}
/>
))}
{loading && (
  <ChatTyping />
)}
{messages.length <= 1 && !loading && (
  <SuggestedPrompts
    onPromptClick={sendMessage}
  />
)}

<div ref={bottomRef} />
      </div>

      <ChatInput
  onSend={sendMessage}
  loading={loading}
/>
    </section>
  );
}

export default ChatPanel;