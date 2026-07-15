import { Menu } from "lucide-react";

function MobileMenu() {
  return (
    <button
      className="lg:hidden rounded-xl p-2 transition-all duration-300"
      style={{
        color: "var(--text-primary)",
        background: "transparent",
      }}
      aria-label="Open Menu"
    >
      <Menu size={22} />
    </button>
  );
}

export default MobileMenu;