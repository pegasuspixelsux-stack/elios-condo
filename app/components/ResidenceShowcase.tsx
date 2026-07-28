import { ImageSlot } from "./ImageSlot";
import { residenceRows } from "../lib/property-data";

export function ResidenceShowcase() {
  return (
    <section
      className="section-pad-x-6"
      style={{
        maxWidth: 1400,
        margin: "0 auto",
        paddingTop: "var(--space-9)",
        paddingBottom: "var(--space-9)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-9)",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
        <div className="tag tag-outline" style={{ marginBottom: "var(--space-3)" }}>
          The Residence
        </div>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: "var(--font-heading-weight)",
            fontSize: "clamp(30px,4vw,48px)",
            margin: 0,
          }}
        >
          Spaces designed for how you actually live
        </h2>
      </div>

      {residenceRows.map((row, i) => (
        <div
          key={row.imgId}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-6)",
            alignItems: "center",
            flexDirection: i % 2 === 1 ? "row-reverse" : "row",
          }}
        >
          <div style={{ flex: "1 1 480px", minWidth: 320 }}>
            <div className="plate" style={{ height: 520 }}>
              <ImageSlot label={row.kicker} src={row.src} />
            </div>
          </div>
          <div
            style={{
              flex: "1 1 380px",
              minWidth: 300,
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-3)",
              padding: "var(--space-5)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-accent-700)",
              }}
            >
              {row.kicker}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: "var(--font-heading-weight)",
                fontSize: "clamp(26px,3vw,34px)",
                margin: 0,
              }}
            >
              {row.title}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--color-neutral-700)",
                margin: 0,
              }}
            >
              {row.copy}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
