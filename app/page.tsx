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
          margin{
          fontSize: "1.25rem",
          marginBottom: "4rem",
        }}
      >
        Fine Art Photography
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
        }}
      >
        <Link
          href="/work/winter-silence"
          images/DSC_1344.jpg"
            alt="Winter Silence"
            style={{
              width: "100%",
              height    href="/work/urban-isolation"
          style={{
       lation/DSC_0423.jpg"
            alt="Urban Isolation"
            style={{
              width: "100%",
              height    href
          <img
            src="/images/city-fragments/DSC_17401.jpg"
            alt="City Fragments"
            style={{
              width: "100%",
        <Link
          href="/        <img
            src="/images/shadow-studies/DSC_0947-2.jpg"
            alt="Shadow Studies"
            style={{
              width: "100k>
      </div>
    </main>
  );
}          <h2>City Fragments</h2>
        </Link>

        <Link
          href="/work/shadow-studies"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img
            src="/images/shadow-studies/DSC_0947-2.jpg"
            alt="Shadow Studies"
            style={{
              width: "100%",
              display: "block",
            }}
          />

          <h2>Shadow Studies</h2>
        </Link>
      </div>
    </main>
  );
}
