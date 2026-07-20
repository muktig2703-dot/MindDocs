import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import { register } from "../../services/authService";
function RegisterForm() {

  const navigate = useNavigate();

const [form, setForm] = useState({
  name: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (field, value) => {
  setForm((prev) => ({
    ...prev,
    [field]: value,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (form.password !== form.confirmPassword) {
    toast.error("Passwords do not match.");
    return;
  }

  setLoading(true);

  try {
    await register({
      name: form.name,
      username: form.username,
      email: form.email,
      password: form.password,
    });

    toast.success(
      "Account created successfully!"
    );

    navigate("/login");
  } catch (error) {
    toast.error(
      error.response?.data?.detail ||
      "Registration failed."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <form
  onSubmit={handleSubmit}
  className="space-y-5"
>

      <Input
  label="Full Name"
  type="text"
  placeholder="John Doe"
  value={form.name}
  onChange={(e) =>
    handleChange("name", e.target.value)
  }
/>

      <Input
  label="Username"
  type="text"
  placeholder="johndoe"
  value={form.username}
  onChange={(e) =>
    handleChange("username", e.target.value)
  }
/>

      <Input
  label="Email"
  type="email"
  placeholder="john@example.com"
  value={form.email}
  onChange={(e) =>
    handleChange("email", e.target.value)
  }
/>

      <Input
  label="Password"
  type="password"
  placeholder="••••••••"
  value={form.password}
  onChange={(e) =>
    handleChange("password", e.target.value)
  }
/>

      <Input
  label="Confirm Password"
  type="password"
  placeholder="••••••••"
  value={form.confirmPassword}
  onChange={(e) =>
    handleChange(
      "confirmPassword",
      e.target.value
    )
  }
/>

      <Button
  type="submit"
  className="w-full py-3"
  disabled={loading}
>
  {loading
    ? "Creating Account..."
    : "Create Account"}
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