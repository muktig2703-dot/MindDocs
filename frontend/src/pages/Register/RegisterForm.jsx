import { Link } from "react-router-dom";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

function RegisterForm() {
  return (
    <form className="space-y-5">

      <Input
        label="Full Name"
        type="text"
        placeholder="John Doe"
      />

      <Input
        label="Username"
        type="text"
        placeholder="johndoe"
      />

      <Input
        label="Email"
        type="email"
        placeholder="john@example.com"
      />

      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
      />

      <Input
        label="Confirm Password"
        type="password"
        placeholder="••••••••"
      />

      <Button
        type="submit"
        className="w-full py-3"
      >
        Create Account
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
        Already have an account?{" "}

        <Link
          to="/login"
          className="hover:underline"
          style={{
            color: "var(--primary)",
          }}
        >
          Login
        </Link>

      </p>

    </form>
  );
}

export default RegisterForm;