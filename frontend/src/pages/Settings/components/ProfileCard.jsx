import { User } from "lucide-react";
import { useDocuments } from "../../../context/DocumentContext";
import toast from "react-hot-toast";
function ProfileCard() {
  const {
  profile,
  setProfile,
} = useDocuments();

const handleChange = (field, value) => {
  setProfile((prev) => ({
    ...prev,
    [field]: value,
  }));
};

const saveProfile = () => {
  toast.success("Profile updated successfully.");
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
        Profile
      </h2>

      <div className="mt-8 flex items-center gap-6">
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full"
          style={{
            background: "rgba(124,58,237,.15)",
          }}
        >
          <User
            size={36}
            style={{
              color: "var(--primary)",
            }}
          />
        </div>

        <div className="flex-1 grid gap-4">
          <input
            value={profile.name}
onChange={(e) =>
  handleChange("name", e.target.value)
}
            placeholder="Name"
            className="rounded-xl border p-3 bg-transparent outline-none"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-primary)",
            }}
          />

          <input
            value={profile.username}
onChange={(e) =>
  handleChange("username", e.target.value)
}
            placeholder="Username"
            className="rounded-xl border p-3 bg-transparent outline-none"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-primary)",
            }}
          />

          <input
            value={profile.email}
onChange={(e) =>
  handleChange("email", e.target.value)
}
            placeholder="Email"
            className="rounded-xl border p-3 bg-transparent outline-none"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-primary)",
            }}
          />
          <button
  onClick={saveProfile}
  disabled={
    !profile.name.trim() ||
    !profile.username.trim() ||
    !profile.email.trim()
  }
  className="
mt-6
rounded-xl
px-5
py-3
disabled:opacity-50
disabled:cursor-not-allowed
"
  style={{
    background: "var(--primary)",
    color: "#fff",
  }}
>
  Save Profile
</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;