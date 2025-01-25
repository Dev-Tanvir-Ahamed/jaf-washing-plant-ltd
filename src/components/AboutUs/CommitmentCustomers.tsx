"use client";
import { motion } from "framer-motion";

export default function CommitmentSection() {
  return (
    <div className="md:h-[600px] h-[700px] relative">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)", // Creates a curved bottom effect
          background: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 50%), url('/assets/images/aboutUs/Wash-Section-bg.jpg')`, // Added background image with gradient
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundPosition: "center", // Centers the background image
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content with animation */}
      <motion.div
        className="relative z-20 w-full flex flex-col h-full justify-center space-y-5 xl:pl-20 px-5"
        initial={{ opacity: 0, y: 100 }} // Initial state (content is hidden and positioned below)
        whileInView={{ opacity: 1, y: 0 }} // When in view, opacity goes to 1 and moves to original position
        viewport={{ once: true }} // Trigger animation only once
        transition={{ duration: 1.5, ease: "easeOut" }} // Smooth animation with increased duration
      >
        <p className="text-4xl text-primary_color font-normal">
          Commitment to Customers
        </p>
        <p className="text-[20px] text-white leading-relaxed max-w-3xl font-light">
          We are constantly perfecting the art of production through meticulous
          planning, implementing quality management, and pursuing our goals and
          meeting customer needs with passion. We offer personalized services,
          meticulous attention to detail, efficient time management, and
          innovative design through our dedicated and motivated team, with a
          strong focus on delivering supreme quality supported by innovative
          systems.
        </p>
      </motion.div>
    </div>
  );
}
