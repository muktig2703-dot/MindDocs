import { useDocuments } from "../../../context/DocumentContext";
import { useChat } from "../../../context/ChatContext";
import toast from "react-hot-toast";

function DataCard() {
  const {
    documents,
    setDocuments,
    clearHistory,
    history,
  } = useDocuments();

  const {
    sessions,
    clearSessions,
  } = useChat();

  const downloadData = () => {
    const data = {
      documents,
      history,
      chats: sessions,
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob(
      [JSON.stringify(data, null, 2)],
      {
        type: "application/json",
      }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "minddocs-data.json";

    link.click();

    URL.revokeObjectURL(url);

    toast.success("User data downloaded.");
  };

  const clearChats = () => {
    if (
      !window.confirm(
        "Clear all chat history?"
      )
    )
      return;

    clearSessions();
    clearHistory();

    toast.success("Chat history cleared.");
  };

  const clearDocuments = () => {
    if (
      !window.confirm(
        "Delete all uploaded documents?"
      )
    )
      return;

    setDocuments([]);

    toast.success("Documents deleted.");
  };

  return (
    <div
      className="rounded-3xl border p-8"
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      <h2
        className="text-2xl font-bold"
        style={{
          color: "var(--text-primary)",
        }}
      >
        Data
      </h2>

      <div className="mt-8 flex flex-wrap gap-4">

        <button
          onClick={downloadData}
          className="rounded-xl border px-5 py-3"
        >
          Download User Data
        </button>

        <button
          onClick={clearChats}
          className="rounded-xl border px-5 py-3"
        >
          Clear Chat History
        </button>

        <button
          onClick={clearDocuments}
          className="rounded-xl border px-5 py-3"
        >
          Clear Documents
        </button>

      </div>
    </div>
  );
}

export default DataCard;