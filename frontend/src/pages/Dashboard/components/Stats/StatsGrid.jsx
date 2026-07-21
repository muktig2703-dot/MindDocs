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

const STORAGE_LIMIT = 5 * 1024 * 1024 * 1024;

const storagePercentage =
  ((totalStorage / STORAGE_LIMIT) * 100).toFixed(2);
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
        subtitle={`${documents.filter((doc) => {
  const uploaded = new Date(doc.uploaded_at);
  const today = new Date();
  const diff =
    (today - uploaded) / (1000 * 60 * 60 * 24);

  return diff <= 7;
}).length} uploaded this week`}
      />

      <StatCard
        icon={MessageSquare}
        title="Questions Asked"
        value={totalQuestions}
        subtitle={`${totalResponses} AI responses`}
      />

      <StatCard
        icon={HardDrive}
        title="Storage Used"
        value={formatFileSize(totalStorage)}
        subtitle={`${storagePercentage}% of 5 GB`}
      />
    </section>
  );
}

export default StatsGrid;