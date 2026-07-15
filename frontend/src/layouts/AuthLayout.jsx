import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      <Outlet />
    </div>
  );
}

export default AuthLayout;