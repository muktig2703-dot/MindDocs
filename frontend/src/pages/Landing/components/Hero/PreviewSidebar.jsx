import {
  LayoutDashboard,
  FileText,
  Clock3,
  Star,
  Settings,
} from "lucide-react";

const items = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    icon: FileText,
    label: "Documents",
  },
  {
    icon: Clock3,
    label: "History",
  },
  {
    icon: Star,
    label: "Favorites",
  },
  {
    icon: Settings,
    label: "Settings",
  },
];

function PreviewSidebar() {
  return (
    <aside
      className="
        flex
        w-52
        flex-col
        border-r
        p-6
      "
      style={{
        borderColor: "var(--border)",
      }}
    >
      <h3
        className="mb-8 text-lg font-semibold"
        style={{
          color: "var(--text-primary)",
        }}
      >
        MindDocs
      </h3>

      <div className="space-y-3">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
  key={item.label}
  className="
    flex
    items-center
    gap-3
    rounded-xl
    px-3
    py-3
    transition-all
    duration-300
  "
  style={{
    background:
      item.label === "Dashboard"
        ? "rgba(124, 58, 237, 0.18)"
        : "transparent",
  }}
>
  <Icon
    size={18}
    style={{
      color:
        item.label === "Dashboard"
          ? "var(--primary)"
          : "var(--text-primary)",
    }}
  />

  <span
    style={{
      color:
        item.label === "Dashboard"
          ? "var(--primary)"
          : "var(--text-primary)",
    }}
  >
    {item.label}
  </span>
</div>
          );
        })}

      </div>
    </aside>
  );
}

export default PreviewSidebar;