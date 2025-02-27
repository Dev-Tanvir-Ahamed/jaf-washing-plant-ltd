"use client";
import DryProcess from "@/components/facilities/DryProcess";
import WetProcess from "@/components/facilities/WetProcess";
import { motion } from "framer-motion";

const Faculties = () => {
  return (
    <div>
      {/* Animated Header Section */}
      <div className="h-[600px] md:h-[400px] flex justify-center items-center flex-col mb-5 text-center gradient-violet">
        <motion.p
          className="font-bold text-5xl text-white space-y-5 mb-5"
          initial={{ opacity: 0, y: 100 }} // Starts from the bottom
          whileInView={{ opacity: 1, y: 0 }} // Animates to its original position
          viewport={{ once: true }} // Trigger animation once when in view
          transition={{ duration: 1 }} // Duration of the animation
        >
          Our Washing Facilities
        </motion.p>
        <motion.div
          className="max-w-4xl text-white font-light text-[18px]"
          initial={{ opacity: 0, y: 100 }} // Starts from the bottom
          whileInView={{ opacity: 1, y: 0 }} // Animates to its original position
          viewport={{ once: true }} // Trigger animation once when in view
          transition={{ duration: 1 }} // Duration of the animation
        >
          <p className="mb-3">
            At JAF Washing, we house state-of-the-art washing facilities
            equipped with advanced techniques to cater to a wide range of
            garment finishing requirements. Our expertise extends to both dry
            and wet processes, ensuring exceptional results for our clients.
          </p>
          <p>
            With our comprehensive range of washing facilities and expertise in
            various techniques, we ensure impeccable results and unmatched
            quality for our clients. Partner with us to bring your garment
            designs to life and achieve outstanding finishing effects.
          </p>
        </motion.div>
      </div>

      <DryProcess />

      <WetProcess />
    </div>
  );
};

export default Faculties;
