"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/images/logo.jpg";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/assets/video/denim.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 py-20">
        {/* Logo */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={logo}
            alt="JAF Logo"
            width={120}
            height={120}
            className="mx-auto"
          />
        </motion.div>

        {/* Company Name */}
        <motion.div
          className="bg-white rounded-full px-8 py-3 mb-8"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-green-600">
            JAF Washing Plant Ltd.
          </h1>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-4xl"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            delay: 0.2,
          }}
        >
          100% EXPORT ORIENTED GARMENTS WASHING PROJECT
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-white text-lg md:text-xl max-w-3xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience the cutting-edge excellence of J A F Washing Plant Ltd.,
          Bangladesh&apos;s premier modern washing plant, delivering superior
          quality with state-of-the-art machinery
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/about-us"
            className="bg-gray-100 hover:bg-gray-200 text-green-600 px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-200"
          >
            About Us →
          </Link>
          <Link
            href="/clients"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-200"
          >
            Clients →
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
