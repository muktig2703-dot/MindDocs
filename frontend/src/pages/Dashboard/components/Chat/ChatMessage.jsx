import { motion } from "framer-motion";
function ChatMessage({
  role,
  text,
  sources,
}) {
  const user = role === "user";

  return (
    <motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
  type: "spring",
  stiffness: 260,
  damping: 22,
}}
      className={`flex ${
        user ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className="max-w-[92%]
sm:max-w-[80%]
lg:max-w-[75%] rounded-3xl px-5 py-4"
        style={{
          background: user
            ? "var(--primary)"
            : "var(--card)",

          color: user
            ? "#fff"
            : "var(--text-primary)",

          border: user
            ? "none"
            : "1px solid var(--border)",
        }}
      >
        <p className="leading-7 whitespace-pre-line break-words">
          {text}
        </p>
        {sources?.length > 0 && (
  <div className="mt-5 flex flex-wrap gap-2">
    {sources.map((source) => (
      <span
        key={source}
        className="
          rounded-full
          px-3
          py-1
          text-xs
        "
        style={{
          background: "rgba(124,58,237,.10)",
          color: "var(--primary)",
        }}
      >
        {source}
      </span>
    ))}
  </div>
)}
      </div>
    </motion.div>
  );
}

export default ChatMessage;