import CTASection from "@/components/HomePage/CTASection";
import Footer from "@/shared/Footer";

import Navbar from "@/shared/Navbar";
import ScrollToTop from "@/shared/ScrollOnTop";
import WhatsAppButton from "@/shared/WhatsappButton";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Head from "next/head";
import "./globals.css";
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Add desired weights
});

export const metadata: Metadata = {
  title: "JAF Washing",
  description: "JAF Washing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/public/favicon.ico"
          style={{ color: "white" }}
        />
      </Head>
      <body className={`${rubik.variable} antialiased`}>
        <Head>
          <link rel="icon" href="/public/favicon.ico" />
        </Head>
        <Navbar />
        {/* <TryNav /> */}
        {children}
        <WhatsAppButton />
        <ScrollToTop />
        <CTASection />
        <Footer />
      </body>
    </html>
  );
}
