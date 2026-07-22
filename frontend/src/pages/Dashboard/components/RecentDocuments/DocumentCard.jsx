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
  const { togglePin, setSelectedDocument } = useDocuments();
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
            {document.uploaded_at
  ? new Date(document.uploaded_at).toLocaleString()
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
  onClick={() => setSelectedDocument(document)}
  className="rounded-xl border px-3 py-2 text-sm"
>
  Open
</button>

        <button
  onClick={() => togglePin(document.id)}
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
        document.id,
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
      deleteDocument(document.id);
    }
  }}
  className="rounded-xl border px-3 py-2 text-sm"
>
  Delete
</button>

      </div>
    </motion.div>
  );
}
export default DocumentCard;