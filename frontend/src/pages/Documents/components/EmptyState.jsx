import { FileSearch } from "lucide-react";

function EmptyState() {
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
      <div
        className="
          mx-auto
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
        "
        style={{
          background: "rgba(124,58,237,.12)",
        }}
      >
        <FileSearch
          size={40}
          style={{
            color: "var(--primary)",
          }}
        />
      </div>

      <h2
        className="mt-6 text-2xl font-bold"
        style={{
          color: "var(--text-primary)",
        }}
      >
        No Documents Found
      </h2>

      <p
        className="mt-3"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        Upload your first PDF to start building your AI knowledge base.
      </p>
    </div>
  );
}

export default EmptyState;