import { HardDrive } from "lucide-react";
import { useDocuments } from "../../../../context/DocumentContext";
function StorageCard() {
  const { storage } = useDocuments();

const usedPercentage =
  storage.total > 0
    ? (storage.used / storage.total) * 100
    : 0;

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
            width: `${usedPercentage}%`,
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
        {(storage.used / (1024 * 1024)).toFixed(2)} MB of{" "}
{(storage.total / (1024 * 1024 * 1024)).toFixed(0)} GB used
      </p>

    </div>
  );
}

export default StorageCard;