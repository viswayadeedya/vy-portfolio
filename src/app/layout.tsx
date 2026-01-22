import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viswa | Full-Stack Engineer | Impact-First Portfolio",
  description: "Full-stack engineer building production systems and shipping measurable outcomes in fintech and enterprise environments.",
  openGraph: {
    title: "Viswa | Full-Stack Engineer",
    description: "I build production systems and ship measurable outcomes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground relative`}
      >
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
