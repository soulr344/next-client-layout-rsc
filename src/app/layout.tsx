"use client";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <h1>This is rendered from root layout (Client Component).</h1>
        {children}
      </body>
    </html>
  );
}
