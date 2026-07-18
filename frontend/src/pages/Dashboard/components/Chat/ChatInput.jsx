import { useState } from "react";
import {
  Paperclip,
  Mic,
  SendHorizontal,
} from "lucide-react";
import { useDocuments } from "../../../../context/DocumentContext";
import { useEffect } from "react";
function ChatInput({
  onSend,
  loading,
}) {
  const [question, setQuestion] = useState("");
  const {
  selectedQuestion,
  setSelectedQuestion,
} = useDocuments();

useEffect(() => {
  if (selectedQuestion) {
    setQuestion(selectedQuestion);
  }
}, [selectedQuestion, setQuestion]);

  const handleSend = () => {
  if (!question.trim()) return;

  onSend(question);

  setQuestion("");

  setSelectedQuestion("");
};
  return (
    <div
      className="
        border-t
        p-5
      "
      style={{
        borderColor: "var(--border)",
      }}
    >
      <div
        className="
          flex
          flex-col
          items-center
          gap-3
          sm:flex-row
          sm:items-center
          rounded-2xl
          border
          px-4
          py-3
        "
        style={{
          background: "var(--card)",
          borderColor: "var(--border)",
        }}
      >
        <button disabled>
          <Paperclip
            size={20}
            color="var(--text-secondary)"
          />
        </button>

        <input
  value={question}
  onChange={(e) => setQuestion(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter" && !loading) {
      handleSend();
    }
  }}
  disabled={loading}
  placeholder="Ask anything about your document..."
  className="
    flex-1
    bg-transparent
    outline-none
    disabled:opacity-60
  "
  style={{
    color: "var(--text-primary)",
  }}
/>

        <button disabled>
          <Mic
            size={20}
            color="var(--text-secondary)"
          />
        </button>

        <button
  onClick={handleSend}
  disabled={loading}
          className="
            rounded-xl
            p-2
          "
          style={{
            background: "var(--primary)",
            color: "#fff",
          }}
        >
          {loading ? "..." : <SendHorizontal size={18} />}
        </button>

      </div>
    </div>
  );
}

export default ChatInput;