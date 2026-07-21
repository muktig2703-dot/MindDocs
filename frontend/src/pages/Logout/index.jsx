import { LogOut } from "lucide-react";
import toast from "react-hot-toast";
import { useChat } from "../../context/ChatContext";
import { useDocuments } from "../../context/DocumentContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
function Logout() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const { resetChats } = useChat();

  const { setDocuments } = useDocuments();

  const handleLogout = () => {
    const confirmed = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmed) return;

    // Future:
    // localStorage.removeItem("token");

    logout();

resetChats();
setDocuments([]);

toast.success("Logged out successfully.");

navigate("/login");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-8"
      style={{
        background: "var(--background)",
      }}
    >
      <div
        className="w-full max-w-lg rounded-3xl border p-10 text-center"
        style={{
          background: "var(--card)",
          borderColor: "var(--border)",
        }}
      >
        <div
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full"
          style={{
            background: "rgba(220,38,38,.12)",
          }}
        >
          <LogOut
            size={36}
            color="#dc2626"
          />
        </div>

        <h1
          className="mt-6 text-3xl font-bold"
          style={{
            color: "var(--text-primary)",
          }}
        >
          Logout
        </h1>

        <p
          className="mt-3"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          You'll be returned to the login screen.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="rounded-xl border px-6 py-3"
            style={{
              borderColor: "var(--border)",
            }}
          >
            Cancel
          </button>

          <button
            onClick={handleLogout}
            className="rounded-xl px-6 py-3"
            style={{
              background: "#dc2626",
              color: "#fff",
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;