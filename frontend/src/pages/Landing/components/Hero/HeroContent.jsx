import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";

function HeroContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: .7,
      }}
      className="flex-1"
    >
      <span
        className="
          rounded-full
          px-4
          py-2
          text-sm
        "
        style={{
          background: "var(--glass-bg)",
        }}
      >
        AI-Powered Document Intelligence
      </span>

      <h1
        className="
          mt-8
          text-5xl
          font-bold
          leading-tight
          lg:text-7xl
        "
      >
        Chat with your documents.

        <br />

        <span
          style={{
            color: "var(--primary)",
          }}
        >
          Powered by AI.
        </span>
      </h1>

      <p
        className="
          mt-8
          max-w-xl
          text-lg
          leading-8
        "
        style={{
          color: "var(--text-secondary)",
        }}
      >
        Upload PDFs, search semantically,
        and receive instant AI-powered
        answers backed by your documents.
      </p>

      <HeroButtons />

    </motion.div>
  );
}

export default HeroContent;