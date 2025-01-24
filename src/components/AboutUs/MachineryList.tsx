"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const MachineryList = () => {
  const machinery = [
    { id: "01", text: "Wash Machine(belly type)" },
    { id: "02", text: "Front Loading Wash Machine" },
    { id: "03", text: "Dryer" },
    { id: "04", text: "Sample Machine" },
    { id: "05", text: "Hydro Extactor" },
    { id: "06", text: "Gas Boiler" },
    { id: "07", text: "Laser Machine" },
    { id: "08", text: "Diesel Generator" },
    { id: "09", text: "E.T.P" },
    { id: "10", text: "Compressor" },
    { id: "11", text: "Whisker" },
    { id: "12", text: "Hand Sanding" },
    { id: "13", text: "Tagging" },
    { id: "14", text: "Grinding" },
    { id: "15", text: "P.P Spray" },
    { id: "16", text: "3D Wrinkle" },
    { id: "17", text: "Destroy" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-4">
        {machinery.map((machine) => (
          <motion.div
            key={machine.id}
            className={`relative p-4 rounded-sm flex items-center gap-3 overflow-hidden cursor-pointer group`}
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
                {machine.id}.
              </span>
              <p className="text-gray-800 group-hover:text-white transition-colors flex-1">
                {machine.text}
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

export default MachineryList;
