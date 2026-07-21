import { Search, ArrowUpDown } from "lucide-react";

function DocumentsToolbar({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div
      className="
        mt-10
        flex
        flex-col
        gap-4
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      <div
        className="
          flex
          items-center
          gap-3
          rounded-2xl
          border
          px-5
          py-3
          flex-1
        "
        style={{
          background: "var(--card)",
          borderColor: "var(--border)",
        }}
      >
        <Search
          size={20}
          style={{
            color: "var(--text-secondary)",
          }}
        />

        <input
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          placeholder="Search documents..."
          className="flex-1 bg-transparent outline-none"
          style={{
            color: "var(--text-primary)",
          }}
        />

      </div>

    </div>
  );
}

export default DocumentsToolbar;