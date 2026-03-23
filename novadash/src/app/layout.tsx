import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaDash — Analytics Platform",
  description: "SaaS analytics dashboard built with Next.js, TypeScript and Recharts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
