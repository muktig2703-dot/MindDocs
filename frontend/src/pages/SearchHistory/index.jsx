import { useState } from "react";

import { useDocuments } from "../../context/DocumentContext";

import HistoryHeader from "./components/HistoryHeader";
import HistoryToolbar from "./components/HistoryToolbar";
import HistoryEmpty from "./components/HistoryEmpty";
import HistoryList from "./components/HistoryList";
function History() {
  const {
    history,
    clearHistory,
    deleteHistory,
  } = useDocuments();

  const [search, setSearch] =
    useState("");

  const filteredHistory =
    history.filter((item) =>
      item.question
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
        total={history.length}
      />

      <HistoryToolbar
        search={search}
        setSearch={setSearch}
        clearHistory={clearHistory}
      />

      {filteredHistory.length ===
      0 ? (
        <HistoryEmpty />
      ) : (
        <HistoryList
  history={filteredHistory}
  deleteHistory={deleteHistory}
/>
      )}
    </div>
  );
}

export default History;