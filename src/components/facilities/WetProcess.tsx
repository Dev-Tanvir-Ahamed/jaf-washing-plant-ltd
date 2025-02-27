"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import wetProcess from "../../../public/assets/images/facilities/wetProcess.jpg";

export default function WetProcess() {
  const processes = [
    "Rinse / Garments / Silicon wash",
    "Rubber ball wash, Enzyme wash, Stone enzyme wash",
    "Bleach wash, Acid wash, and Towel bleach",
    "Tie Wash, Snow wash",
    "Dip bleach, Resin dipping, Garments. Dye, over dye",
    "Florescent Pigment dye, Sulphur dye, Weave dye",
    "Tie dye and Cool dye",
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left side - Image */}
        <motion.div
          className="relative h-[600px] bg-gray-100 rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: -100 }} // Start from left and transparent
          whileInView={{ opacity: 1, x: 0 }} // Animate to original position
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Image
            src={wetProcess}
            alt="Wet Process Facility"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/5"></div>
        </motion.div>

        {/* Right side - Process List */}
        <motion.div
          className="flex flex-col justify-center h-full"
          initial={{ opacity: 0, y: 100 }} // Start from below and transparent
          whileInView={{ opacity: 1, y: 0 }} // Animate to original position
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-primary_color mb-6">
            Wet Process
          </h2>
          <ul className="space-y-4">
            {processes.map((process, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-primary_color mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-800 font-light text-lg">
                  {process}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
