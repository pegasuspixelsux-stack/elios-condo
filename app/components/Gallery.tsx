"use client";

import { useState } from "react";
import { ImageSlot } from "./ImageSlot";
import { galleryItems } from "../lib/property-data";

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = () => setLightboxIndex(null);
  const prevImg = () =>
    setLightboxIndex((i) => (i === null ? i : (i + galleryItems.length - 1) % galleryItems.length));
  const nextImg = () =>
    setLightboxIndex((i) => (i === null ? i : (i + 1) % galleryItems.length));

  const lightboxOpen = lightboxIndex !== null;
  const activeItem = lightboxOpen ? galleryItems[lightboxIndex] : null;

  return (
    <>
      <section id="gallery" className="section-pad-x-6" style={{ maxWidth: 1400, margin: "0 auto", paddingTop: "var(--space-9)", paddingBottom: "var(--space-9)" }}>
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto var(--space-7)" }}>
          <div className="tag tag-outline" style={{ marginBottom: "var(--space-3)" }}>
            Gallery
          </div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: "var(--font-heading-weight)",
              fontSize: "clamp(30px,4vw,48px)",
              margin: 0,
            }}
          >
            Residence &amp; Resort, in Light
          </h2>
        </div>
        <div className="gallery-grid" style={{ gap: "var(--space-3)" }}>
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className="gallery-item"
              style={{
                gridRow: `span ${item.tall ? 2 : 1}`,
                cursor: "pointer",
                borderRadius: "var(--radius-sm)",
                overflow: "hidden",
              }}
              onClick={() => setLightboxIndex(i)}
            >
              <ImageSlot label={item.placeholder} src={item.src} />
            </div>
          ))}
        </div>
      </section>

      {lightboxOpen && activeItem && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(12,11,10,0.92)",
            zIndex: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={closeLightbox}
        >
          <div
            style={{ width: "min(1100px,90vw)", height: "min(720px,80vh)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <ImageSlot label={activeItem.placeholder} src={activeItem.src} />
          </div>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              prevImg();
            }}
            style={{
              position: "fixed",
              left: "var(--space-5)",
              top: "50%",
              transform: "translateY(-50%)",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.4)",
              color: "#fff",
              borderRadius: 999,
              width: 48,
              height: 48,
              cursor: "pointer",
            }}
          >
            &#8249;
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              nextImg();
            }}
            style={{
              position: "fixed",
              right: "var(--space-5)",
              top: "50%",
              transform: "translateY(-50%)",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.4)",
              color: "#fff",
              borderRadius: 999,
              width: 48,
              height: 48,
              cursor: "pointer",
            }}
          >
            &#8250;
          </button>
          <button
            type="button"
            aria-label="Close"
            onClick={closeLightbox}
            style={{
              position: "fixed",
              top: "var(--space-5)",
              right: "var(--space-5)",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.4)",
              color: "#fff",
              borderRadius: 999,
              width: 40,
              height: 40,
              cursor: "pointer",
            }}
          >
            &#215;
          </button>
        </div>
      )}
    </>
  );
}
