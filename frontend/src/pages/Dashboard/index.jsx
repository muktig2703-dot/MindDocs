import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import StatsGrid from "./components/Stats/StatsGrid";
import SearchBar from "./components/SearchBar/SearchBar";
import UploadCard from "./components/UploadCard/UploadCard";
import RecentDocuments from "./components/RecentDocuments/RecentDocuments";
import ChatPanel from "./components/Chat/ChatPanel";
import { useDocuments } from "../../context/DocumentContext";
function Dashboard() {
  const {
    documents,
    deleteDocument,
    renameDocument,
} = useDocuments();
  const [searchTerm, setSearchTerm] = useState("");
  const [messages, setMessages] = useState([]);

const filteredDocuments = documents.filter((document) =>
  document.filename
    .toLowerCase()
    .includes(searchTerm.toLowerCase())
);
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

  <SearchBar
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
/>

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
/>

      <RecentDocuments
  deleteDocument={deleteDocument}
  renameDocument={renameDocument}
  searchTerm={searchTerm}
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