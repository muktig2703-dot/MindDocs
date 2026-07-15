import { motion } from "framer-motion";

function TechBadge({ name }) {
  return (
    <motion.div
      whileHover={{
        y: -3,
        scale: 1.03,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        rounded-full
        border
        px-6
        py-3
        text-sm
        font-medium
        backdrop-blur-md
      "
      style={{
        background: "var(--glass-bg)",
        borderColor: "var(--border)",
        color: "var(--text-primary)",
      }}
    >
      {name}
    </motion.div>
  );
}

export default TechBadge;