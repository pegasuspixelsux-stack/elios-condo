import Link from "next/link";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-text)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "var(--space-9) var(--space-6)" }}>
        <Link
          href="/"
          style={{
            display: "inline-block",
            marginBottom: "var(--space-6)",
            fontSize: 13,
            letterSpacing: "0.04em",
            color: "var(--color-accent-700)",
            textDecoration: "none",
          }}
        >
          ← Back to Elios Residences
        </Link>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: "var(--font-heading-weight)",
            fontSize: "clamp(30px,4vw,44px)",
            margin: "0 0 var(--space-6)",
          }}
        >
          {title}
        </h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", fontSize: 16, lineHeight: 1.75, color: "var(--color-neutral-700)" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
