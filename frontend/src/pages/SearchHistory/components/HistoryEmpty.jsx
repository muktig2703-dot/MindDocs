import { MessageCircleOff } from "lucide-react";

function HistoryEmpty() {
  return (
    <div
      className="
        mt-8
        rounded-3xl
        border
        p-16
        text-center
      "
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      <MessageCircleOff
        size={52}
        style={{
          color: "var(--primary)",
        }}
      />

      <h2
        className="mt-5 text-2xl font-bold"
        style={{
          color: "var(--text-primary)",
        }}
      >
        No Search History
      </h2>

      <p
        className="mt-3"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        Ask questions about your PDFs to build your history.
      </p>
    </div>
  );
}

export default HistoryEmpty;