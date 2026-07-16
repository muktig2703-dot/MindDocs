import { Bot, FileText, MoreHorizontal } from "lucide-react";

function ChatHeader() {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        border-b
        px-6
        py-5
      "
      style={{
        borderColor: "var(--border)",
      }}
    >
      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
          "
          style={{
            background: "rgba(124,58,237,.12)",
          }}
        >
          <Bot
            size={24}
            style={{
              color: "var(--primary)",
            }}
          />
        </div>

        <div>

          <h3
            className="font-semibold text-lg"
            style={{
              color: "var(--text-primary)",
            }}
          >
            AI Assistant
          </h3>

          <p
            className="text-sm"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            AI Research Paper.pdf
          </p>

        </div>

      </div>

      <button>
        <MoreHorizontal
          size={20}
          style={{
            color: "var(--text-secondary)",
          }}
        />
      </button>
    </div>
  );
}

export default ChatHeader;