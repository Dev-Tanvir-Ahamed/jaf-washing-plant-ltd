export default function CTASection() {
  return (
    <div className="relative min-h-[400px] flex items-center justify-center px-4 py-16">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/images/home.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p
          className="text-white text-2xl sm:text-3xl md:text-[2rem] font-bold mb-8"
          style={{ lineHeight: "50px" }}
        >
          PLEASE DON&apos;T HESITATE TO CONTACT US REGARDING ANY QUESTIONS AND
          INQUIRIES YOU MAY HAVE.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-[#1a237e] text-white font-medium rounded hover:bg-[#00c853]/90 transition-colors delay-200"
          >
            Contact Us
          </a>
          <a
            href="tel:+8801999027882"
            className="px-8 py-3 bg-[#00c853] text-white font-medium rounded hover:bg-[#1a237e]/90 transition-colors delay-200"
          >
            Call +8801999027882
          </a>
        </div>
      </div>
    </div>
  );
}
