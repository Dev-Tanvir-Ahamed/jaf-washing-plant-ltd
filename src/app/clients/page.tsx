"use client";
import ClientData from "@/components/clients/ClientData";
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <>
      <div className="h-[1000px]  md:h-[500px] flex justify-center items-center flex-col mb-5 text-center px-5 md:px-0 gradient-violet">
        <motion.p
          className="font-bold text-[32px] text-white space-y-5 mb-5"
          initial={{ opacity: 0, y: 100 }} // Start from below and transparent
          whileInView={{ opacity: 1, y: 0 }} // Animate to original position
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Our Valued Clients
        </motion.p>

        <motion.div
          className="max-w-4xl text-white font-light text-[18px] space-y-3"
          initial={{ opacity: 0, y: 100 }} // Start from below and transparent
          whileInView={{ opacity: 1, y: 0 }} // Animate to original position
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="mb-3">
            JAF Washing, our clients are at the heart of everything we do. We
            are privileged to partner with a diverse range of esteemed
            organizations from various industries, both locally and
            internationally. It is their trust and confidence in our services
            that drive us to continuously strive for excellence.
          </p>
          <p>
            We believe in building strong and long-lasting relationships with
            our clients, based on mutual respect, open communication, and shared
            success. Each client is unique, and we tailor our approach to meet
            their specific requirements and surpass their expectations. Whether
            it&apos;s a small-scale project or a large-scale production, we are
            committed to delivering exceptional results and outstanding customer
            service.
          </p>
          <p>
            To all our valued clients, we extend our heartfelt gratitude for
            choosing JAF Washing as your trusted partner. Your success is our
            success, and we remain dedicated to delivering excellence and
            driving your business forward.
          </p>
        </motion.div>
      </div>
      <ClientData />
    </>
  );
};

export default Clients;
