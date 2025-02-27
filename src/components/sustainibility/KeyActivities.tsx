"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import keyActivities from "../../../public/assets/images/key-activities.png";

const KeyActivities = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 px-5 xl:px-0">
      <div className="grid xl:grid-cols-2">
        {/* content */}
        <motion.div
          className="font-light space-y-3 text-[20px]"
          initial={{ opacity: 0, y: 100 }} // Start from bottom
          whileInView={{ opacity: 1, y: 0 }} // Animate to original position
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="font-semibold text-[26px] text-primary_color mb-3">
            Commitment to Our Community and Environment
          </p>
          <p>
            We are actively involved in CSR activities that aim to enhance the
            lifestyle and conditions of both our own employees and the wider
            community. By engaging in various social initiatives, we strive to
            make a positive impact on the lives of individuals within and
            outside our organization.
          </p>
          <p>
            Environment is always at the priority list of JAF Washing Our firm
            commitment in conserving the environment reflected in our
            state-of-art production units, washing plants with modern ETP
            plants. Efforts are made to control Waste and use of natural
            resources as Water, Gas, and Energy. We also emphasize on disposal
            and proper re-utilization of Industrial Wastes.
          </p>
        </motion.div>

        {/* image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Start from right
          whileInView={{ opacity: 1, x: 0 }} // Animate to original position
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Image
            src={keyActivities}
            alt="keyAcactivities"
            width={800}
            height={400}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default KeyActivities;
