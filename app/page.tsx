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
          fontSize: "ace.
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
