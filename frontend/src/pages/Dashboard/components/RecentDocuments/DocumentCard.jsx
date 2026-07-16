import {
  FileText,
  Calendar,
  FileArchive,
  MoreHorizontal,
} from "lucide-react";

import { motion } from "framer-motion";

function DocumentCard() {
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
        AI Research Paper.pdf
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
            Uploaded Today
          </span>

        </div>

        <div className="flex items-center gap-2">

          <FileArchive size={15} />

          <span
            style={{
              color: "var(--text-secondary)",
            }}
          >
            42 Pages • 3.6 MB
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

        <button className="rounded-xl border px-3 py-2 text-sm">
          Open
        </button>

        <button className="rounded-xl border px-3 py-2 text-sm">
          Search
        </button>

        <button className="rounded-xl border px-3 py-2 text-sm">
          Rename
        </button>

      </div>

    </motion.div>
  );
}

export default DocumentCard;