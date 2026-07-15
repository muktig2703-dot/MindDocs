import {
  Upload,
  FileText,
  BrainCircuit,
  Database,
  MessageSquare,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import TimelineCard from "./TimelineCard";

const steps = [
  {
    icon: Upload,
    title: "Upload PDF",
    description: "Upload one or more PDF documents.",
  },
  {
    icon: FileText,
    title: "Extract Text",
    description: "Text is extracted and cleaned automatically.",
  },
  {
    icon: BrainCircuit,
    title: "Generate Embeddings",
    description: "Gemini creates semantic embeddings.",
  },
  {
    icon: Database,
    title: "Store in FAISS",
    description: "Embeddings are indexed for retrieval.",
  },
  {
    icon: MessageSquare,
    title: "Ask Questions",
    description: "Ask anything about your uploaded files.",
  },
  {
    icon: Sparkles,
    title: "AI Answers",
    description: "Receive contextual answers backed by your PDFs.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
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
            Workflow
          </p>

          <h2
            className="mt-4 text-5xl font-bold"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
            }}
          >
            How MindDocs Works
          </h2>

          <p
            className="mx-auto mt-6 max-w-2xl"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            From upload to intelligent answers in six simple steps.
          </p>

        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex items-center gap-6"
            >
              <TimelineCard {...step} />

              {index < steps.length - 1 && (
                <ArrowRight
                  size={24}
                  color="var(--primary)"
                />
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;