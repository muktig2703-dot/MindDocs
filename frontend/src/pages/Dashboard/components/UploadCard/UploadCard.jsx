import { useRef, useState } from "react";
import { UploadCloud, FileText } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { uploadDocument } from "../../../../services/documentService";
function UploadCard({
  onUploadSuccess,
}) {
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const handleFileUpload = async (event) => {
  const file = event.target.files?.[0];

  if (!file) return;

  try {
    setUploading(true);
    setProgress(20);

    const response = await uploadDocument(file);
    setProgress(100);
    toast.success(response.message);
    onUploadSuccess?.({
  id: Date.now(),
  filename: response.filename,
  pages: response.pages,
  characters: response.characters,
  preview: response.preview,
  uploadedAt: new Date(),
});
    console.log(response);

  } catch (error) {
    console.error(error);

    toast.error(
      error.response?.data?.detail ||
      "Failed to upload document."
    );

  } finally {
    setUploading(false);

    setTimeout(() => {
      setProgress(0);
    }, 800);
  }
};
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
            px-5
            sm:px-8
            py-12
            sm:py-16
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
              h-16
              w-16
              sm:h-20
              sm:w-20
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
          <input
  type="file"
  accept=".pdf"
  ref={fileInputRef}
  hidden
  onChange={handleFileUpload}
/>

          <button
  onClick={() => fileInputRef.current.click()}
  disabled={uploading}
  className="
    mt-8
    rounded-xl
    px-6
    py-3
    font-medium
    transition-all
    duration-300
    hover:scale-105
    disabled:opacity-70
    disabled:cursor-not-allowed
  "
  style={{
    background: "var(--primary)",
    color: "#fff",
  }}
>
  {uploading ? "Uploading..." : "Browse Files"}
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
              {progress}%
            </span>

          </div>

          <div
            className="mt-3 h-2 rounded-full overflow-hidden"
            style={{
              background: "rgba(255,255,255,.06)",
            }}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
style={{
  width: `${progress}%`,
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