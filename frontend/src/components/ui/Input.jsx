import { forwardRef } from "react";

const Input = forwardRef(
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

        <input
          ref={ref}
          className={`
            w-full
            rounded-xl
            border
            px-4
            py-3
            outline-none
            transition-all
            duration-300
            focus:ring-2
            ${className}
          `}
          style={{
            background: "var(--surface)",
            color: "var(--text-primary)",
            borderColor: error
              ? "#EF4444"
              : "var(--border)",

            boxShadow:
              "0 0 0 0 rgba(124,58,237,0)",
          }}
          onFocus={(e) => {
            e.target.style.boxShadow =
              "0 0 0 3px rgba(124,58,237,.25)";
          }}
          onBlur={(e) => {
            e.target.style.boxShadow = "none";
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

Input.displayName = "Input";

export default Input;