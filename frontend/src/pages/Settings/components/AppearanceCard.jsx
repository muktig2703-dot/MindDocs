import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
function AppearanceCard() {
  const { theme, setTheme } = useTheme();
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
  onClick={() => setTheme("light")}
  className="rounded-xl border px-5 py-3 flex items-center gap-2"
  style={{
    background:
      theme === "light"
        ? "var(--primary)"
        : "transparent",
    color:
      theme === "light"
        ? "#fff"
        : "var(--text-primary)",
  }}
>
  <Sun size={18} />
  Light
</button>

        <button
  onClick={() => setTheme("dark")}
  className="rounded-xl border px-5 py-3 flex items-center gap-2"
  style={{
    background:
      theme === "dark"
        ? "var(--primary)"
        : "transparent",
    color:
      theme === "dark"
        ? "#fff"
        : "var(--text-primary)",
  }}
>
  <Moon size={18} />
  Dark
</button>

        <button
  onClick={() => setTheme("system")}
  className="rounded-xl border px-5 py-3 flex items-center gap-2"
  style={{
    background:
      theme === "system"
        ? "var(--primary)"
        : "transparent",
    color:
      theme === "system"
        ? "#fff"
        : "var(--text-primary)",
  }}
>
  <Monitor size={18} />
  System
</button>
      </div>
    </div>
  );
}

export default AppearanceCard;