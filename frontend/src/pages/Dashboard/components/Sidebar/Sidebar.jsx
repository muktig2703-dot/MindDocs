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

function Sidebar() {
  return (
    <aside
      className="
        fixed
        left-0
        top-0
        z-40
        flex
        h-screen
        w-[280px]
        flex-col
        overflow-x-hidden
        overflow-y-auto
        p-6
        -translate-x-full
        lg:translate-x-0
        transition-transform
        duration-300
        scrollbar-thin
      "
      style={{
        background: "var(--surface)",
        borderRight: "1px solid var(--border)",
      }}
    >
      {/* Logo */}

      <div className="flex-shrink-0">

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
          to="/favourites"
          icon={Star}
          label="Favourites"
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

      {/* Bottom */}

      <div className="mt-auto pt-8 space-y-5">

        <StorageCard />

      </div>

    </aside>
  );
}

export default Sidebar;