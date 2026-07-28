import Link from "next/link";
import { property, whatsappHref } from "../lib/property-data";

export function Footer() {
  return (
    <footer className="section-pad-x-6" style={{ background: "var(--color-neutral-900)", color: "var(--color-neutral-100)", paddingTop: "var(--space-7)", paddingBottom: "var(--space-7)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "var(--space-6)",
          }}
        >
          <div>
            <div style={{ fontFamily: "var(--font-body)", letterSpacing: "0.18em", fontSize: 14 }}>ELIOS</div>
            <div style={{ fontSize: 13, opacity: 0.65, marginTop: "var(--space-2)" }}>{property.location}</div>
          </div>
          <div style={{ display: "flex", gap: "var(--space-6)", fontSize: 13, opacity: 0.75 }}>
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
              WhatsApp
            </a>
            <a href={`mailto:${property.email}`} style={{ color: "inherit" }}>
              {property.email}
            </a>
          </div>
        </div>
        <div style={{ height: 1, background: "rgba(255,255,255,0.12)" }} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-5)", fontSize: 12, opacity: 0.65 }}>
          <Link href="/privacy" style={{ color: "inherit" }}>
            Privacy
          </Link>
          <Link href="/terms" style={{ color: "inherit" }}>
            Terms & Conditions
          </Link>
          <Link href="/disclaimer" style={{ color: "inherit" }}>
            Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
