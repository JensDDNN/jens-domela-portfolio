1export default function RootLayout({2  children,3}: {4  children: React.ReactNode;5}) {6  return (7    <html lang="en">8      <body>{children}</body>9    </html>10  );11}
