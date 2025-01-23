import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/images/logo1.png";
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
        <div className="mb-6">
          <Image
            src={logo}
            alt="Al-Madina Logo"
            width={120}
            height={120}
            className="mx-auto"
          />
        </div>

        {/* Company Name */}
        <div className="bg-white rounded-full px-8 py-3 mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-green-600">
            J A F Washing Plant Ltd.
          </h1>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-4xl">
          100% EXPORT ORIENTED GARMENTS WASHING PROJECT
        </h2>

        {/* Description */}
        <p className="text-white text-lg md:text-xl max-w-3xl mb-12 leading-relaxed">
          Experience the cutting-edge excellence of J A F Washing Plant Ltd.,
          Bangladesh&apos;s premier modern washing plant, delivering superior
          quality with state-of-the-art machinery
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/about"
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
        </div>
      </div>
    </main>
  );
}
