import TechBadge from "./TechBadge";

const technologies = [
  "React",
  "Tailwind CSS",
  "FastAPI",
  "LangChain",
  "Google Gemini",
  "FAISS",
  "Python",
  "Framer Motion",
  "Lucide React",
  "React Router",
];

function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p
            className="text-sm uppercase tracking-[0.3em]"
            style={{
              color: "var(--primary)",
            }}
          >
            Technology
          </p>

          <h2
            className="mt-4 text-5xl font-bold"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
            }}
          >
            Built with Modern Technologies
          </h2>

          <p
            className="mx-auto mt-6 max-w-2xl"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            MindDocs combines modern frontend development,
            AI, vector search, and scalable backend
            technologies to deliver intelligent document
            conversations.
          </p>

        </div>

        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-5
          "
        >
          {technologies.map((tech) => (
            <TechBadge
              key={tech}
              name={tech}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechStack;