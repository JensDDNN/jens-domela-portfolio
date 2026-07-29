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
          padding: "2rem 0",
          fontFamily: "Georgia, serif",
          background: "#f5f3ef",
        }}
      >
<nav
  style={{
    display: "flex",
    gap: "4rem",
    marginBottom: "3rem",
    borderBottom: "1px solid #ddd",
    paddingBottom: "1rem",
    fontSize: "0.9rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
  }}
>
          <Link href="/">Home</Link>
          <Link href="/work">Work</Link>
          <Link href="/statement">Statement</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
