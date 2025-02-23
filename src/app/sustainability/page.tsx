"use client";
import KeyActivities from "@/components/sustainibility/KeyActivities";
import { motion } from "framer-motion";

const Sustainability = () => {
  return (
    <>
      <div className="h-[700px] md:h-[500px] flex justify-center items-center flex-col mb-5 text-center gradient-violet">
        <motion.p
          className="font-bold text-[40px] text-white space-y-5 mb-5"
          initial={{ opacity: 0, y: 100 }} // Start from below and transparent
          whileInView={{ opacity: 1, y: 0 }} // Animate to original position
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Sustainability
        </motion.p>

        <motion.div
          className="max-w-4xl text-white font-light text-[18px] space-y-3"
          initial={{ opacity: 0, y: 100 }} // Start from below and transparent
          whileInView={{ opacity: 1, y: 0 }} // Animate to original position
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="mb-3">
            JAF Washing, we are deeply committed to sustainability and
            environmental responsibility. We recognize the importance of
            protecting our planet and minimizing our ecological footprint. With
            this in mind, we have implemented various initiatives to promote
            sustainable practices throughout our operations.
          </p>
          <p>
            From utilizing state-of-the-art machinery with energy-efficient
            features to implementing water conservation measures, we strive to
            minimize resource consumption and waste generation. Our advanced
            Effluent Treatment Plant (ETP) ensures the proper treatment and
            disposal of wastewater, meeting stringent environmental standards.
          </p>
        </motion.div>
      </div>
      <KeyActivities />
    </>
  );
};

export default Sustainability;
