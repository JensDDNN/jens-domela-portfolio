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
      .jpg"
        alt="Artificial Trees"
        width={1200}
        height={800}
        style={{
          width: "100%",
          height: "auto",
          marginBottom: "3rem",
        }}
      />

      <h1
        style={{
          fontSize: "5rem",
          lineHeight: 1,
        }}
      >
        JENS DOMELA
        <br />
        NIEUWENHUIS
      </h1>

      <h2>Fine Art Photography</h2>

      <p>
        Exploring silence, presence and urban space.
      </p>

      <hr style={{ margin: "4rem 0" }} />

      <h2>Featured Projects</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
        }}
      >
        <Link
          href="/work/winter-silence"
          style={{
            textDecoration: "none",
            color: "inherit",
            border: "1px solid #ddd",
            padding: "1rem",
          }}
        >
          <div>
            <h3>Winter Silence</h3>
            <p>Atmosphere, absence and stillness.</p>
          </div</h3>
            <p>Human presence within urban space.</p>
          </div>
        </Link>

        <Link
          href="/work/city-fragments"
          style={{
            textDecoration: "none",
            color: "inherit",
            border: "1px solid #ddd",
            padding: "1remk/shadow-studies"
          style={{
            textDecoration: "none",
            color: "inherit",
            border: "1   </Link>
      </div>
    </main>
  );
}
