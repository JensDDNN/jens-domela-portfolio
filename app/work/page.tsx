import Link from "next/link";

export default function Work() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "4rem",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "3rem",
        }}
      >
        Work
      </h1>

      <div
        style={{
          display: "grid",
          gap: "5rem",
        }}
      >
        <Link
          href="/work/winter-silence"
          style={{
C_1344.jpg"
            alt="Winter Silence"
            style={{
              width: "100%",
              maxWidth: "700px",
              height: "auto",
              display: "block",
              marginBottom: "1rem",
                  textDecoration: "none",
            colorolation"
            style={{
              width: "100%",
              maxWidth: "700px",
              height: "auto",
              display"/work/city-fragments"
          style={{
            textDecoration: "none",     alt="City Fragments"
            style={{
              width: "100%",
              maxWidth: "   </p>
        </Link>

        <Link
          href="/work/shadow-studies"
          style={{
       udies/DSC_0947-2.jpg"
            alt="Shadow Studies"
            style={{
              width: "100%",
              maxWidth: "700px",   </Link>
      </div>
    </main>
  );
}
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
              display: "block",
            }}
          />

          <h2 style={{ marginTop: "1rem" }}>
            City Fragments
          </h2>

          <p>
            Architecture reduced to form,
            geometry and light.
          </p>
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

          <h2 style={{ marginTop: "1rem" }}>
            Shadow Studies
          </h2>

          <p>
            Investigations into shadow,
            body and space.
          </p>
        </Link>
      </div>
    </main>
  );
}
