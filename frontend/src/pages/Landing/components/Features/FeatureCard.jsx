import { motion } from "framer-motion";

function FeatureCard({
  icon: Icon,
  title,
  description,
  points,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        rounded-3xl
        border
        p-8
        transition-all
        duration-300
      "
      style={{
        background: "var(--glass-bg)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="
          mb-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
        "
        style={{
          background: "rgba(124,58,237,.15)",
        }}
      >
        <Icon
          size={28}
          color="var(--primary)"
        />
      </div>

      <h3
        className="text-2xl font-semibold"
        style={{
          color: "var(--text-primary)",
        }}
      >
        {title}
      </h3>

      <p
        className="mt-4 leading-7"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        {description}
      </p>

      <ul className="mt-6 space-y-3">
        {points.map((point) => (
          <li
            key={point}
            className="flex items-center gap-3"
          >
            <div
              className="h-2 w-2 rounded-full"
              style={{
                background: "var(--primary)",
              }}
            />

            <span
              style={{
                color: "var(--text-secondary)",
              }}
            >
              {point}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default FeatureCard;