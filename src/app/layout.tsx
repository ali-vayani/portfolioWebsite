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
  description: "welcome",
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
        {children}
        <Footer/>
      </body>
    </html>
  );
}
