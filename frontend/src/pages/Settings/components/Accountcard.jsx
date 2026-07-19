function AccountCard() {
  return (
    <div
      className="rounded-3xl border p-8"
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      <h2
        className="text-2xl font-bold"
        style={{
          color: "var(--text-primary)",
        }}
      >
        Account
      </h2>

      <div className="mt-8 flex flex-wrap gap-4">
        <button className="rounded-xl border px-5 py-3">
          Logout
        </button>

        <button
          className="rounded-xl px-5 py-3"
          style={{
            background: "#dc2626",
            color: "#fff",
          }}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default AccountCard;