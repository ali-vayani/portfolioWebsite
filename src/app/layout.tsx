import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/sections/NavBar";
import Starfield from "@/components/Starfield";
import Footer from "@/components/sections/Footer";
const lexend = Lexend({ 
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "ali vayani",
  description:
    "cs @ ut austin • incoming summer 2026 swe intern @ stripe • building impactful tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={lexend.className}
      >
        <Starfield />
        <NavBar/>
        <main className="pt-[4.5rem]">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
