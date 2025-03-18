import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ 
  subsets: ["latin"] 
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

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
        {children}
      </body>
    </html>
  );
}
