import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
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
  const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const usernameRegex = /^[A-Za-z0-9_]+$/;

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_\-+=])[A-Za-z\d@$!%*?&^#()_\-+=]{8,}$/;

  const passwordChecks = {
  length: form.password.length >= 8,
  lowercase: /[a-z]/.test(form.password),
  uppercase: /[A-Z]/.test(form.password),
  number: /\d/.test(form.password),
  special: /[@$!%*?&^#()_\-+=]/.test(form.password),
};

const [loading, setLoading] = useState(false);

const handleChange = (field, value) => {
  setForm((prev) => ({
    ...prev,
    [field]: value,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!usernameRegex.test(form.username)) {
  toast.error(
    "Username can contain only letters, numbers and underscores."
  );
  return;
}

if (!passwordRegex.test(form.password)) {
  toast.error("Please create a stronger password.");
  return;
}

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
  placeholder="Enter your name"
  value={form.name}
  onChange={(e) =>
    handleChange("name", e.target.value)
  }
/>

      <Input
  label="Username"
  type="text"
  placeholder="Enter your username"
  value={form.username}
  onChange={(e) =>
    handleChange("username", e.target.value)
  }
/>
{form.username.length > 0 && (
  <p
    className="mt-2 text-sm"
    style={{
      color: usernameRegex.test(form.username)
        ? "#22c55e"
        : "#ef4444",
    }}
  >
    {usernameRegex.test(form.username)
      ? "✓ Username is valid"
      : "✗ Only letters, numbers and underscores are allowed"}
  </p>
)}

      <Input
  label="Email"
  type="email"
  placeholder="Enter your e-mail"
  value={form.email}
  onChange={(e) =>
    handleChange("email", e.target.value)
  }
/>

      <div className="relative">
    <Input
        label="Password"
        type={showPassword ? "text" : "password"}
        placeholder="••••••••"
        value={form.password}
        onChange={(e) =>
            handleChange("password", e.target.value)
        }
    />

    <button
        type="button"
        onClick={() =>
            setShowPassword(!showPassword)
        }
        className="absolute right-4 top-[44px]"
    >
        {showPassword ? (
            <EyeOff size={18} />
        ) : (
            <Eye size={18} />
        )}
    </button>
</div>
{form.password.length > 0 && (
  <div
    className="mt-3 rounded-xl border p-4 text-sm"
    style={{
      borderColor: "var(--border)",
      background: "var(--card)",
    }}
  >
    <p
      className="mb-2 font-medium"
      style={{
        color: "var(--text-primary)",
      }}
    >
      Password must contain:
    </p>

    <div className="space-y-1">

      <p style={{ color: passwordChecks.length ? "#22c55e" : "#ef4444" }}>
        {passwordChecks.length ? "✓" : "✗"} At least 8 characters
      </p>

      <p style={{ color: passwordChecks.uppercase ? "#22c55e" : "#ef4444" }}>
        {passwordChecks.uppercase ? "✓" : "✗"} One uppercase letter
      </p>

      <p style={{ color: passwordChecks.lowercase ? "#22c55e" : "#ef4444" }}>
        {passwordChecks.lowercase ? "✓" : "✗"} One lowercase letter
      </p>

      <p style={{ color: passwordChecks.number ? "#22c55e" : "#ef4444" }}>
        {passwordChecks.number ? "✓" : "✗"} One number
      </p>

      <p style={{ color: passwordChecks.special ? "#22c55e" : "#ef4444" }}>
        {passwordChecks.special ? "✓" : "✗"} One special character
      </p>

    </div>
  </div>
)}
    <div className="relative">
      <Input
  label="Confirm Password"
  type={showConfirmPassword ? "text" : "password"}
  placeholder="••••••••"
  value={form.confirmPassword}
  onChange={(e) =>
    handleChange(
      "confirmPassword",
      e.target.value
    )
  }
/>
<button
    type="button"
    onClick={() =>
        setShowConfirmPassword(!showConfirmPassword)
    }
    className="absolute right-4 top-[44px]"
>
    {showConfirmPassword ? (
        <EyeOff size={18} />
    ) : (
        <Eye size={18} />
    )}
</button>
        </div>
        {form.confirmPassword.length > 0 && (
  <p
    className="mt-2 text-sm"
    style={{
      color:
        form.password === form.confirmPassword
          ? "#22c55e"
          : "#ef4444",
    }}
  >
    {form.password === form.confirmPassword
      ? "✓ Passwords match"
      : "✗ Passwords do not match"}
  </p>
)}

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