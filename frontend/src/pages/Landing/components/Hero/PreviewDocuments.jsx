function PreviewDocuments() {
  const documents = [
    {
      name: "AI Research.pdf",
      pages: 48,
    },
    {
      name: "Deep Learning.pdf",
      pages: 126,
    },
    {
      name: "RAG Guide.pdf",
      pages: 34,
    },
  ];

  return (
    <div
      className="border-b p-6"
      style={{
        borderColor: "var(--border)",
      }}
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold">
          Recent Documents
        </h3>

        <span
          className="text-xs"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          3 Uploaded
        </span>
      </div>

      <div className="space-y-3">
        {documents.map((doc) => (
          <div
            key={doc.name}
            className="
              flex
              items-center
              justify-between
              rounded-xl
              p-3
              transition-all
              duration-300
              hover:translate-x-1
            "
            style={{
              background: "var(--card)",
            }}
          >
            <div>
              <p className="text-sm font-medium">
                {doc.name}
              </p>

              <p
                className="text-xs"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                {doc.pages} Pages
              </p>
            </div>

            <div
              className="h-2 w-2 rounded-full bg-green-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PreviewDocuments;