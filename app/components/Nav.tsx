"use client";

import { useEffect, useState } from "react";

const navLinkStyle: React.CSSProperties = {
  fontSize: 13,
  letterSpacing: "0.04em",
  textDecoration: "none",
  color: "inherit",
  opacity: 0.9,
};

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: scrolled ? "14px 40px" : "26px 40px",
        background: scrolled ? "var(--color-bg)" : "transparent",
        borderBottom: scrolled
          ? "1px solid var(--color-divider)"
          : "1px solid transparent",
        transition: "all .35s ease",
        color: scrolled ? "var(--color-text)" : "#fff",
      }}
    >
      <span className="nav-brand" style={{ letterSpacing: "0.18em" }}>
        ELIOS
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
        <a href="#discover" style={navLinkStyle}>
          The Building
        </a>
        <a href="#gallery" style={navLinkStyle}>
          Gallery
        </a>
        <a href="#discover-punta" style={navLinkStyle}>
          Punta del Este
        </a>
        <a
          href="#booking"
          className="btn btn-secondary"
          style={{
            borderColor: scrolled ? undefined : "rgba(255,255,255,0.6)",
            color: scrolled ? undefined : "#fff",
          }}
        >
          Request Reservation
        </a>
      </div>
    </nav>
  );
}
