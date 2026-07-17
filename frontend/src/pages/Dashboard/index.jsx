import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import StatsGrid from "./components/Stats/StatsGrid";
import SearchBar from "./components/SearchBar/SearchBar";
import UploadCard from "./components/UploadCard/UploadCard";
import RecentDocuments from "./components/RecentDocuments/RecentDocuments";
import ChatPanel from "./components/Chat/ChatPanel";
function Dashboard() {
  const [documents, setDocuments] = useState([]);
  const [messages, setMessages] = useState([]);
  const deleteDocument = (filename) => {
  setDocuments((prev) =>
    prev.filter((doc) => doc.filename !== filename)
  );
};

const renameDocument = (filename, newName) => {
  setDocuments((prev) =>
    prev.map((doc) =>
      doc.filename === filename
        ? {
            ...doc,
            filename: newName,
          }
        : doc
    )
  );
};
  return (
    <div
      className="
        min-h-screen
        lg:ml-[280px]
        transition-all
      "
      style={{
        background: "var(--background)",
      }}
    >
      <Sidebar />

      <main className="px-6 py-8 lg:px-8">

  <Header />

  <StatsGrid
    documents={documents}
    messages={messages}
/>

  <SearchBar />

  <div
    className="
      mt-8
      grid
      grid-cols-1
      gap-8
      2xl:grid-cols-[1.15fr_.85fr]
    "
  >
    {/* Left Workspace */}

    <div>
      <UploadCard
    setDocuments={setDocuments}
/>

      <RecentDocuments
  documents={documents}
  deleteDocument={deleteDocument}
  renameDocument={renameDocument}
/>
    </div>

    {/* Right Chat */}

    <ChatPanel
    messages={messages}
    setMessages={setMessages}
/>

  </div>

</main>

    </div>
  );
}

export default Dashboard;