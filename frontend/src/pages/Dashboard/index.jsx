import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import StatsGrid from "./components/Stats/StatsGrid";
import SearchBar from "./components/SearchBar/SearchBar";
import UploadCard from "./components/UploadCard/UploadCard";
import RecentDocuments from "./components/RecentDocuments/RecentDocuments";
import Chat from "./components/Chat/Chat";
function Dashboard() {
  return (
    <div
      className="
        min-h-screen
        lg:grid
        lg:grid-cols-[280px_1fr_420px]
      "
      style={{
        background: "var(--background)",
      }}
    >
      <Sidebar />

      <main className="px-8 py-8">

        <Header />

        <StatsGrid />

        <SearchBar />

        <UploadCard />

        <RecentDocuments />

      </main>

      <Chat />
    </div>
  );
}

export default Dashboard;