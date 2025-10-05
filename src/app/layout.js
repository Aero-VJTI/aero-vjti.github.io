// src/app/layout.jsx
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AeroVJTI",
  description: "Official website of AeroVJTI Club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon manually added */}
        <link rel="icon" href="/logo_1.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-black via-slate-900 to-black animate-gradient text-white`}
      >
        {/* <Navbar /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
