import { createContext, useContext, useState, useEffect } from "react";

const DocumentContext = createContext();

export function DocumentProvider({ children }) {
  const [documents, setDocuments] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("minddocs-profile");
    return saved
    ? JSON.parse(saved)
    : {
        name: "Mukti",
        username: "@mukti",
        email: "mukti@email.com",
      };
});

  useEffect(() => {
  localStorage.setItem(
    "minddocs-profile",
    JSON.stringify(profile)
  );
}, [profile]);

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

  const resetAppData = () => {
  setDocuments([]);
  setSelectedQuestion("");
  setProfile({
    name: "Mukti",
    username: "@mukti",
    email: "mukti@email.com",
  });

  localStorage.removeItem("minddocs-profile");
};
  return (
    <DocumentContext.Provider
      value={{
        documents,
        setDocuments,

        selectedQuestion,
        setSelectedQuestion,

        togglePin,

        profile,
        setProfile,
        
        resetAppData,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
}

export function useDocuments() {
  return useContext(DocumentContext);
}