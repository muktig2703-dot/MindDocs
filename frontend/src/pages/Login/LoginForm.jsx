import { Link } from "react-router-dom";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

function LoginForm() {
  return (
    <form className="space-y-6">

      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
      />

      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
      />

      <div className="flex items-center justify-between">

        <label className="flex items-center gap-2 text-sm">

          <input type="checkbox" />

          Remember me

        </label>

        <Link
          to="#"
          className="text-sm hover:underline"
          style={{
            color: "var(--primary)",
          }}
        >
          Forgot Password?
        </Link>

      </div>

      <Button
        type="submit"
        className="w-full py-3"
      >
        Login
      </Button>

      <div className="flex items-center gap-4">

        <div
          className="h-px flex-1"
          style={{
            background: "var(--border)",
          }}
        />

        <span
          className="text-sm"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          OR
        </span>

        <div
          className="h-px flex-1"
          style={{
            background: "var(--border)",
          }}
        />

      </div>

      <Button
        variant="secondary"
        className="w-full py-3"
      >
        Continue with Google
      </Button>

      <p
        className="text-center text-sm"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        Don't have an account?{" "}

        <Link
          to="/register"
          style={{
            color: "var(--primary)",
          }}
        >
          Register
        </Link>

      </p>

    </form>
  );
}

export default LoginForm;