"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function WhoWeAre() {
  const ref = useRef(null); // Ref for the section
  const isInView = useInView(ref, { once: true }); // Trigger animation when in view

  return (
    <motion.section
      ref={ref}
      className="max-w-5xl mx-auto px-4 py-16 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-violet-600 mb-8">
        Who we are?
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed mb-8 mx-auto">
        JAF Washing Plant Ltd. is a leading modern washing plant in Bangladesh.
        Established in January 2013, our state-of-the-art facility is located in
        Savar, Dhaka. With a focus on quality and customer satisfaction, we have
        rapidly grown since our inception, expanding our operations and catering
        to both local and international clients. With cutting-edge machinery, a
        spacious factory area, and a monthly capacity of 800,000 units, we meet
        the demands of the denim and twill industry. Committed to excellence, we
        export 70% of our products to Europe and 30% to other countries. Our
        peak season runs from March to August, and we proudly own our own E.T.P.
        facilities.
      </p>

      <Link
        href="/about-us"
        className="inline-flex items-center justify-center bg-primary_color hover:bg-[#021a30] text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200"
      >
        Read More →
      </Link>
    </motion.section>
  );
}
