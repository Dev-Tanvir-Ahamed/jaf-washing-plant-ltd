"use client";
import { motion } from "framer-motion"; // Import motion for animations
import { Gem, Layers, Lightbulb } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <div className="bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Mission Section */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="w-16 h-16 bg-primary_color flex items-center justify-center mb-6">
              <Gem className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-primary_color text-2xl font-semibold mb-4 relative">
              Our Mission
              <span className="absolute bottom-0 left-6 transform -translate-x-1/2 -mb-2 w-12 h-0.5 bg-primary_color"></span>
            </h2>
            <p className="text-gray-600 mt-6 leading-relaxed">
              Our mission is to deliver quality products, uphold the highest
              standards of service provider ship and professionalism in our
              industry at all times, by recognizing the value our customers
              bring to our business.
            </p>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="w-16 h-16 bg-primary_color flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-primary_color text-2xl font-semibold mb-4 relative">
              Our Vision
              <span className="absolute bottom-0 left-6 transform -translate-x-1/2 -mb-2 w-12 h-0.5 bg-primary_color"></span>
            </h2>
            <p className="text-gray-600 mt-6 leading-relaxed text-left">
              We pledge honesty, fairness, and representation of our supplier
              partners in the local marketplace. As a team, we respect our
              co-workers and provide ample opportunities for personal growth and
              development for all.
            </p>
          </motion.div>

          {/* Goal Section */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="w-16 h-16 bg-primary_color flex items-center justify-center mb-6">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-primary_color text-2xl font-semibold mb-4 relative">
              Our Goal
              <span className="absolute bottom-0 left-6 transform -translate-x-1/2 -mb-2 w-12 h-0.5 bg-primary_color"></span>
            </h2>
            <p className="text-gray-600 mt-6 leading-relaxed">
              Through integrity, hard work, and adherence to the guiding
              principles established by our founder, we will continue to strive
              to become the best and most trusted washing plant industry in
              Bangladesh.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
