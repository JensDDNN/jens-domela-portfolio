import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem 40px",
          fontFamily: "Georgia, serif",
          background: "#f5f3ef",
        }}
      >
        <nav
          style={{
            display: "flex",
            gap: "2rem",
            marginBottom: "3rem",
            borderBottom: "1px solid #ddd",
            paddingBottom: "1rem",
          }}
        >
          /Home</Link>
          /workWork</Link>
          <Link href="/statementink>
          <LinktAbout</Link>
          /contactContact</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
