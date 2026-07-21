import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="
        border-t
        py-10
      "
      style={{
        borderColor: "var(--border)",
      }}
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-6
          px-6
          md:flex-row
        "
      >
        <div>

          <h2
            className="text-2xl font-bold"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
            }}
          >
            MindDocs
          </h2>

          <p
            className="mt-2"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Chat with Your Documents
          </p>

        </div>

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-6
          "
        >

          <a
            href="https://github.com/muktig2703-dot"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:muktig2703@gmail.com">
            Email
          </a>
        </div>
      </div>

      <p
        className="
          mt-10
          text-center
          text-sm
        "
        style={{
          color: "var(--text-secondary)",
        }}
      >
        Made by Mukti • © 2026 MindDocs
      </p>
    </footer>
  );
}

export default Footer;