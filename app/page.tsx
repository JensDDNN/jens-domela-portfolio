import Image from "next/image";

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
  <div>
    <h3>Winter Silence</h3>
    <p>
      Atmosphere, absence and stillness.
    </p>
  </div>

  <div>
    <h3>Urban Isolation</h3>
    <p>
      Human presence within urban space.
    </p>
  </div>

  <div>
    <h3>City Fragments</h3>
    <p>
      Form, geometry and architecture.
    </p>
  </div>

  <div>
    <h3>Shadow Studies</h3>
    <p>
      Investigations into shadow and body.
    </p>
  </div>
</div>
    </main>
  );
}
