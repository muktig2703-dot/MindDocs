import { Bot, User } from "lucide-react";

function PreviewChat() {
  return (
    <div
      className="
        flex
        flex-1
        flex-col
        justify-between
        overflow-hidden
        p-6
      "
    >
      <div
    className="
        flex-1
        space-y-5
        overflow-y-auto
        pr-2
    "
>

        <div className="flex gap-4">

          <User size={20} />

          <div
           className="
              max-w-[80%]
              rounded-2xl
              px-4
              py-3
            "
            style={{
              background:"var(--card)"
            }}
          >
            Summarize this PDF
          </div>

        </div>

        <div className="flex gap-4">

          <Bot
            color="#7C3AED"
            size={20}
          />

          <div
            className="
              max-w-[80%]
              rounded-2xl
              px-4
              py-3
            "
            style={{
              background:"var(--card)"
            }}
          >
            This document discusses Retrieval
            Augmented Generation and explains
            how vector databases improve LLM
            responses...
          </div>
          <div className="flex items-center gap-2 pl-10">

  <span
    className="h-2 w-2 animate-bounce rounded-full bg-violet-500"
  />

  <span
    className="h-2 w-2 animate-bounce rounded-full bg-violet-500"
    style={{
      animationDelay: ".2s",
    }}
  />

  <span
    className="h-2 w-2 animate-bounce rounded-full bg-violet-500"
    style={{
      animationDelay: ".4s",
    }}
  />

</div>

        </div>

      </div>

      <div
    className="
        mt-6
        rounded-xl
        border
        p-4
    "
    style={{
        borderColor: "var(--border)",
        background: "var(--surface)",
    }}
>
        Ask anything about your PDFs...
      </div>

    </div>
  );
}

export default PreviewChat;