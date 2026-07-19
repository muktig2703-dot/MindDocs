import { Settings } from "lucide-react";

function SettingsHeader() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Settings
          size={30}
          style={{
            color: "var(--primary)",
          }}
        />

        <h1
          className="text-4xl font-bold"
          style={{
            fontFamily:
              '"Space Grotesk", sans-serif',
            color: "var(--text-primary)",
          }}
        >
          Settings
        </h1>
      </div>

      <p
        className="mt-3"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        Manage your profile, preferences and account.
      </p>
    </div>
  );
}

export default SettingsHeader;