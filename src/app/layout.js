import { Inter, Cabin, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"], weights: ["400", "500", "600", "700"], italic:["normal", "italic"] });
const ShareTechMono = Share_Tech_Mono({subsets: ["latin"], weight: "400"})

export const metadata = {
  title: "Ali Vayani",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ShareTechMono.className}>{children}</body>
    </html>
  );
}
