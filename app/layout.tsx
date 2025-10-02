import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cubed - AI-native ops for Square",
  description: "Make Square your single source of truth — automatically. Cubed ingests your invoices, fixes messy items, writes titles & categories, syncs images, and updates inventory + COGS.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

