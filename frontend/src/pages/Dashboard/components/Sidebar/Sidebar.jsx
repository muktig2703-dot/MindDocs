import {
  LayoutDashboard,
  FileText,
  History,
  Star,
  Settings,
  LogOut,
} from "lucide-react";

import NavItem from "./NavItem";
import StorageCard from "./StorageCard";
import UserProfile from "./UserProfile";

function Sidebar() {
  return (
    <aside
      className="
        hidden
        lg:flex
        h-screen
        sticky
        top-0
        w-[280px]
        flex-col
        border-r
        px-5
        py-6
      "
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      {/* Logo */}

      <div>

        <h1
          className="text-3xl font-bold"
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            color: "var(--text-primary)",
          }}
        >
          MindDocs
        </h1>

        <p
          className="mt-2 text-sm"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          AI Document Workspace
        </p>

      </div>

      {/* Navigation */}

      <nav className="mt-10 flex flex-col gap-2">

        <NavItem
          to="/dashboard"
          icon={LayoutDashboard}
          label="Dashboard"
        />

        <NavItem
          to="/documents"
          icon={FileText}
          label="Documents"
        />

        <NavItem
          to="/history"
          icon={History}
          label="Search History"
        />

        <NavItem
          to="/favorites"
          icon={Star}
          label="Favorites"
        />

        <NavItem
          to="/settings"
          icon={Settings}
          label="Settings"
        />

        <NavItem
          to="/logout"
          icon={LogOut}
          label="Logout"
        />

      </nav>

      {/* Bottom Section */}

      <div className="mt-auto space-y-5">

        <StorageCard />

        <UserProfile />

      </div>

    </aside>
  );
}

export default Sidebar;