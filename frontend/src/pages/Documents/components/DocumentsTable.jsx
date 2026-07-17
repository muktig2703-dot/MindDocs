import DocumentRow from "./DocumentRow";
import EmptyState from "./EmptyState";

function DocumentsTable({
  documents,
  deleteDocument,
  renameDocument,
}) {
  if (documents.length === 0) {
    return <EmptyState />;
  }

  return (
    <div
      className="
        mt-8
        overflow-hidden
        rounded-3xl
        border
      "
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      {/* Table Header */}

      <div
        className="
          grid
          grid-cols-[3fr_80px_120px_150px_160px]
          gap-4
          border-b
          px-6
          py-4
          text-sm
          font-semibold
        "
        style={{
          borderColor: "var(--border)",
          color: "var(--text-secondary)",
        }}
      >
        <span>Name</span>
        <span>Pages</span>
        <span>Size</span>
        <span>Uploaded</span>
        <span>Actions</span>
      </div>

      {documents.map((document) => (
        <DocumentRow
          key={document.filename}
          document={document}
          deleteDocument={deleteDocument}
          renameDocument={renameDocument}
        />
      ))}
    </div>
  );
}

export default DocumentsTable;