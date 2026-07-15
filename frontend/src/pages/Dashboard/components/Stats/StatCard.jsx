import { motion } from "framer-motion";

function StatCard({
  icon: Icon,
  title,
  value,
  subtitle,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        rounded-3xl
        border
        p-6
      "
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      <div className="flex items-center justify-between">

        <div>

          <p
            className="text-sm"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            {title}
          </p>

          <h2
            className="mt-2 text-4xl font-bold"
            style={{
              color: "var(--text-primary)",
            }}
          >
            {value}
          </h2>

          <p
            className="mt-2 text-sm"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            {subtitle}
          </p>

        </div>

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
          "
          style={{
            background: "rgba(124,58,237,.12)",
          }}
        >
          <Icon
            size={26}
            style={{
              color: "var(--primary)",
            }}
          />
        </div>

      </div>
    </motion.div>
  );
}

export default StatCard;