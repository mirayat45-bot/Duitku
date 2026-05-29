export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-60" />
      <div
        className="blob animate-blob-1"
        style={{
          width: 560,
          height: 560,
          top: "-160px",
          left: "-140px",
          background:
            "radial-gradient(circle at 35% 35%, var(--primary), transparent 62%)",
        }}
      />
      <div
        className="blob animate-blob-2"
        style={{
          width: 620,
          height: 620,
          bottom: "-200px",
          right: "-180px",
          background:
            "radial-gradient(circle at 45% 45%, var(--secondary), transparent 62%)",
        }}
      />
    </div>
  );
}
