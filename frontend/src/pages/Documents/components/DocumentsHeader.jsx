import { FileText } from "lucide-react";

function DocumentsHeader({ totalDocuments }) {
  return (
    <div className="flex items-center justify-between">

      <div>

        <div className="flex items-center gap-3">

          <FileText
            size={32}
            style={{
              color: "var(--primary)",
            }}
          />

          <h1
            className="text-4xl font-bold"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              color: "var(--text-primary)",
            }}
          >
            Documents
          </h1>

        </div>

        <p
          className="mt-3"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          Manage all your uploaded PDFs in one place.
        </p>

      </div>

      <div
        className="
          rounded-2xl
          border
          px-5
          py-3
        "
        style={{
          background: "var(--card)",
          borderColor: "var(--border)",
        }}
      >
        <p
          className="text-sm"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          Total Documents
        </p>

        <h2
          className="mt-1 text-3xl font-bold"
          style={{
            color: "var(--text-primary)",
          }}
        >
          {totalDocuments}
        </h2>

      </div>

    </div>
  );
}

export default DocumentsHeader;