"use client";

import { useEffect, useState } from "react";

const navLinkStyle: React.CSSProperties = {
  fontSize: 13,
  letterSpacing: "0.04em",
  textDecoration: "none",
  color: "inherit",
  opacity: 0.9,
};

const navLinks = [
  { href: "#discover", label: "The Building" },
  { href: "#gallery", label: "Gallery" },
  { href: "#discover-punta", label: "Punta del Este" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const reserveStyle: React.CSSProperties = {
    borderColor: scrolled ? undefined : "rgba(255,255,255,0.6)",
    color: scrolled ? undefined : "#fff",
  };

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

      <div className="nav-desktop-group">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} style={navLinkStyle}>
            {link.label}
          </a>
        ))}
        <a href="#booking" className="btn btn-secondary" style={reserveStyle}>
          Request Reservation
        </a>
      </div>

      <a
        href="#booking"
        className="btn btn-secondary nav-mobile-reserve"
        style={{
          ...reserveStyle,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Request Reservation
      </a>

      <button
        type="button"
        className="nav-burger"
        aria-label="Menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          {menuOpen ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-3)",
            padding: "var(--space-4) var(--space-5)",
            background: "var(--color-bg)",
            borderBottom: "1px solid var(--color-divider)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ ...navLinkStyle, color: "var(--color-text)", opacity: 1 }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
