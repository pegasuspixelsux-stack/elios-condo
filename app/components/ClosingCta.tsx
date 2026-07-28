import { ImageSlot } from "./ImageSlot";

export function ClosingCta() {
  return (
    <section style={{ position: "relative", height: "88vh", minHeight: 520, overflow: "hidden" }}>
      <ImageSlot label="Sunset over the tower and the Atlantic" src="/images/location/sunset.png" />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(15,14,12,0.15), rgba(15,14,12,0.55))",
          pointerEvents: "none",
        }}
      />
      <div
        className="section-pad-x-6"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "var(--space-5)",
          color: "#fff",
          paddingTop: "var(--space-6)",
          paddingBottom: "var(--space-6)",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            fontSize: "clamp(32px,5vw,64px)",
            margin: 0,
            maxWidth: 820,
          }}
        >
          Experience Punta del Este from above.
        </h2>
        <a
          href="#booking"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "14px 28px",
            border: "1px solid #fff",
            color: "#fff",
            textDecoration: "none",
            fontSize: 14,
            letterSpacing: "0.04em",
            borderRadius: "var(--radius-sm)",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(4px)",
          }}
        >
          Request Your Stay
        </a>
      </div>
    </section>
  );
}
