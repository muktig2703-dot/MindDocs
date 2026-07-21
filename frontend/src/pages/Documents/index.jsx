import { useState } from "react";

import DocumentsHeader from "./components/DocumentsHeader";
import DocumentsToolbar from "./components/DocumentsToolbar";
import DocumentsTable from "./components/DocumentsTable";
import { useDocuments } from "../../context/DocumentContext";
function Documents() {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    documents,
    deleteDocument,
    renameDocument,
} = useDocuments();

  const filteredDocuments = documents.filter(
  (document) =>
    document.filename
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
);

  return (
    <div
      className="min-h-screen p-8"
      style={{
        background: "var(--background)",
      }}
    >
      <DocumentsHeader
  totalDocuments={documents.length}
/>

      <DocumentsToolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <DocumentsTable
  documents={filteredDocuments}
  deleteDocument={deleteDocument}
  renameDocument={renameDocument}
/>

    </div>
  );
}

export default Documents;