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
      JENS DOMELA NIEUWENHUIS
      </h1>

      <p
        style={{
          fontSize: "1.25rem",
          marginBottom: "5rem",
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
          href="/        <img
            src="/images/DSC_1344.jpg"
            alt="Winter Silence"
            style={{
              width: "100%",
              height: "220px",
              lence
          </h2>
        </Link>

        <Link
          href="/work/urban-isolation"
          styles/urban-isolation/DSC_0423.jpg"
            alt="Urban Isolation"
            style={{
              width: "100%",
              height: "            Urban Isolation
          </h2>
        </Link>

        <Link
          href="/work/city-fragments"
          style={{
            textDecoration"
            alt="City Fragments"
            style={{
              width: "100%",
              height  >
            City Fragments
          </h2>
        </Link>

        <Link
          href="/work/shadow-studies"
          style={{
            text_0947-2.jpg"
            alt="Shadow Studies"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
 
        </Link>
      </div>
    </main>
  );
}            src="/images/urban-isolation/DSC_0423.jpg"
            alt="Urban Isolation"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              display: "block",
            }}
          />
          <h2>Urban Isolation</h2>
        </Link>

        <Link
          href="/work/city-fragments"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img
            src="/images/city-fragments/DSC_17401.jpg"
            alt="City Fragments"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              display: "block",
            }}
          />
          <h2>City Fragments</h2>
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
              height: "220px",
              objectFit: "cover",
              display: "block",
            }}
          />
          <h2>Shadow Studies</h2>
        </Link>
      </div>
    </main>
  );
}
