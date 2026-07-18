import { createContext, useContext, useState } from "react";

const DocumentContext = createContext();

export function DocumentProvider({ children }) {
  const [documents, setDocuments] = useState([]);
  const [history, setHistory] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const addHistory = ({
  question,
  filename,
}) => {
  setHistory((prev) => [
    {
      id: Date.now(),
      question,
      filename,
      createdAt: new Date().toISOString(),
    },
    ...prev,
  ]);
};

const deleteHistory = (id) => {
  setHistory((prev) =>
    prev.filter((item) => item.id !== id)
  );
};

const clearHistory = () => {
  setHistory([]);
};

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
        history,
        addHistory,
        deleteHistory,
        clearHistory,
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