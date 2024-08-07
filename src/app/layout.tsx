import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Lexend } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ali Vayani",
  description: "Ali Vayani Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
