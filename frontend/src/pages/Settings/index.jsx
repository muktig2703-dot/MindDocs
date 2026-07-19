import SettingsHeader from "./components/SettingsHeader";
import ProfileCard from "./components/ProfileCard";
import AppearanceCard from "./components/AppearanceCard";
import DataCard from "./components/DataCard";
import AccountCard from "./components/AccountCard"

function Settings() {
  return (
    <div
      className="min-h-screen p-8"
      style={{
        background: "var(--background)",
      }}
    >
      <SettingsHeader />

      <div className="mt-8 grid gap-8">
        <ProfileCard />

        <AppearanceCard />

        <DataCard />

        <AccountCard />
      </div>
    </div>
  );
}

export default Settings;