import { FileText } from "lucide-react";
import DocumentCard from "./DocumentCard";
function RecentDocuments({ documents }) {
  return (
    <section className="mt-10">

      <div className="flex items-center justify-between">

        <h2
          className="text-2xl font-bold"
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            color: "var(--text-primary)",
          }}
        >
          Recent Documents
        </h2>

        <button
          style={{
            color: "var(--primary)",
          }}
        >
          View All
        </button>

      </div>

      <div
        className="
          mt-6
          grid
          gap-6
          grid-cols-1
          md:grid-cols-2
          2xl:grid-cols-3
        "
      >

        {documents.length === 0 ? (
  <div
    className="
      col-span-full
      rounded-3xl
      border
      p-12
      text-center
    "
    style={{
      background: "var(--card)",
      borderColor: "var(--border)",
    }}
  >
    <FileText
      size={42}
      className="mx-auto mb-5"
      style={{
        color: "var(--primary)",
      }}
    />

    <h3
      className="text-xl font-semibold"
      style={{
        color: "var(--text-primary)",
      }}
    >
      No Documents Uploaded Yet
    </h3>

    <p
      className="mt-3"
      style={{
        color: "var(--text-secondary)",
      }}
    >
      Upload your first PDF to begin chatting with AI.
    </p>
  </div>
) : (
  documents.map((document) => (
    <DocumentCard
      key={document.id}
      document={document}
    />
  ))
)}

      </div>

    </section>
  );
}

export default RecentDocuments;