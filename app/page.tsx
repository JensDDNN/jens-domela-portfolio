import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px",
      }}
    >
      <Image
        src="/DSC_17401.jpg"
        alt="Artificial Trees"
        width={1200}
        height={800}
        style={{
          width: "100%",
          height: "auto",
          marginBottom: "3rem",
        }}
      <p>
        Exploring silence, presence and urban space.
      </p>

      <hr style={{ margin: "4rem 0" }} />

      <h2>Featured Projects</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
        }}
      >
        ence"
          style={{
            textDecoration: "none",
            color: "inherit",
            border: "1px solid #ddd",
            padding: "1rem",
          }}
        >
          <h3>Winter Silence</h3>
          <p>Atmosphere, absence and stillness.</p>
        </Link>

        <Link
          href="/work/urban-isolation"
          style={{
            textDecoration: "none",
            color: "inherit",
            border  href="/work/city-fragments"
          style={{
            textDecoration: "none",
            color: "inherit    <Link
          href="/work/shadowe={{
            textDecoration: "none",
            color: "inherit",
            border: "1px solid #ddd",
            padding: "1rem",
          }}
        >
          <h3>Shadow Studies</h3>
          <p>Investigations into shadow and body.</p>
        </Link>
      </div>
    </main>
  );
}
