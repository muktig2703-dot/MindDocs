import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import toast from "react-hot-toast";

function AppearanceCard() {
  const {
    theme,
    setTheme,
  } = useTheme();

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    toast.success(
      `${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} theme enabled`
    );
  };

  const buttonStyle = (value) => ({
    background:
      theme === value
        ? "var(--primary)"
        : "transparent",

    color:
      theme === value
        ? "#fff"
        : "var(--text-primary)",

    borderColor: "var(--border)",
  });

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
        Appearance
      </h2>

      <div className="mt-8 flex flex-wrap gap-4">

        <button
          onClick={() => changeTheme("light")}
          className="rounded-xl border px-5 py-3 flex items-center gap-2 transition-all"
          style={buttonStyle("light")}
        >
          <Sun size={18} />
          Light
        </button>

        <button
          onClick={() => changeTheme("dark")}
          className="rounded-xl border px-5 py-3 flex items-center gap-2 transition-all"
          style={buttonStyle("dark")}
        >
          <Moon size={18} />
          Dark
        </button>

        <button
          onClick={() => changeTheme("system")}
          className="rounded-xl border px-5 py-3 flex items-center gap-2 transition-all"
          style={buttonStyle("system")}
        >
          <Monitor size={18} />
          System
        </button>

      </div>
    </div>
  );
}

export default AppearanceCard;