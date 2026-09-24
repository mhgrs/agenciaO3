import type { Metadata } from "next";
import "@fontsource/manrope/200.css";
import "@fontsource/manrope/300.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/800.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
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
      </head>
      <body className={`antialiased bg-background text-foreground font-sans`}>
        {children}
      </body>
    </html>
  );
}
