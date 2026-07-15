import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="
            rounded-[32px]
            border
            px-10
            py-20
            text-center
          "
          style={{
            background: "var(--glass-bg)",
            borderColor: "var(--border)",
          }}
        >

          <h2
            className="text-5xl font-bold"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
            }}
          >
            Ready to Chat with Your Documents?
          </h2>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Upload your PDFs, ask questions naturally,
            and let AI uncover insights in seconds.
          </p>

          <Link
            to="/register"
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-xl
              px-8
              py-4
              font-medium
              transition
            "
            style={{
              background: "var(--primary)",
              color: "#fff",
            }}
          >
            Get Started

            <ArrowRight size={18} />
          </Link>

        </motion.div>

      </div>
    </section>
  );
}

export default CTA;