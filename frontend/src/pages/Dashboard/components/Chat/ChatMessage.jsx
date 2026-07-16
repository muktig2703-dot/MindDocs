function ChatMessage({
  role,
  text,
}) {
  const user = role === "user";

  return (
    <div
      className={`flex ${
        user ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className="max-w-[75%] rounded-3xl px-5 py-4"
        style={{
          background: user
            ? "var(--primary)"
            : "var(--card)",

          color: user
            ? "#fff"
            : "var(--text-primary)",

          border: user
            ? "none"
            : "1px solid var(--border)",
        }}
      >
        <p className="leading-7 whitespace-pre-line">
          {text}
        </p>
      </div>
    </div>
  );
}

export default ChatMessage;