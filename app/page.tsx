export default function Home() {
  return (
    <main style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "80px 40px"
    }}>
      <h1
        style={{
          fontSize: "4rem",
          marginBottom: "1rem"
        }}
      >
        JENS DOMELA NIEUWENHUIS
      </h1>

      <p
        style={{
          fontSize: "1.5rem",
          marginBottom: "3rem"
        }}
      >
        Fine Art Photography
      </p>

      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px"
        }}
      >
        Exploring silence, presence and urban space.
      </p>

      <hr style={{ margin: "80px 0" }} />

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
