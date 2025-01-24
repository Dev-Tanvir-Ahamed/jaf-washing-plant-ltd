"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const CertificationList = () => {
  const certifications = [
    {
      id: "01",
      text: "AWPL is Global Organic Textile (GOTS) certified.",
    },
    {
      id: "02",
      text: "AWPL is Organic Content Standard (OCS) certified",
    },
    {
      id: "03",
      text: "AWPL is Recycled Claim Standard (RCS) certified",
    },
    {
      id: "04",
      text: "AWPL is INDITEX (RTM, GTW) nominated supplier.",
    },
    {
      id: "05",
      text: "AWPL is TESCO nominated supplier.",
    },
    {
      id: "06",
      text: "AWPL is SEDEX certified.",
    },
    {
      id: "07",
      text: "AWPL is AMFORI BSCI certified.",
    },
    {
      id: "08",
      text: "AWPL is LOBLAWS nominated supplier.",
    },
    {
      id: "09",
      text: "AWPL is Global Recycled Standard (GRS) certified",
    },
    {
      id: "10",
      text: "AWPL is SLCP verified",
    },
    {
      id: "11",
      text: "AWPL is Higg Index certified",
    },
    {
      id: "12",
      text: "AWPL is Amfori BSCI certified",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            className="relative p-4 rounded-sm flex items-center gap-3 bg-gray-50 overflow-hidden cursor-pointer group"
            whileHover={{
              backgroundColor: "rgb(22 163 74)",
              transition: { duration: 0.2 },
            }}
            initial={{ x: 0 }}
            animate={{ x: 0 }}
          >
            {/* Animated Content */}
            <motion.div
              className="flex items-center w-full"
              whileHover={{ x: -40 }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <span className="text-gray-600 font-medium min-w-[32px] group-hover:text-white transition-colors">
                {cert.id}.
              </span>
              <p className="text-gray-800 group-hover:text-white transition-colors flex-1">
                {cert.text}
              </p>
              <motion.div
                className="text-white opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.1, x: -30 }}
              >
                <ChevronRight className="h-5 w-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificationList;
