import { HardDrive } from "lucide-react";

function StorageCard() {
  const used = 68;

  return (
    <div
      className="
        rounded-2xl
        p-5
        border
      "
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      {/* Header */}

      <div className="flex items-center gap-2">

        <HardDrive
          size={18}
          style={{
            color: "var(--primary)",
          }}
        />

        <span
          className="font-medium"
          style={{
            color: "var(--text-primary)",
          }}
        >
          Storage
        </span>

      </div>

      {/* Progress */}

      <div
        className="mt-5 h-2 rounded-full overflow-hidden"
        style={{
          background: "rgba(255,255,255,.06)",
        }}
      >
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${used}%`,
            background: "var(--primary)",
          }}
        />
      </div>

      <p
        className="mt-3 text-sm"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        3.4 GB of 5 GB used
      </p>

      <button
        className="
          mt-5
          text-sm
          font-medium
          transition
          hover:opacity-80
        "
        style={{
          color: "var(--primary)",
        }}
      >
        Upgrade Storage
      </button>

    </div>
  );
}

export default StorageCard;