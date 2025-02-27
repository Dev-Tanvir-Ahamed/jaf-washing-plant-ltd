"use client";
import CertificationList from "@/components/complience/CertificationList";
import { CertificateCarousoul } from "@/components/HomePage/CertificateCarousoul";
import { motion } from "framer-motion";

const Compliance = () => {
  return (
    <>
      <div className="h-[500px] md:h-[400px] flex justify-center items-center flex-col mb-5 text-center gradient-violet">
        <motion.p
          className="font-bold text-5xl text-white space-y-5 mb-5"
          initial={{ opacity: 0, y: 100 }} // Start from bottom
          whileInView={{ opacity: 1, y: 0 }} // Animate to original position
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Compliance and Certification
        </motion.p>
        <motion.div
          className="max-w-4xl text-white font-light text-[18px]"
          initial={{ opacity: 0, y: 100 }} // Start from bottom
          whileInView={{ opacity: 1, y: 0 }} // Animate to original position
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="mb-3">
            JAF Washing, we take great pride in upholding high standards of
            compliance and achieving various certifications that validate our
            commitment to social and environmental responsibility. These
            certifications are a testament to our dedication to sustainable and
            ethical practices throughout our operations.
          </p>
        </motion.div>
      </div>

      {/* Certification List and Carousel */}
      <CertificationList />
      <CertificateCarousoul />
    </>
  );
};

export default Compliance;
