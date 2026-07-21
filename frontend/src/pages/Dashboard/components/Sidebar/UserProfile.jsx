import { ChevronUp, Moon } from "lucide-react";
import { useAuth } from "../../../../context/AuthContext";
function UserProfile() {
  const { user } = useAuth();

const initials =
  user?.name
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase() || "U";
  return (
    <div
      className="
        rounded-2xl
        border
        p-4
      "
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      {/* User Info */}

      <div className="flex items-center gap-3">

        {/* Avatar */}

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            text-lg
            font-semibold
          "
          style={{
            background: "rgba(124,58,237,.15)",
            color: "var(--primary)",
          }}
        >
          {initials}
        </div>

        <div className="flex-1">

          <h4
            className="font-medium"
            style={{
              color: "var(--text-primary)",
            }}
          >
            {user?.name}
          </h4>

          <p
            className="text-sm"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            {user?.email}
          </p>

        </div>

      </div>

      {/* Divider */}

      <div
        className="my-4 h-px"
        style={{
          background: "var(--border)",
        }}
      />
    </div>
  );
}

export default UserProfile;