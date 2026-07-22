import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 40px",
      }}
    >
      /images/DSC_17401.jpg={1200}
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
    </main>
  );
}
