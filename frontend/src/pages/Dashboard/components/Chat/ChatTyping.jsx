import { motion } from "framer-motion";

function ChatTyping() {
  return (
    <div className="flex justify-start">
      <div
        className="
          flex
          items-center
          gap-2
          rounded-3xl
          px-5
          py-4
        "
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
        }}
      >
        {[0, 1, 2].map((dot) => (
          <motion.div
            key={dot}
            className="h-2.5 w-2.5 rounded-full"
            style={{
              background: "var(--primary)",
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              y: [0, -4, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              delay: dot * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ChatTyping;