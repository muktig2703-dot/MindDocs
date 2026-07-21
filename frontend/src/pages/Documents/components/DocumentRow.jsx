import {
  FileText,
  Pencil,
  Trash2,
  FolderOpen,
  Star,
} from "lucide-react";
import { useDocuments } from "../../../context/DocumentContext";
function DocumentRow({
  document,
  deleteDocument,
  renameDocument,
}) {
  const { togglePin } = useDocuments();
  return (
    <div
      className="
        grid
        grid-cols-[3fr_80px_120px_150px_160px]
        items-center
        gap-4
        border-b
        px-6
        py-5
        transition-all
        hover:bg-white/5
      "
      style={{
        borderColor: "var(--border)",
      }}
    >
      {/* File */}

      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
          "
          style={{
            background: "rgba(124,58,237,.12)",
          }}
        >
          <FileText
            size={22}
            style={{
              color: "var(--primary)",
            }}
          />
        </div>

        <div>

          <h3
            className="font-medium"
            style={{
              color: "var(--text-primary)",
            }}
          >
            {document.filename}
          </h3>

        </div>

      </div>

      <span>{document.pages}</span>

      <span>
  {
  document.size >= 1024 * 1024
    ? `${(document.size / 1024 / 1024).toFixed(2)} MB`
    : `${(document.size / 1024).toFixed(2)} KB`
}
</span>

      
<span>
  {document.uploaded_at
    ? new Date(document.uploaded_at).toLocaleDateString("en-IN", {
        timeZone: "Asia/Kolkata",
      })
    : "-"}
</span>

      {/* Actions */}

      <div className="flex gap-2">

        <button
  className="rounded-xl p-2 transition hover:bg-yellow-500/20"
  title={
    document.pinned
      ? "Unpin"
      : "Pin"
  }
  onClick={() =>
    togglePin(document.id)
  }
>
  <Star
    size={18}
    fill={
      document.pinned
        ? "currentColor"
        : "none"
    }
    style={{
      color: document.pinned
        ? "#FACC15"
        : "var(--text-secondary)",
    }}
  />
</button>

        <button
          className="rounded-xl p-2 transition hover:bg-white/10"
          title="Rename"
          onClick={() => {
            const name = prompt(
              "Rename document",
              document.id
            );

            if (name) {
              renameDocument(
                document.id,
                name
              );
            }
          }}
        >
          <Pencil size={18} />
        </button>

        <button
          className="rounded-xl p-2 transition hover:bg-red-500/20"
          title="Delete"
          onClick={() =>
            deleteDocument(
              document.id
            )
          }
        >
          <Trash2 size={18} />
        </button>

      </div>

    </div>
  );
}

export default DocumentRow;