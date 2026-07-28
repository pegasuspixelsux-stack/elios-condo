import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";
import { property } from "../lib/property-data";

export const metadata: Metadata = {
  title: "Terms & Conditions — Elios Residences",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions">
      <p>
        These Terms & Conditions govern reservation requests submitted through the {property.name}{" "}
        website.
      </p>
      <p>
        <strong>Reservation Requests.</strong> Submitting the reservation form or contacting us via
        WhatsApp constitutes a request only, not a confirmed booking. All requests are reviewed and
        confirmed individually by our concierge team, and dates are held only upon written
        confirmation.
      </p>
      <p>
        <strong>Pricing.</strong> Nightly rates displayed on this site are seasonal estimates and
        subject to change until a reservation is confirmed in writing.
      </p>
      <p>
        <strong>Cancellations & Changes.</strong> Cancellation policies, deposit requirements, and
        payment terms will be communicated directly by our concierge team at the time your
        reservation is confirmed.
      </p>
      <p>
        <strong>Contact.</strong> Questions about these terms can be directed to{" "}
        <a href={`mailto:${property.email}`} style={{ color: "var(--color-accent-700)" }}>
          {property.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
