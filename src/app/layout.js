// src/app/layout.jsx
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar"; // import responsive navbar

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for the site
export const metadata = {
  title: "AeroVJTI",
  description: "Official website of AeroVJTI Club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-black via-slate-900 to-black animate-gradient text-white`}
      >
        {/* Navbar */}
        {/* <Navbar /> */}

        {/* Main Content */}
        <main className="">{children}</main>
      </body>
    </html>
  );
}
