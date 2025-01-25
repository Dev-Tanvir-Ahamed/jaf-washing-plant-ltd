"use client";
import { motion } from "framer-motion";

const CommitmentFellow = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.div
        className="max-w-3xl space-y-6 my-10 py-10 text-center px-5 md:px-0"
        initial={{ opacity: 0, y: 100 }} // Initial state: content is hidden and below
        whileInView={{ opacity: 1, y: 0 }} // When in view: content fades in and moves to original position
        viewport={{ once: true }} // Trigger animation only once
        transition={{ duration: 1.2, ease: "easeOut" }} // Smooth animation with 1.5s duration
      >
        <p className="text-4xl">Commitment To Our Fellow Associates</p>
        <p className="text-[#606060] font-light text-[18px]">
          A company is only as good as its employees. While our primary focus is
          to serve our customers, we also prioritize the well-being of our
          dedicated and efficient employees and associates, aiming to support
          them in their personal and social lives. We consider it our
          responsibility to ensure the ongoing prosperity of those employees who
          contribute their energy and intellectual capabilities to the
          development of our company.
        </p>
      </motion.div>
    </div>
  );
};

export default CommitmentFellow;
