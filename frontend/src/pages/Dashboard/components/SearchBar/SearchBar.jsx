import { Search, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";

function SearchBar({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="mt-8"
    >
      <div className="flex gap-4">

        {/* Search Input */}

        <div
          className="
            flex
            flex-1
            items-center
            gap-3
            rounded-2xl
            border
            px-5
            py-3
            transition-all
            duration-300
            focus-within:ring-2
            focus-within:ring-violet-500/30
            focus-within:border-violet-500
          "
          style={{
            background: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          <Search
            size={20}
            style={{
              color: "var(--text-secondary)",
            }}
          />

          <input
  value={searchTerm}
  onChange={(event) =>
    setSearchTerm(event.target.value)
  }
  placeholder="Search uploaded documents..."
  className="flex-1 bg-transparent outline-none"
  style={{
    color: "var(--text-primary)",
  }}
/>

        </div>

        {/* Filter Button */}

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
          "
          style={{
            background: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          <SlidersHorizontal
            size={20}
            style={{
              color: "var(--text-primary)",
            }}
          />
        </motion.button>

      </div>
    </motion.section>
  );
}

export default SearchBar;