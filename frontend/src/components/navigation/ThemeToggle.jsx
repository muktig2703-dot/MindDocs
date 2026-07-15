import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("system");
    } else {
      setTheme("dark");
    }
  };

  const Icon =
    theme === "dark"
      ? Moon
      : theme === "light"
      ? Sun
      : Monitor;

  return (
    <button
      onClick={cycleTheme}
      aria-label="Toggle Theme"
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        border
        style={{
        borderColor: var(--border)
        background: var(--glass-bg)
        color: var(--text-primary)
}}
        transition-all
        duration-300
        hover:scale-105
        onMouseEnter={(e) => {
        e.currentTarget.style.background =
        var(--hover-bg)}}
        onMouseLeave={(e) => {
        e.currentTarget.style.background =
        var(--glass-bg)}}
      "
    >
      <Icon size={18} />
    </button>
  );
}

export default ThemeToggle;