function Logo() {
  return (
    <div className="flex items-center gap-3 select-none">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl"
        style={{
          background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
        }}
      >
        <span className="text-lg font-bold text-white">
          M
        </span>
      </div>

      <span
        className="text-2xl font-bold"
        style={{
          fontFamily: '"Space Grotesk", sans-serif',
          color: "var(--text-primary)",
        }}
      >
        MindDocs
      </span>
    </div>
  );
}

export default Logo;