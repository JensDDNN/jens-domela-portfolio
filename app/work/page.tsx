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
          style={{
            textDecoration: "none",
            color: "inherit",
            border: "1px solid #           height: "auto",
              display: "block",
           <Link
          href="/work/urban-isolation"
          style={{
            textDecoration: "none",
            color: "inherit",
            border             width: "100%",
              height: "auto"     </p>
        </Link>

        <Link
          href="/work/city-fragments"
          style={{
            textDecoration: "none",
            color: "inherit",
         yle={{
              width: "100%",
              height: "auto",
              display: "block",
            href="/work/shadow-studies"
          style={{
            textDecoration: "none",
            colorStudies"
            style={{
              width: "100%",
      pace.
          </p>
        </Link>
      </div>
    </main>
  );
}
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
