function SuggestedPrompts() {
  const prompts = [
    "Summarize this PDF",
    "Explain chapter 5",
    "List key findings",
    "Generate notes",
  ];

  return (
    <div className="flex flex-wrap overflow-x-auto pb-2 gap-3">
      {prompts.map((prompt) => (
        <button
          key={prompt}
          className="
            rounded-full
            border
            px-4
            py-2
            text-sm
            transition-all
            hover:-translate-y-1
          "
          style={{
            background: "var(--card)",
            borderColor: "var(--border)",
            color: "var(--text-secondary)",
          }}
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}

export default SuggestedPrompts;