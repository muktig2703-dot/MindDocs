import GlassCard from "../../components/ui/GlassCard";
import RegisterForm from "./RegisterForm";

function Register() {
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
          Create Account
        </h2>

        <p
          className="mt-3"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          Start chatting with your documents in minutes.
        </p>

      </div>

      <RegisterForm />

    </GlassCard>
  );
}

export default Register;