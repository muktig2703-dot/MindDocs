import { motion } from "framer-motion";
import PreviewSidebar from "./PreviewSidebar";
import PreviewWorkspace from "./PreviewWorkspace";

function DashboardPreview() {
  return (
    <div className="relative">

      {/* Purple Ambient Glow */}

      <div
        className="
          absolute
          -inset-6
          -z-10
          rounded-[40px]
          blur-3xl
          opacity-30
        "
        style={{
          background:
            "radial-gradient(circle, #7C3AED, transparent 70%)",
        }}
      />

      <motion.div
        initial={{
          opacity: 0,
          x: 50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          flex
          h-[700px]
          w-full
          max-w-3xl
          overflow-hidden
          rounded-3xl
        "
        style={{
          background: "var(--glass-bg)",
          border: "1px solid var(--border)",
        }}
      >
        <PreviewSidebar />

        <PreviewWorkspace />
      </motion.div>

    </div>
  );
}

export default DashboardPreview;