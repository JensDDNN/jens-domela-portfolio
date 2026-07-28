import Link from "next/link";

export default function Work() {
  return (
    <main
      style={{
        padding: "4rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h1>Work</h1>

      <div
        style={{
          display: "grid",
          gap: "3rem",
          marginTop: "2rem",
        }}
      >
        <Link
          href="/work/winter-silence"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img
            src="/images/DSC_1344.jpg"
            alt="Winter Silence"
            style={{
              width: "100%",
              maxWidth: "1200px",
            }}
          />
          <h2>Winter Silence</h2>
          <p>
            A photographic exploration of atmosphere,
            absence and stillness.
          </p>
        </Link>

        <Link
          href="/work/urban-isolation"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img
            src="/images/urban-isolation/DSC_0423.jpg"
            alt="Urban Isolation"
            style={{
              width: "100%",
              maxWidth: "1200px",
            }}
          />
          <h2>Urban Isolation</h2>
          <p>
            Human presence within contemporary urban
            environments.
          </p>
        </Link>

        <Link
          href="/work/city-fragments"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img
            src="/images/city-fragments/DSC_17401.jpg"
            alt="City Fragments"
            style={{
              width: "100%",
              maxWidth: "1200px",
            }}
          />
          <h2>City Fragments</h2>
          <p>
            Architecture reduced to form,
            geometry and light.
          </p>
        </Link>

        <Link
          href="/work/shadow-studies"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img
            src="/images/shadow-studies/DSC_0947-2.jpg"
            alt="Shadow Studies"
            style={{
              width: "100%",
              maxWidth: "1200px",
            }}
          />
          <h2>Shadow Studies</h2>
          <p>
            Investigations into shadow,
            body and space.
          </p>
        </Link>
      </div>
    </main>
  );
}
