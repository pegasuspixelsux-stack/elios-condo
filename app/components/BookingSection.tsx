"use client";

import { useMemo, useState } from "react";
import { property, whatsappHref } from "../lib/property-data";

function useCalendar(monthOffset: number) {
  return useMemo(() => {
    const base = new Date(2026, 7, 1);
    const month = new Date(base.getFullYear(), base.getMonth() + monthOffset, 1);
    const monthLabel = month.toLocaleString("en-US", { month: "long", year: "numeric" });
    const firstWeekday = month.getDay();
    const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();

    const cells: { day: number | ""; blocked: boolean }[] = [];
    for (let i = 0; i < firstWeekday; i++) cells.push({ day: "", blocked: false });
    for (let d = 1; d <= daysInMonth; d++) {
      const blocked = d % 7 === 0 || d % 11 === 0 || (d >= 12 && d <= 15);
      cells.push({ day: d, blocked });
    }
    return { monthLabel, cells };
  }, [monthOffset]);
}

export function BookingSection() {
  const [monthOffset, setMonthOffset] = useState(0);
  const { monthLabel, cells } = useCalendar(monthOffset);

  return (
    <section id="booking" style={{ maxWidth: 1400, margin: "0 auto", padding: "var(--space-9) var(--space-6)" }}>
      <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto var(--space-7)" }}>
        <div className="tag tag-outline" style={{ marginBottom: "var(--space-3)" }}>
          Reservation
        </div>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: "var(--font-heading-weight)",
            fontSize: "clamp(30px,4vw,48px)",
            margin: 0,
          }}
        >
          Request Your Stay
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
          Every request is answered personally by our concierge team, as though you were calling
          the residence directly.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "var(--space-7)" }}>
        <div className="card elev-sm" style={{ padding: "var(--space-6)" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "var(--space-5)",
            }}
          >
            <button
              type="button"
              aria-label="Previous month"
              onClick={() => setMonthOffset((m) => m - 1)}
              style={{
                background: "transparent",
                border: "1px solid var(--color-divider)",
                borderRadius: "var(--radius-sm)",
                width: 34,
                height: 34,
                cursor: "pointer",
              }}
            >
              &#8249;
            </button>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: "var(--font-heading-weight)",
                margin: 0,
                fontSize: 22,
              }}
            >
              {monthLabel}
            </h3>
            <button
              type="button"
              aria-label="Next month"
              onClick={() => setMonthOffset((m) => m + 1)}
              style={{
                background: "transparent",
                border: "1px solid var(--color-divider)",
                borderRadius: "var(--radius-sm)",
                width: 34,
                height: 34,
                cursor: "pointer",
              }}
            >
              &#8250;
            </button>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7,1fr)",
              gap: 6,
              fontSize: 11,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-neutral-600)",
              marginBottom: "var(--space-2)",
            }}
          >
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6 }}>
            {cells.map((cell, i) => (
              <div
                key={i}
                style={
                  cell.day === ""
                    ? { visibility: "hidden" }
                    : {
                        aspectRatio: "1",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        fontSize: 13,
                        background: cell.blocked ? "var(--color-neutral-200)" : "var(--color-accent-100)",
                        color: cell.blocked ? "var(--color-neutral-500)" : "var(--color-text)",
                        textDecoration: cell.blocked ? "line-through" : "none",
                      }
                }
              >
                {cell.day}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              gap: "var(--space-4)",
              marginTop: "var(--space-5)",
              fontSize: 13,
              color: "var(--color-neutral-600)",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "var(--color-accent-200)",
                  display: "inline-block",
                }}
              />
              Available
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "var(--color-neutral-300)",
                  display: "inline-block",
                }}
              />
              Reserved
            </span>
          </div>
        </div>

        <div
          className="card elev-md"
          style={{ padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}
        >
          <div>
            <div style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-neutral-600)" }}>
              Starting From
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-3)" }}>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: 40, fontWeight: "var(--font-heading-weight)" }}>
                ${property.pricePerNight}
              </span>
              <span style={{ color: "var(--color-neutral-600)" }}>/ night</span>
              <span className="tag tag-accent" style={{ marginLeft: "auto" }}>
                Seasonal pricing
              </span>
            </div>
          </div>
          <div className="hr" />
          <form style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
              <div className="field">
                <label htmlFor="booking-name">Name</label>
                <input id="booking-name" name="name" className="input" type="text" placeholder="Full name" />
              </div>
              <div className="field">
                <label htmlFor="booking-email">Email</label>
                <input id="booking-email" name="email" className="input" type="email" placeholder="you@email.com" />
              </div>
              <div className="field">
                <label htmlFor="booking-phone">Phone</label>
                <input id="booking-phone" name="phone" className="input" type="tel" placeholder="+1 000 000 0000" />
              </div>
              <div className="field">
                <label htmlFor="booking-country">Country</label>
                <input id="booking-country" name="country" className="input" type="text" placeholder="Country of residence" />
              </div>
              <div className="field">
                <label htmlFor="booking-checkin">Arrival</label>
                <input id="booking-checkin" name="checkIn" className="input" type="date" />
              </div>
              <div className="field">
                <label htmlFor="booking-checkout">Departure</label>
                <input id="booking-checkout" name="checkOut" className="input" type="date" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="booking-guests">Guests</label>
              <select id="booking-guests" name="guests" className="input" defaultValue="8">
                {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} Guest{n > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="booking-message">Message</label>
              <textarea id="booking-message" name="message" className="input" rows={3} placeholder="Tell us about your stay" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Request Reservation
            </button>
          </form>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-block"
            style={{ textAlign: "center", textDecoration: "none" }}
          >
            Contact via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
