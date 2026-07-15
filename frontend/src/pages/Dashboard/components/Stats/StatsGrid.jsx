import {
  FileText,
  MessageSquare,
  HardDrive,
} from "lucide-react";

import StatCard from "./StatCard";

function StatsGrid() {
  return (
    <section
      className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      <StatCard
        icon={FileText}
        title="Documents Uploaded"
        value="12"
        subtitle="+2 this week"
      />

      <StatCard
        icon={MessageSquare}
        title="Questions Asked"
        value="248"
        subtitle="+18 today"
      />

      <StatCard
        icon={HardDrive}
        title="Storage Used"
        value="3.4 GB"
        subtitle="68% utilized"
      />
    </section>
  );
}

export default StatsGrid;