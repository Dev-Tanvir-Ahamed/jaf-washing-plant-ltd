"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const CertificationList = () => {
  const certifications = [
    { id: "01", text: "JAF is SEDEX certified." },
    { id: "02", text: "JAF is AMFORI BSCI certified." },
    { id: "03", text: "JAF is OEKO-TEX® certified." },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            className="relative p-4 rounded-sm flex items-center gap-3 bg-gray-50 overflow-hidden cursor-pointer group hover:bg-primary_color transition duration-200"
            initial={{ opacity: 0, y: 50 }} // Start from below with reduced opacity
            whileInView={{ opacity: 1, y: 0 }} // Animate to normal opacity and position
            viewport={{ once: true }} // Only trigger animation once when it comes into view
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center w-full">
              <span className="text-gray-600 font-medium min-w-[32px] group-hover:text-white transition-colors">
                {cert.id}.
              </span>
              <p className="text-gray-800 group-hover:text-white transition-colors flex-1">
                {cert.text}
              </p>
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ChevronRight className="h-5 w-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificationList;
