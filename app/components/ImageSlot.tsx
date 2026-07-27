import Image from "next/image";

export function ImageSlot({ label, src }: { label: string; src?: string }) {
  if (src) {
    return (
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image src={src} alt={label} fill sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background:
          "linear-gradient(135deg, var(--color-neutral-400), var(--color-neutral-300))",
        border: "1px solid var(--color-divider)",
        boxSizing: "border-box",
      }}
    >
      <span
        style={{
          padding: "0 var(--space-4)",
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--color-neutral-600)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
