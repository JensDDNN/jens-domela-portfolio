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
          background: "#f5f3ef",
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
          /statementStatement</Link>
          /aboutAbout</Link>
          /contactContact</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
