import { createContext, useContext, useState } from "react";

const DocumentContext = createContext();

export function DocumentProvider({ children }) {
  const [documents, setDocuments] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const togglePin = (filename) => {
  setDocuments((prev) =>
    prev.map((doc) =>
      doc.filename === filename
        ? {
            ...doc,
            pinned: !doc.pinned,
          }
        : doc
    )
  );
};

  return (
    <DocumentContext.Provider
      value={{
        documents,
        setDocuments,
        togglePin,
        selectedQuestion,
        setSelectedQuestion,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
}

export function useDocuments() {
  return useContext(DocumentContext);
}