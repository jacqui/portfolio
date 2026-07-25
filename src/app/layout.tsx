import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jacqui Lough",
  description:
    "Yet another personal website featuring my projects, CV, and contact info.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-brand-bg text-brand-text antialiased flex flex-col">
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 w-full bg-white border-b border-brand-light bg-white/90 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <span className="font-bold text-xl tracking-tight text-brand-primary">
              <a
                href="/"
                className="hover:text-brand-primary transition-colors"
              >
                Jacqui Lough
              </a>
            </span>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <a
                href="/projects"
                className="hover:text-brand-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#"
                className="hover:text-brand-primary transition-colors"
              >
                CV
              </a>
              <a
                href="#"
                className="hover:text-brand-primary transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
