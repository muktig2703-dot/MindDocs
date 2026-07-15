import { forwardRef } from "react";

const Textarea = forwardRef(
  (
    {
      label,
      error,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div className="space-y-2">

        {label && (
          <label
            className="block text-sm font-medium"
            style={{
              color: "var(--text-primary)",
            }}
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          className={`
            min-h-[120px]
            w-full
            rounded-xl
            border
            px-4
            py-3
            outline-none
            transition-all
            duration-300
            focus:ring-2
            resize-none
            ${className}
          `}
          style={{
            background: "var(--surface)",
            color: "var(--text-primary)",
            borderColor: error
              ? "#EF4444"
              : "var(--border)",
          }}
          {...props}
        />

        {error && (
          <p
            className="text-sm"
            style={{
              color: "#EF4444",
            }}
          >
            {error}
          </p>
        )}

      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;