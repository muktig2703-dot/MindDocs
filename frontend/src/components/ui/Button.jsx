function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "rounded-xl px-5 py-2.5 font-medium transition-all duration-300";

  const variants = {
  primary:
    "bg-violet-600 hover:bg-violet-500 text-white",

  secondary:
    "border hover:opacity-90",
};

  return (
    <button
  className={`${base} ${variants[variant]} ${className}`}
  style={
    variant === "secondary"
      ? {
          background: "var(--card)",
          color: "var(--text-primary)",
          borderColor: "var(--border)",
        }
      : {}
  }
  {...props}
>
  {children}
</button>
  );
}

export default Button;