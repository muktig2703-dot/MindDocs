import PreviewDocuments from "./PreviewDocuments";
import PreviewChat from "./PreviewChat";

function PreviewWorkspace() {
  return (
    <div
    className="
        flex
        h-full
        flex-1
        flex-col
        overflow-hidden
    "
>

      {/* Header */}

      <div
        className="border-b p-6"
        style={{
          borderColor: "var(--border)",
        }}
      >
        <h2 className="text-xl font-semibold">
          AI Workspace
        </h2>

        <p
          className="mt-2 text-sm"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          Chat with your uploaded documents
        </p>
      </div>

      {/* Stats */}

      <div
        className="
          grid
          grid-cols-3
          gap-3
          border-b
          p-6
        "
        style={{
          borderColor: "var(--border)",
        }}
      >
        <div>
          <h2 className="text-xl font-bold">
            12
          </h2>

          <p
            className="text-xs"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            PDFs
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold">
            156
          </h2>

          <p
            className="text-xs"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Questions
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold">
            99%
          </h2>

          <p
            className="text-xs"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Accuracy
          </p>
        </div>
      </div>

      <PreviewDocuments />

      <PreviewChat />

    </div>
  );
}

export default PreviewWorkspace;