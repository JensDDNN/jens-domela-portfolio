export default function Home() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 40px",
      }}
    >
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

      <ul>
        <li>Winter Silence</li>
        <li>Urban Isolation</li>
        <li>City Fragments</li>
        <li>Shadow Studies</li>
      </ul>
    </main>
  );
}
