import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      <Outlet />
    </div>
  );
}

export default DashboardLayout;