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
  getStorage,
} from "../services/documentService";
import { getToken } from "../utils/authStorage";
const DocumentContext = createContext();

export function DocumentProvider({ children }) {
  const [documents, setDocuments] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [selectedDocument, setSelectedDocument] =
  useState(null);
  const [storage, setStorage] = useState({
  used: 0,
  total: 0,
});

  const fetchDocuments = async () => {
    try {
      const data = await getDocuments();
      setDocuments(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchStorage = async () => {
  try {
    const data = await getStorage();
    setStorage(data);
  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
  if (getToken()) {
    fetchDocuments();
    fetchStorage();
  }
}, []);


  const uploadNewDocument = async (file) => {
    await uploadDocument(file);
    await fetchDocuments();
    await fetchStorage();
  };

  const deleteDocument = async (id) => {
    await deleteDocumentApi(id);
    await fetchDocuments();
    await fetchStorage();
  };

  const renameDocument = async (
    id,
    filename
  ) => {
    await renameDocumentApi(id, filename);
    await fetchDocuments();
    await fetchStorage();
  };

  const togglePin = async (id) => {
    await togglePinApi(id);
    await fetchDocuments();
    await fetchStorage();
  };

  return (
    <DocumentContext.Provider
      value={{
        documents,
        storage,
        setDocuments,

        selectedQuestion,
        setSelectedQuestion,

        selectedDocument,
        setSelectedDocument,

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