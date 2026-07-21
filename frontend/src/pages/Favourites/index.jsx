import { useDocuments } from "../../context/DocumentContext";

import DocumentsTable from "../Documents/components/DocumentsTable";
import EmptyState from "../Documents/components/EmptyState";

function Favourites() {
  const {
    documents,
    deleteDocument,
    renameDocument,
} = useDocuments();

  const favourites = documents.filter(
    (doc) => doc.pinned
  );

  return (
    <div
      className="min-h-screen p-8"
      style={{
        background: "var(--background)",
      }}
    >
      <h1
        className="text-4xl font-bold"
        style={{
          fontFamily:
            '"Space Grotesk", sans-serif',
          color:
            "var(--text-primary)",
        }}
      >
        Favourites
      </h1>

      <p
        className="mt-3"
        style={{
          color:
            "var(--text-secondary)",
        }}
      >
        Your pinned documents.
      </p>

      {favourites.length === 0 ? (
        <EmptyState />
      ) : (
        <DocumentsTable
          documents={favourites}
          deleteDocument={
            deleteDocument
          }
          renameDocument={
            renameDocument
          }
        />
      )}
    </div>
  );
}

export default Favourites;