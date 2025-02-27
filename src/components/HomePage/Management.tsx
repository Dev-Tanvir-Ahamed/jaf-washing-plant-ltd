"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import mehediHasan from "../../../public/assets/images/management/mehedi-hasan.jpg";

export default function Management() {
  const profiles = [
    {
      name: "MD. SIR JOHIRUL ISLAM BABU",
      title: "MANAGING DIRECTOR, JAF Washing",
      image: mehediHasan,
      description: [
        "At JAF Washing, our commitment to excellence is unwavering. We strive to provide you with the highest quality services, backed by our dedicated team, state-of-the-art machinery, and advanced techniques. With a relentless focus on customer satisfaction, we aim to exceed your expectations and build lasting partnerships.",
        "Our success is built on the foundation of a skilled and proficient workforce, who are driven by their passion for delivering impeccable results. We invest in their growth and well-being, ensuring that they possess the knowledge and expertise to meet your unique requirements.",
        "As an organization, we are continuously exploring new avenues for innovation and improvement. By partnering with us, you gain access to our ongoing pursuit of excellence",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16 relative">
      <div>
        <p className="md:text-[120px] xl:text-[155px] text-gray-100 absolute top-0 left-10 font-bold">
          Management
        </p>
      </div>
      <div className="pt-10">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="grid md:grid-cols-[300px,1fr] gap-8 items-start space-y-10"
          >
            <motion.div
              className="relative top-7"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              <Image
                src={profile.image || "/placeholder.svg"}
                alt={profile.name}
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: 0.2, // Delay for content to come in slightly after image
              }}
            >
              <h2 className="text-4xl font-bold text-primary_color">
                {profile.name}
              </h2>
              <h3 className="text-xl text-gray-700">{profile.title}</h3>
              <div className="py-3">
                <div className="border border-b-1 border-gray-300 w-16"></div>
              </div>
              <div className="space-y-4 text-gray-600">
                {profile.description.map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
