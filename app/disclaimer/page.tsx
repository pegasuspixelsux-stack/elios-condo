import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";
import { property } from "../lib/property-data";

export const metadata: Metadata = {
  title: "Disclaimer — Elios Residences",
};

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer">
      <p>
        The images, floor plans, and descriptions presented on this website are artist renderings
        and representations intended to convey the character of {property.name}. Actual finishes,
        furnishings, views, and layouts may vary.
      </p>
      <p>
        <strong>Availability & Pricing.</strong> Calendar availability and nightly rates shown on
        this site are indicative and subject to change without notice until a reservation is
        confirmed directly by our concierge team.
      </p>
      <p>
        <strong>No Guarantee.</strong> Nothing on this website constitutes a binding offer to rent.
        All reservation requests are subject to review and written confirmation.
      </p>
      <p>
        Questions can be directed to{" "}
        <a href={`mailto:${property.email}`} style={{ color: "var(--color-accent-700)" }}>
          {property.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
