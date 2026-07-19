import {
  FileText,
  Calendar,
  FileArchive,
  MoreHorizontal,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";
import { useDocuments } from "../../../../context/DocumentContext";
function DocumentCard({
  document,
  deleteDocument,
  renameDocument,
}) {
  const [expanded, setExpanded] = useState(false);
  const { togglePin } = useDocuments();
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: .25,
      }}
      className="
        rounded-3xl
        border
        p-6
      "
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      {/* Top */}

      <div className="flex justify-between">

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
          "
          style={{
            background: "rgba(124,58,237,.12)",
          }}
        >
          <FileText
            size={28}
            style={{
              color: "var(--primary)",
            }}
          />
        </div>

        <button>
          <MoreHorizontal
            size={20}
            style={{
              color: "var(--text-secondary)",
            }}
          />
        </button>

      </div>

      {/* Title */}

      <h3
        className="
          mt-5
          text-lg
          font-semibold
        "
        style={{
          color: "var(--text-primary)",
        }}
      >
        {document.filename}
      </h3>

      {/* Meta */}

      <div
        className="
          mt-5
          space-y-3
          text-sm
        "
      >

        <div className="flex items-center gap-2">

          <Calendar size={15} />

          <span
            style={{
              color: "var(--text-secondary)",
            }}
          >
            {document.uploadedAt
  ? new Date(document.uploadedAt).toLocaleString()
  : "Just now"}
          </span>

        </div>

        <div className="flex items-center gap-2">

          <FileArchive size={15} />

          <span
            style={{
              color: "var(--text-secondary)",
            }}
          >
            {document.pages} Pages • {document.characters} Characters
          </span>

        </div>

      </div>

      {/* Actions */}

      <div
        className="
          mt-6
          flex
          flex-wrap
          gap-2
        "
      >

        <button
  onClick={() => setExpanded(!expanded)}
  className="rounded-xl border px-3 py-2 text-sm"
>
  {expanded ? "Close" : "Open"}
</button>

        <button className="rounded-xl border px-3 py-2 text-sm">
          Search
        </button>

        <button
  onClick={() => togglePin(document.filename)}
  className="rounded-xl border px-3 py-2 text-sm"
>
  {document.pinned ? " Unpin" : " Pin"}
</button>

        <button
  onClick={() => {
    const newName = prompt(
      "Rename document",
      document.filename
    );

    if (
      newName &&
      newName.trim()
    ) {
      renameDocument(
        document.filename,
        newName.trim()
      );
    }
  }}
  className="rounded-xl border px-3 py-2 text-sm"
>
  Rename
</button>

<button
  onClick={() => {
    if (window.confirm("Delete this document?")) {
      deleteDocument(document.filename);
    }
  }}
  className="rounded-xl border px-3 py-2 text-sm"
>
  Delete
</button>

      </div>
      {expanded && (
  <div
    className="mt-5 rounded-2xl p-4"
    style={{
      background: "rgba(255,255,255,.03)",
    }}
  >
    <p
      className="
        whitespace-pre-line
        leading-7
        text-sm
      "
      style={{
        color: "var(--text-secondary)",
      }}
    >
      {document.preview}
    </p>
  </div>
)}

    </motion.div>
  );
}

export default DocumentCard;