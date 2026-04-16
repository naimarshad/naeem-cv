import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naeem - DevOps Engineer",
  description: "DevOps Engineer · Infrastructure as Code · Kubernetes - I build the platforms teams ship on.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${mono.className}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}