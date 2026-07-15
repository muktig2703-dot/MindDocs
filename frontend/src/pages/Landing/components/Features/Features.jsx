import {
  Upload,
  Search,
  Bot,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Upload,
    title: "Upload Documents",
    description:
      "Upload PDF documents securely and prepare them for intelligent semantic search.",

    points: [
      "Drag & Drop Upload",
      "Automatic Text Extraction",
      "Fast PDF Processing",
    ],
  },

  {
    icon: Search,
    title: "Semantic Search",
    description:
      "Search based on meaning instead of exact keywords using vector embeddings.",

    points: [
      "Context-aware Retrieval",
      "Vector Search",
      "Accurate Results",
    ],
  },

  {
    icon: Bot,
    title: "AI Powered Answers",
    description:
      "Receive intelligent responses grounded in your uploaded documents using modern LLMs.",

    points: [
      "Context-aware Responses",
      "Source-backed Answers",
      "Natural Conversations",
    ],
  },
];

function Features() {
  return (
    <section
      id="features"
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
            Features
          </p>

          <h2
            className="mt-4 text-5xl font-bold"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
            }}
          >
            Everything You Need
          </h2>

          <p
            className="mx-auto mt-6 max-w-2xl"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Built for researchers, students, developers,
            and professionals who need fast,
            trustworthy answers from their own documents.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;