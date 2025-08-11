export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        background: "linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url('/photo1.jpg') center/cover no-repeat",
        minHeight: "100vh",
        color: "#fff",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div style={{ marginLeft: "5vw" }}>
        <h1 style={{ fontSize: "3.2rem", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.15 }}>
          When you have a thousand thoughts running in your mind, how exactly do you focus?
        </h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "2.5rem", lineHeight: 1.5 }}>
          Start Small, Feel Still – With Ancient Breathing Wisdom<br />
          <b>From India, for the World</b>
        </p>
        <button
          style={{
            background: "#fff",
            color: "#151515",
            border: "none",
            borderRadius: "2rem",
            padding: "1.1rem 2.8rem",
            fontSize: "1.25rem",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            transition: "background 0.2s, color 0.2s"
          }}
        >
          START TODAY
        </button>
      </div>
    </section>
  );
}
