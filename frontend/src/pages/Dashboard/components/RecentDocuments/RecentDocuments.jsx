import DocumentCard from "./DocumentCard";

function RecentDocuments() {
  return (
    <section className="mt-10">

      <div className="flex items-center justify-between">

        <h2
          className="text-2xl font-bold"
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            color: "var(--text-primary)",
          }}
        >
          Recent Documents
        </h2>

        <button
          style={{
            color: "var(--primary)",
          }}
        >
          View All
        </button>

      </div>

      <div
        className="
          mt-6
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-3
        "
      >

        <DocumentCard />
        <DocumentCard />
        <DocumentCard />

      </div>

    </section>
  );
}

export default RecentDocuments;