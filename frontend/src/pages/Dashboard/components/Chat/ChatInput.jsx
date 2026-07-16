import {
  Paperclip,
  Mic,
  SendHorizontal,
} from "lucide-react";

function ChatInput() {
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
        <button>
          <Paperclip
            size={20}
            color="var(--text-secondary)"
          />
        </button>

        <input
          placeholder="Ask anything about your document..."
          className="flex-1 bg-transparent outline-none"
          style={{
            color: "var(--text-primary)",
          }}
        />

        <button>
          <Mic
            size={20}
            color="var(--text-secondary)"
          />
        </button>

        <button
          className="
            rounded-xl
            p-2
          "
          style={{
            background: "var(--primary)",
            color: "#fff",
          }}
        >
          <SendHorizontal size={18} />
        </button>

      </div>
    </div>
  );
}

export default ChatInput;