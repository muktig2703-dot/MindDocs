import {
  Zap,
  Target,
  Shield,
  Brain,
  FileSearch,
  Sparkles,
} from "lucide-react";

import BenefitCard from "./BenefitCard";

const benefits = [
  {
    icon: Zap,
    title: "Fast",
    description:
      "Get answers from large documents in seconds without manually searching through pages.",
  },
  {
    icon: Target,
    title: "Accurate",
    description:
      "Semantic retrieval helps the AI provide precise and contextually relevant responses.",
  },
  {
    icon: Shield,
    title: "Private",
    description:
      "Your uploaded documents stay within your own workspace for secure analysis.",
  },
  {
    icon: Brain,
    title: "Context Aware",
    description:
      "The AI understands the meaning behind your questions instead of relying on keywords.",
  },
  {
    icon: FileSearch,
    title: "Source Based",
    description:
      "Answers are generated from your uploaded documents rather than generic internet knowledge.",
  },
  {
    icon: Sparkles,
    title: "Modern AI",
    description:
      "Powered by Gemini, LangChain, and vector search to deliver intelligent document conversations.",
  },
];

function Benefits() {
  return (
    <section
      id="benefits"
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
            Benefits
          </p>

          <h2
            className="mt-4 text-5xl font-bold"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
            }}
          >
            Why MindDocs?
          </h2>

          <p
            className="mx-auto mt-6 max-w-2xl"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Designed to help students, researchers,
            developers, and professionals work smarter
            with their documents using AI.
          </p>

        </div>

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              {...benefit}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Benefits;