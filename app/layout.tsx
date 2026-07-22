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
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "2rem",
          fontFamily: "Georgia, serif",
        }}
      >
        <nav
          style={{
            display: "flex",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          /Home</Link>
          /workWork</Link>
          <Link hrefStatement</Link>
          <LinktAbout</Link>
          contact">Contact</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
