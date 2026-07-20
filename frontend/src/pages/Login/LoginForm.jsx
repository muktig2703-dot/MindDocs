import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import { login, getCurrentUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import { saveToken } from "../../utils/authStorage";
function LoginForm() {
  const { setUser } = useAuth();
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
  email: "",
  password: "",
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

  setLoading(true);

  try {
    const response = await login(form);
    saveToken(
  response.access_token,
  remember
);

const user = await getCurrentUser();

setUser(user);

toast.success("Welcome back!");

navigate("/dashboard");
  } catch (error) {
    toast.error(
      error.response?.data?.detail ||
      "Login failed."
    );
  } finally {
    setLoading(false);
  }
};

  return (
      <form
  onSubmit={handleSubmit}
  className="space-y-6"
>
      <Input
  label="Email"
  type="email"
  placeholder="Enter your email"
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

      <div className="flex items-center justify-between">

        <label className="flex items-center gap-2 text-sm">
  <input
    type="checkbox"
    checked={remember}
    onChange={(e) =>
      setRemember(e.target.checked)
    }
  />

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
  disabled={loading}
>
  {loading ? "Signing In..." : "Login"}
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