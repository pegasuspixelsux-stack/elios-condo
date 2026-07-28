import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { ResidenceShowcase } from "./components/ResidenceShowcase";
import { BuildingAmenities } from "./components/BuildingAmenities";
import { Gallery } from "./components/Gallery";
import { LocationSection } from "./components/LocationSection";
import { BookingSection } from "./components/BookingSection";
import { ClosingCta } from "./components/ClosingCta";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "var(--font-body)",
        color: "var(--color-text)",
        background: "var(--color-bg)",
        overflowX: "hidden",
      }}
    >
      <Nav />
      <Hero />

      <section className="section-pad-x-6" style={{ maxWidth: 900, margin: "0 auto", paddingTop: "var(--space-9)", paddingBottom: "var(--space-9)", textAlign: "center" }}>
        <div className="tag tag-outline" style={{ marginBottom: "var(--space-4)" }}>
          The Experience
        </div>
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            fontSize: "clamp(26px,3.6vw,40px)",
            lineHeight: 1.35,
            margin: 0,
            color: "var(--color-text)",
          }}
        >
          Wake to the sound of the Atlantic. Walk to Playa Brava in minutes. Return each evening to
          resort-level service, panoramic terraces, and a stillness that only comes from height,
          light, and the sea.
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            lineHeight: 1.7,
            color: "var(--color-neutral-700)",
            maxWidth: 640,
            margin: "var(--space-5) auto 0",
          }}
        >
          This is private residential living with the ease of a five-star hotel — a single,
          fully-appointed apartment inside a tower built for a life lived outdoors, by the water,
          at every hour of the day.
        </p>
      </section>

      <div className="hr" style={{ maxWidth: 1400, margin: "0 auto" }} />

      <ResidenceShowcase />

      <div className="hr" style={{ maxWidth: 1400, margin: "0 auto" }} />

      <BuildingAmenities />
      <Gallery />
      <LocationSection />
      <BookingSection />
      <ClosingCta />
      <Footer />
    </div>
  );
}
