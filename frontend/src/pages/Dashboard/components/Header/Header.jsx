import { Bell, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

function Header() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        mb-10
        flex
        items-center
        justify-between
      "
    >
      {/* Left */}

      <div>

        <h1
          className="text-4xl font-bold"
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            color: "var(--text-primary)",
          }}
        >
          {greeting}, Mukti
        </h1>

        <p
          className="mt-2 text-base"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          Welcome back. Ready to chat with your documents?
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Notification */}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
          "
          style={{
            background: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          <Bell
            size={18}
            style={{
              color: "var(--text-secondary)",
            }}
          />
        </motion.button>

        {/* User */}

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            px-4
            py-2
          "
          style={{
            background: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              font-semibold
            "
            style={{
              background: "rgba(124,58,237,.15)",
              color: "var(--primary)",
            }}
          >
            MG
          </div>

          <div className="text-left">

            <p
              className="text-sm font-medium"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Mukti Gupta
            </p>

            <p
              className="text-xs"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              Student
            </p>

          </div>

          <ChevronDown
            size={16}
            style={{
              color: "var(--text-secondary)",
            }}
          />

        </motion.button>

      </div>

    </motion.header>
  );
}

export default Header;