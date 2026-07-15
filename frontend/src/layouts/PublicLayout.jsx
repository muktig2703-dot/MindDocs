import { Outlet } from "react-router-dom";

import Navbar from "../components/navigation/Navbar";

function PublicLayout() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      <Navbar />

      <Outlet />
    </div>
  );
}

export default PublicLayout;