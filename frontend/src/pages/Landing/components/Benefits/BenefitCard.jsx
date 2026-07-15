import { motion } from "framer-motion";

function BenefitCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="
        rounded-3xl
        border
        p-6
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
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
        "
        style={{
          background: "rgba(124,58,237,.15)",
        }}
      >
        <Icon
          size={24}
          color="var(--primary)"
        />
      </div>

      <h3
        className="text-xl font-semibold"
        style={{
          color: "var(--text-primary)",
        }}
      >
        {title}
      </h3>

      <p
        className="mt-3 leading-7"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

export default BenefitCard;