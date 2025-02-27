"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import dryProcess1 from "../../../public/assets/images/facilities/dryProcess.jpg";

export default function DryProcess() {
  const processes = [
    "Whisker (Manual & Laser), Hand Sand Image & Full Body (Manual & Laser)",
    "Tagging, PP sponging, PP Spray (Only Image or Full Body)",
    "Resin Spray (Only Crinkle or 3D area or Full Body)",
    "Pigment Spray (Only Image), PP rubbing (Full body or Only Image)",
    "PP touch up (On top of whisker or Only Seam Area)",
    "Permanent crinkle (5 times wash) or Non-permanent crinkles",
    "Permanent 3D (5 times wash) or Non-permanent 3D",
    "Grinding & Destruction (Manual or Laser)",
    "Laser print (only image or Full Body)",
    "Rib & Repair, Leather Coating, Indigo blocking",
  ];

  return (
    <div className="container mx-auto p-6">
      {/* part - 1 */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left side - Process List */}
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, y: 100 }} // Start below and transparent
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible position
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-primary_color mb-6">
            Dry Process
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

        {/* Right side - Image */}
        <motion.div
          className="relative h-[600px] bg-gray-100 rounded-lg overflow-hidden order-1 md:order-2"
          initial={{ opacity: 0, x: 100 }} // Start from the right and transparent
          whileInView={{ opacity: 1, x: 0 }} // Animate to original position
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Image
            src={dryProcess1}
            alt="Dry Process Facility"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/5"></div>
        </motion.div>
      </div>
    </div>
  );
}
