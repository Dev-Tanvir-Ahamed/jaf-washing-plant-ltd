import CTASection from "@/components/HomePage/CTASection";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/TryNav";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Add desired weights
});

export const metadata: Metadata = {
  title: "J A F Washing Plant Ltd.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} antialiased`}
      >
        <Navbar />
        {/* <TryNav /> */}
        {children}
        <CTASection />
        <Footer />
      </body>
    </html>
  );
}
