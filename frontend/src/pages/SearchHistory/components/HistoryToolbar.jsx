import { Search, Trash2 } from "lucide-react";

function HistoryToolbar({
  search,
  setSearch,
  clearHistory,
}) {
  return (
    <div
      className="
        mt-8
        flex
        flex-col
        gap-4
        lg:flex-row
        lg:justify-between
      "
    >
      <div
        className="
          flex
          flex-1
          items-center
          gap-3
          rounded-2xl
          border
          px-5
          py-3
        "
        style={{
          background: "var(--card)",
          borderColor: "var(--border)",
        }}
      >
        <Search
          size={18}
          style={{
            color: "var(--text-secondary)",
          }}
        />

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search history..."
          className="flex-1 bg-transparent outline-none"
          style={{
            color: "var(--text-primary)",
          }}
        />
      </div>

      <button
        onClick={clearHistory}
        className="
          flex
          items-center
          gap-2
          rounded-2xl
          border
          px-5
          py-3
        "
        style={{
          background: "var(--card)",
          borderColor: "var(--border)",
          color: "#ef4444",
        }}
      >
        <Trash2 size={18} />
        Clear History
      </button>
    </div>
  );
}

export default HistoryToolbar;