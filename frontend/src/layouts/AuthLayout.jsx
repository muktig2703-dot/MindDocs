import { Outlet } from "react-router-dom";
import { FileText, BrainCircuit, Database } from "lucide-react";
import { useLocation } from "react-router-dom";
function AuthLayout() {
  const { pathname } = useLocation();
  const isRegister = pathname === "/register";
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
      "
      style={{
        background: "var(--background)",
      }}
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[140px]
          opacity-20
        "
        style={{
          background: "var(--primary)",
        }}
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
        "
      >

        {/* LEFT */}

        <div
          className="
            hidden
            lg:flex
            w-1/2
            flex-col
            justify-center
            px-10
          "
        >

          <h1
            className="text-5xl font-bold"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
            }}
          >
            MindDocs
          </h1>

          <p
  className="mt-6 text-2xl leading-relaxed"
  style={{
    color: "var(--text-primary)",
  }}
>
  {isRegister ? (
    <>
      Build your personal
      <br />
      AI knowledge workspace.
    </>
  ) : (
    <>
      Chat with your documents.
      <br />
      Powered by AI.
    </>
  )}
</p>
          <p
  className="mt-6 max-w-lg leading-8"
  style={{
    color: "var(--text-secondary)",
  }}
>
  {isRegister
    ? "Create an account to upload PDFs, organize your knowledge, and receive AI-powered answers from your documents."
    : "Upload PDFs, perform semantic search, and receive intelligent answers backed by your own documents."}
</p>

          <div className="mt-12 space-y-6">

            <Feature
              icon={<FileText size={20} />}
              title="Semantic Search"
            />

            <Feature
              icon={<BrainCircuit size={20} />}
              title="Gemini Powered"
            />

            <Feature
              icon={<Database size={20} />}
              title="Vector Database"
            />

          </div>

        </div>

        {/* RIGHT */}

        <div
          className="
            flex
            flex-1
            items-center
            justify-center
            px-6
            py-12
          "
        >
          <Outlet />
        </div>

      </div>

    </section>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-4">

      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
        "
        style={{
          background: "rgba(124,58,237,.15)",
          color: "var(--primary)",
        }}
      >
        {icon}
      </div>

      <span
        className="text-lg"
        style={{
          color: "var(--text-primary)",
        }}
      >
        {title}
      </span>

    </div>
  );
}

export default AuthLayout;