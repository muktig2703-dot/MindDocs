import GlassCard from "../../components/ui/GlassCard";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <GlassCard
      className="
        w-full
        max-w-md
        p-10
      "
    >
      <div className="mb-10">

        <h2
          className="text-4xl font-bold"
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
          }}
        >
          Welcome Back
        </h2>

        <p
          className="mt-3"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          Sign in to continue chatting with
          your documents.
        </p>

      </div>

      <LoginForm />

    </GlassCard>
  );
}

export default Login;