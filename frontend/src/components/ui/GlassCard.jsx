function GlassCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-3xl
        border
        backdrop-blur-xl
        shadow-xl
        ${className}
      `}
      style={{
        background: "var(--glass-bg)",
        borderColor: "var(--border)",
      }}
    >
      {children}
    </div>
  );
}

export default GlassCard;