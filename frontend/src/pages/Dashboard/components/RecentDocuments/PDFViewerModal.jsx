import { useEffect, useState } from "react";
import { X } from "lucide-react";

import api from "../../../../services/api";
import { useDocuments } from "../../../../context/DocumentContext";

function PDFViewerModal() {
  const {
    selectedDocument,
    setSelectedDocument,
  } = useDocuments();

  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    if (!selectedDocument) return;

    let objectUrl;

    const loadPdf = async () => {
      try {
        const response = await api.get(
          `/documents/${selectedDocument.id}/view`,
          {
            responseType: "blob",
          }
        );

        objectUrl = URL.createObjectURL(response.data);

        setPdfUrl(objectUrl);
      } catch (error) {
        console.error(error);
      }
    };

    loadPdf();

    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [selectedDocument]);

  if (!selectedDocument) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        bg-black/70
      "
    >
      <button
  onClick={() => {
    setSelectedDocument(null);
    setPdfUrl(null);
  }}
  className="
    fixed
    top-6
    right-6
    z-[9999]
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-full
    border
    shadow-2xl
    transition-all
    hover:scale-110
  "
  style={{
    background: "rgba(20,20,20,.85)",
    borderColor: "rgba(255,255,255,.15)",
    backdropFilter: "blur(10px)",
    color: "#fff",
  }}
>
  <X size={24} strokeWidth={2.5} />
</button>

      {pdfUrl && (
        <iframe
          title="PDF Viewer"
          src={pdfUrl}
          className="h-full w-full"
        />
      )}
    </div>
  );
}

export default PDFViewerModal;