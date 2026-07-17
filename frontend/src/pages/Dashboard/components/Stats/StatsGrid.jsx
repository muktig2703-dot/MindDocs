import {
  FileText,
  MessageSquare,
  HardDrive,
} from "lucide-react";

import StatCard from "./StatCard";
import formatFileSize from "../../../../utils/formatFileSize";
function StatsGrid({
    documents,
    messages,
}) {
  const totalQuestions = messages.filter(
  (message) => message.role === "user"
).length;

const totalResponses = messages.filter(
  (message) => message.role === "assistant"
).length;

const totalStorage = documents.reduce(
  (total, document) => total + document.size,
  0
);
  return (
    <section
      className="
        grid
        gap-6
        md:grid-cols-2
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3
      "
    >
      <StatCard
        icon={FileText}
        title="Documents Uploaded"
        value={documents.length}
        subtitle="+2 this week"
      />

      <StatCard
        icon={MessageSquare}
        title="Questions Asked"
        value={totalQuestions}
        subtitle="+18 today"
      />

      <StatCard
        icon={HardDrive}
        title="Storage Used"
        value={formatFileSize(totalStorage)}
        subtitle="68% utilized"
      />
    </section>
  );
}

export default StatsGrid;