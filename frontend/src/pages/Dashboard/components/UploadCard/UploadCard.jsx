import { UploadCloud, FileText } from "lucide-react";
import { motion } from "framer-motion";

function UploadCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-8"
    >
      <div
        className="
          rounded-3xl
          border
          p-8
        "
        style={{
          background: "var(--card)",
          borderColor: "var(--border)",
        }}
      >
        {/* Heading */}

        <h2
          className="text-2xl font-bold"
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            color: "var(--text-primary)",
          }}
        >
          Upload Documents
        </h2>

        <p
          className="mt-2"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          Upload PDFs and let MindDocs build a semantic knowledge base.
        </p>

        {/* Drop Zone */}

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="
            mt-8
            rounded-3xl
            border-2
            border-dashed
            px-8
            py-16
            text-center
            transition-all
            duration-300
          "
          style={{
            borderColor: "rgba(124,58,237,.35)",
            background: "rgba(124,58,237,.05)",
          }}
        >
          <div
            className="
              mx-auto
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
            "
            style={{
              background: "rgba(124,58,237,.12)",
            }}
          >
            <UploadCloud
              size={36}
              style={{
                color: "var(--primary)",
              }}
            />
          </div>

          <h3
            className="mt-6 text-xl font-semibold"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Drag & Drop your PDF here
          </h3>

          <p
            className="mt-3"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            or browse files from your computer
          </p>

          <button
            className="
              mt-8
              rounded-xl
              px-6
              py-3
              font-medium
              transition-all
              duration-300
              hover:scale-105
            "
            style={{
              background: "var(--primary)",
              color: "#fff",
            }}
          >
            Browse Files
          </button>

          <div
            className="
              mt-8
              flex
              justify-center
              items-center
              gap-3
              text-sm
            "
            style={{
              color: "var(--text-secondary)",
            }}
          >
            <FileText size={16} />
            PDF • Maximum file size 25 MB
          </div>
        </motion.div>

        {/* Upload Progress (Placeholder) */}

        <div className="mt-8">

          <div className="flex justify-between">

            <span
              style={{
                color: "var(--text-primary)",
              }}
            >
              Upload Progress
            </span>

            <span
              style={{
                color: "var(--primary)",
              }}
            >
              0%
            </span>

          </div>

          <div
            className="mt-3 h-2 rounded-full overflow-hidden"
            style={{
              background: "rgba(255,255,255,.06)",
            }}
          >
            <div
              className="h-full w-0 rounded-full"
              style={{
                background: "var(--primary)",
              }}
            />
          </div>

        </div>

      </div>
    </motion.section>
  );
}

export default UploadCard;