import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function NavItem({
  to,
  icon: Icon,
  label,
}) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <motion.div
          whileHover={{
            x: 4,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className={`
            relative
            flex
            items-center
            gap-3
            rounded-2xl
            px-4
            py-3
            transition-all
            duration-300
            cursor-pointer
            overflow-hidden
          `}
          style={{
            background: isActive
  ? "rgba(124,58,237,.12)"
  : "rgba(255,255,255,0.02)",

            border: isActive
              ? "1px solid rgba(124,58,237,.25)"
              : "1px solid transparent",
          }}
        >
          {/* Active Indicator */}

          {isActive && (
            <motion.div
              layoutId="sidebar-active"
              className="
                absolute
                left-0
                top-2
                bottom-2
                w-1
                rounded-r-full
              "
              style={{
                background: "var(--primary)",
              }}
            />
          )}

          <Icon
            size={20}
            strokeWidth={1.8}
            style={{
              color: isActive
                ? "var(--primary)"
                : "var(--text-secondary)",
            }}
          />

          <span
            className="
              text-sm
              font-medium
            "
            style={{
              color: isActive
                ? "var(--text-primary)"
                : "var(--text-secondary)",
            }}
          >
            {label}
          </span>
        </motion.div>
      )}
    </NavLink>
  );
}

export default NavItem;