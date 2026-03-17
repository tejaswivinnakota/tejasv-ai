import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Tejaswi Vinnakota",
  description: "Product leader and AI alignment thinker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-zinc-900 dark:text-zinc-100`}
      >
        <header className="sticky top-0 z-10 border-b border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-black/90 backdrop-blur">
          <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold text-sm tracking-tight">
              Tejaswi Vinnakota
            </Link>
            <div className="flex gap-6 text-sm text-zinc-500 dark:text-zinc-400">
              <Link href="/about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                About
              </Link>
              <Link href="/articles" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                Writing
              </Link>
              <Link href="/resume" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                Resume
              </Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-3xl px-6 py-16">{children}</main>
      </body>
    </html>
  );
}
