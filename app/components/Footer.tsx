import { property, whatsappHref } from "../lib/property-data";

export function Footer() {
  return (
    <footer style={{ background: "var(--color-neutral-900)", color: "var(--color-neutral-100)", padding: "var(--space-7) var(--space-6)" }}>
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
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
    </footer>
  );
}
