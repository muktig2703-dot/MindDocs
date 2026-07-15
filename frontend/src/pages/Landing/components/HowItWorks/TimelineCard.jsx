import { motion } from "framer-motion";

function TimelineCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="
        relative
        flex
        min-w-[220px]
        flex-col
        items-center
        rounded-3xl
        border
        p-6
        text-center
      "
      style={{
        background: "var(--glass-bg)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="
          mb-5
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
        className="text-lg font-semibold"
        style={{
          color: "var(--text-primary)",
        }}
      >
        {title}
      </h3>

      <p
        className="mt-3 text-sm leading-6"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

export default TimelineCard;