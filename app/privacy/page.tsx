import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";
import { property } from "../lib/property-data";

export const metadata: Metadata = {
  title: "Privacy Policy — Elios Residences",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This Privacy Policy describes how {property.name} ("we", "us") collects, uses, and
        protects the information you provide when you inquire about or request a reservation for
        the residence.
      </p>
      <p>
        <strong>Information We Collect.</strong> When you submit a reservation request or contact
        us via WhatsApp or email, we collect the information you provide directly, such as your
        name, email address, phone number, country of residence, and details about your intended
        stay.
      </p>
      <p>
        <strong>How We Use Your Information.</strong> We use this information solely to respond to
        your inquiry, manage reservation requests, and communicate with you about your stay. We do
        not sell your personal information to third parties.
      </p>
      <p>
        <strong>Data Retention.</strong> We retain inquiry and reservation information for as long
        as necessary to fulfill the purposes described above and to comply with applicable
        record-keeping obligations.
      </p>
      <p>
        <strong>Contact.</strong> If you have questions about this Privacy Policy or would like to
        request access to or deletion of your information, please contact us at{" "}
        <a href={`mailto:${property.email}`} style={{ color: "var(--color-accent-700)" }}>
          {property.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
