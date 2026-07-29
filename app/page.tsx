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
          marginBottom: "3rem",
       1.25rem",
          marginBottom: "4rem",
        }}
      >
        Fine Art Photography
      </p>

      <div
        style={{
          display: "grid",
          gap: "2rem",
        }}
      >
        <work/winter-silence
          <h2>Winter Silence</h2>
        </Link>

        /work/urban-isolation
          <h2>Urban Isolation</h2>
        </Link>

        /work/city-fragments
          <h2>City Fragments</h2>
        </Link>

        <Link/shadow-studies
          <h2>Shadow Studies</h2>
        </Link>
      </div>
    </main>
  );
}
