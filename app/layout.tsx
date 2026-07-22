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
        {children}
      </body>
    </html>
  );
}
