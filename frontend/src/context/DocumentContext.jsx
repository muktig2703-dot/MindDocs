import { createContext, useContext, useState } from "react";

const DocumentContext = createContext();

export function DocumentProvider({ children }) {
  const [documents, setDocuments] = useState([]);

  return (
    <DocumentContext.Provider
      value={{
        documents,
        setDocuments,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
}

export function useDocuments() {
  return useContext(DocumentContext);
}