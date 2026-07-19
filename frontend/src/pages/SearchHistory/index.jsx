import { useState } from "react";

import { useChat } from "../../context/ChatContext";

import HistoryHeader from "./components/HistoryHeader";
import HistoryToolbar from "./components/HistoryToolbar";
import HistoryEmpty from "./components/HistoryEmpty";
import HistoryList from "./components/HistoryList";
function History() {
  const {
  sessions,
  clearSessions,
  deleteSession,
} = useChat();

  const [search, setSearch] =
    useState("");

  const filteredHistory =
  sessions.filter((session) =>
    session.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div
      className="min-h-screen p-8"
      style={{
        background: "var(--background)",
      }}
    >
      <HistoryHeader
  total={sessions.length}
/>

      <HistoryToolbar
  search={search}
  setSearch={setSearch}
  clearHistory={clearSessions}
/>

      {filteredHistory.length ===
      0 ? (
        <HistoryEmpty />
      ) : (
        <HistoryList
  history={filteredHistory}
  deleteSession={deleteSession}
/>
      )}
    </div>
  );
}

export default History;