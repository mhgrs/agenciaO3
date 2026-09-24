import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "O³ — Eleva tu marca.",
  description: "Hay empresas extraordinarias que todavía parecen ordinarias. O³ Brand OS™.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
      </head>
      <body className={`antialiased bg-background text-foreground font-sans`}>
        {children}
      </body>
    </html>
  );
}
