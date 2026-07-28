import { ImageSlot } from "./ImageSlot";
import { distances } from "../lib/property-data";

const distanceRowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  padding: "var(--space-2) 0",
  borderBottom: "1px solid var(--color-divider)",
  fontSize: 15,
};

export function LocationSection() {
  return (
    <section id="discover-punta" className="section-pad-x-6" style={{ background: "var(--color-surface)", paddingTop: "var(--space-9)", paddingBottom: "var(--space-9)" }}>
      <div
        className="location-grid"
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          gap: "var(--space-8)",
          alignItems: "center",
        }}
      >
        <div className="plate" style={{ height: 560, position: "relative" }}>
          <ImageSlot label="Map of Punta del Este peninsula" src="/images/location/map.png" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
          <div>
            <div className="tag tag-outline" style={{ marginBottom: "var(--space-3)" }}>
              Discover Punta del Este
            </div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: "var(--font-heading-weight)",
                fontSize: "clamp(28px,3.6vw,42px)",
                margin: 0,
              }}
            >
              Between two shores, minutes from everything
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {distances.map((d) => (
              <div key={d.label} style={distanceRowStyle}>
                <span>{d.label}</span>
                <span>{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
