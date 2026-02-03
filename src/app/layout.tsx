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
  title: "Ninad Dighe | Founding Software Engineer & Ex-Google",
  description: "Building the Future, Reliably. Founding Software Engineer at Krazimo | Ex-Google Software Engineer | Bridging AI innovation with production-grade stability.",
  keywords: ["Software Engineer", "Full Stack", "Google", "AI", "Machine Learning", "RAG", "Kubernetes", "GKE"],
  authors: [{ name: "Ninad Dighe" }],
  openGraph: {
    title: "Ninad Dighe | Founding Software Engineer & Ex-Google",
    description: "Building the Future, Reliably. Bridging AI innovation with production-grade stability.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ninad Dighe | Founding Software Engineer & Ex-Google",
    description: "Building the Future, Reliably. Bridging AI innovation with production-grade stability.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-[#ededed]`}
      >
        {children}
      </body>
    </html>
  );
}
