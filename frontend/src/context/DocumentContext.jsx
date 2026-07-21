import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getDocuments,
  uploadDocument,
  deleteDocument as deleteDocumentApi,
  renameDocument as renameDocumentApi,
  togglePin as togglePinApi,
} from "../services/documentService";
import { getToken } from "../utils/authStorage";
const DocumentContext = createContext();

export function DocumentProvider({ children }) {
  const [documents, setDocuments] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const fetchDocuments = async () => {
    try {
      const data = await getDocuments();
      setDocuments(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
  if (getToken()) {
    fetchDocuments();
  }
}, []);

  const uploadNewDocument = async (file) => {
    await uploadDocument(file);
    await fetchDocuments();
  };

  const deleteDocument = async (id) => {
    await deleteDocumentApi(id);
    await fetchDocuments();
  };

  const renameDocument = async (
    id,
    filename
  ) => {
    await renameDocumentApi(id, filename);
    await fetchDocuments();
  };

  const togglePin = async (id) => {
    await togglePinApi(id);
    await fetchDocuments();
  };

  return (
    <DocumentContext.Provider
      value={{
        documents,
        setDocuments,

        selectedQuestion,
        setSelectedQuestion,

        fetchDocuments,
        uploadNewDocument,
        deleteDocument,
        renameDocument,
        togglePin,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
}

export function useDocuments() {
  return useContext(DocumentContext);
}