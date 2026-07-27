"use client";

import { Fragment, useEffect, useState } from "react";
import { ImageSlot } from "./ImageSlot";
import { heroSlides, property, whatsappHref } from "../lib/property-data";

const heroCtaPrimary: React.CSSProperties = {
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
};

const heroCtaSecondary: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "14px 28px",
  border: "1px solid rgba(255,255,255,0.55)",
  color: "#fff",
  textDecoration: "none",
  fontSize: 14,
  letterSpacing: "0.04em",
  borderRadius: "var(--radius-sm)",
};

export function Hero() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroSlides.length);
    }, 6000);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section style={{ position: "relative", height: "100vh", minHeight: 640, overflow: "hidden" }}>
      {heroSlides.map((slide, i) => (
        <div
          key={slide.id}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === heroIndex ? 1 : 0,
            transition: "opacity 1.8s ease",
            transform: `translateY(${scrollY * 0.12}px) scale(1.04)`,
          }}
        >
          <ImageSlot label={slide.placeholder} src={slide.src} />
        </div>
      ))}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(15,14,12,0.05) 0%, rgba(15,14,12,0.08) 40%, rgba(15,14,12,0.62) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: "0 var(--space-8) var(--space-8)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-5)",
          color: "#fff",
        }}
      >
        <div style={{ maxWidth: 900 }}>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              opacity: 0.85,
              marginBottom: "var(--space-3)",
            }}
          >
            {property.tagline}
          </div>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: "var(--font-heading-weight)",
              fontSize: "clamp(42px, 7vw, 92px)",
              lineHeight: 1.02,
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            {property.heroTitle.split("\n").map((line, i) => (
              <Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(16px,2vw,20px)",
              lineHeight: 1.5,
              maxWidth: 640,
              margin: "var(--space-4) 0 0",
              opacity: 0.92,
            }}
          >
            {property.heroSubtitle}
          </p>
        </div>

        <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
          <a href="#booking" style={heroCtaPrimary}>
            Request Reservation
          </a>
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" style={heroCtaSecondary}>
            WhatsApp Concierge
          </a>
        </div>

        <div
          style={{
            display: "flex",
            gap: "var(--space-5)",
            flexWrap: "wrap",
            paddingTop: "var(--space-4)",
            borderTop: "1px solid rgba(255,255,255,0.28)",
            fontSize: 13,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            opacity: 0.9,
          }}
        >
          <span>{property.bedrooms} Bedrooms</span>
          <span>{property.bathrooms} Bathrooms</span>
          <span>{property.guests} Guests</span>
          <span>Floor {property.floor}</span>
          <span>{property.views}</span>
          <span>{property.parking} Parking Spaces</span>
        </div>
      </div>
    </section>
  );
}
