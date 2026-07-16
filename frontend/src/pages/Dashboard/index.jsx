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

  <StatsGrid />

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
  onUploadSuccess={(document) =>
    setDocuments((prev) => [document, ...prev])
  }
/>

      <RecentDocuments
  documents={documents}
/>
    </div>

    {/* Right Chat */}

    <ChatPanel />

  </div>

</main>

    </div>
  );
}

export default Dashboard;