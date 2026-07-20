import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useDocuments } from "../../../context/DocumentContext";
import { useChat } from "../../../context/ChatContext";

function AccountCard() {
  const navigate = useNavigate();

  const { resetAppData } = useDocuments();
  const { resetChats } = useChat();

  const logout = () => {
    if (!window.confirm("Logout from MindDocs?")) return;

    toast.success("Logged out.");

    navigate("/login");
  };

  const deleteAccount = () => {
    const confirmed = window.confirm(
      "This will permanently remove all local data. Continue?"
    );

    if (!confirmed) return;

    resetChats();
    resetAppData();

    localStorage.clear();

    toast.success("Account deleted.");

    navigate("/login");
  };

  return (
    <div
      className="rounded-3xl border p-8"
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      <h2
        className="text-2xl font-bold"
        style={{
          color: "var(--text-primary)",
        }}
      >
        Account
      </h2>

      <div className="mt-8 flex flex-wrap gap-4">
        <button
          onClick={logout}
          className="rounded-xl border px-5 py-3"
        >
          Logout
        </button>

        <button
          onClick={deleteAccount}
          className="rounded-xl px-5 py-3"
          style={{
            background: "#dc2626",
            color: "#fff",
          }}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default AccountCard;