import { ImageSlot } from "./ImageSlot";
import { buildingAmenities } from "../lib/property-data";

const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<string, React.ReactNode> = {
  "Indoor Heated Pool": (
    <svg {...iconProps}>
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5S12 7 14.5 7 17 5 19.5 5c1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1" />
    </svg>
  ),
  "Outdoor Swimming Pool": (
    <svg {...iconProps}>
      <circle cx="12" cy="5" r="1.6" />
      <path d="M12 7v6" />
      <path d="M12 13l-5 7" />
      <path d="M12 13l5 7" />
      <path d="M6 10l6 3 6-3" />
    </svg>
  ),
  "Spa & Sauna": (
    <svg {...iconProps}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17a2.5 2.5 0 0 0 2.5-2.5c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3z" />
    </svg>
  ),
  "Fully Equipped Gym": (
    <svg {...iconProps}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  "Yoga Studio": (
    <svg {...iconProps}>
      <path d="M11 20a7 7 0 0 1-5.5-11.3C7.5 6 10 3.5 12 1c2 2.5 4.5 5 6.5 7.7A7 7 0 0 1 13 20z" />
      <path d="M12 22v-6" />
    </svg>
  ),
  "Co-working Lounge": (
    <svg {...iconProps}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  "Cinema Room": (
    <svg {...iconProps}>
      <rect x="2" y="3" width="20" height="18" rx="2" />
      <path d="M7 3v18M17 3v18M2 8h5M2 16h5M17 8h5M17 16h5" />
    </svg>
  ),
  "Wine Room": (
    <svg {...iconProps}>
      <path d="M8 2h8l-1 7a3 3 0 0 1-6 0z" />
      <path d="M12 12v7" />
      <path d="M9 21h6" />
    </svg>
  ),
  "Game Room": (
    <svg {...iconProps}>
      <rect x="2" y="6" width="20" height="12" rx="6" />
      <line x1="6" y1="12" x2="10" y2="12" />
      <line x1="8" y1="10" x2="8" y2="14" />
      <circle cx="15" cy="13" r="1" />
      <circle cx="18" cy="11" r="1" />
    </svg>
  ),
  "Children's Playroom": (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    </svg>
  ),
  "24h Concierge & Security": (
    <svg {...iconProps}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  "Valet & EV Parking": (
    <svg {...iconProps}>
      <path d="M19 17h2v-4l-3-5H6L3 13v4h2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  ),
};

const amenityCardStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "var(--space-3)",
  padding: "var(--space-4)",
  border: "1px solid var(--color-divider)",
  borderRadius: "var(--radius-md)",
  background: "var(--color-bg)",
  color: "var(--color-accent-700)",
  fontFamily: "var(--font-body)",
  fontSize: 14,
};

export function BuildingAmenities() {
  return (
    <section id="discover" style={{ background: "var(--color-surface)", padding: "var(--space-9) var(--space-6)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
          <div className="tag tag-outline" style={{ marginBottom: "var(--space-3)" }}>
            The Building
          </div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: "var(--font-heading-weight)",
              fontSize: "clamp(30px,4vw,48px)",
              margin: 0,
            }}
          >
            A resort, twelve floors below your door
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              lineHeight: 1.7,
              color: "var(--color-neutral-700)",
              margin: "var(--space-4) 0 0",
            }}
          >
            Living here means more than the apartment. It means indoor and outdoor pools before
            breakfast, a spa in the afternoon, and a private beach service at sunset — every day,
            without leaving the tower.
          </p>
        </div>

        <div className="amenity-photos-grid" style={{ display: "grid", gap: "var(--space-6)" }}>
          <div className="plate" style={{ height: 440 }}>
            <ImageSlot label="Rooftop infinity pool" />
          </div>
          <div className="plate" style={{ height: 440 }}>
            <ImageSlot label="Tower lobby" />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "var(--space-4)",
          }}
        >
          {buildingAmenities.map((label) => (
            <div key={label} style={amenityCardStyle}>
              {icons[label]}
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
