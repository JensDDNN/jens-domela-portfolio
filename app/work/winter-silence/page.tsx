import Image from "next/image";

export default function WinterSilence() {
  return (
    <main style={{ padding: "4rem" }}>
      <h1>Winter Silence</h1>

      <p>
        A photographic exploration of atmosphere,
        absence and stillness.
      </p>

      <Image
        src="/images/DSC_1344.jpg"
        alt="Winter Silence"
        width={1200}
        height={800}
        style={{
          width: "100%",
          height: "auto",
          marginTop: "2rem",
        }}
      />
    </
