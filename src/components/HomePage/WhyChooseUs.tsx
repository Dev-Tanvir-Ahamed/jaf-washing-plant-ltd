"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import manufacturing from "../../../public/assets/images/chooseUsIcon/manufacturing.png";
import production from "../../../public/assets/images/chooseUsIcon/production.png";
import saveTheWorld from "../../../public/assets/images/chooseUsIcon/save-the-world.png";
import solution from "../../../public/assets/images/chooseUsIcon/solution.png";
import teamManagement from "../../../public/assets/images/chooseUsIcon/team-management.png";
import training from "../../../public/assets/images/chooseUsIcon/training.png";

const cardData = [
  {
    id: 1,
    icon: manufacturing,
    title: "State-of-the-Art Facility",
    description:
      "At JAF Washing, we boast a state-of-the-art facility equipped with cutting-edge machinery. Our commitment to staying at the forefront of technology ensures that we deliver unmatched quality and efficiency in our washing processes.",
  },
  {
    id: 2,
    icon: production,
    title: "Extensive Capacity and Timely Delivery",
    description:
      "With our expanded large-scale plant, extensive factory space, and a monthly capacity of 800,000 units for denim and twill, we are well-equipped to handle your production demands with precision and efficiency.",
  },
  {
    id: 3,
    icon: saveTheWorld,
    title: "Quality Workforce and Industry Expertise",
    description:
      "We take pride in our dedicated workforce of 350 employees, who bring their skills and expertise to every project. Our team comprises industry professionals who are well-versed in the nuances of textile washing.",
  },
  {
    id: 4,
    icon: solution,
    title: "Your Unique Needs, Our Tailored Solutions",
    description:
      "We understand that every customer is unique. We take pride in our ability to understand and fulfill your specific requirements, ensuring that you receive customized solutions that meet and exceed your expectations.",
  },
  {
    id: 5,
    icon: teamManagement,
    title: "Safe and Secure Workplace",
    description:
      "At JAF Washing, we place a strong emphasis on providing a safe and secure workplace for our employees. We strictly adhere to industry standards and regulations to ensure the well-being and safety of our workforce.",
  },
  {
    id: 6,
    icon: training,
    title: "Environmentally Conscious Washing Solutions",
    description:
      "Environment is always at the top of our priority list. We are deeply committed to conserving the environment, which is reflected in our state-of-the-art production units and washing plants equipped with modern ETP facilities.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#EFF1F2]">
      <div className="max-w-7xl mx-auto px-4 py-16 ">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary_color mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg">
            Modern. Efficient. JAF Washing - Your washing solution
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <motion.div
              key={card.id}
              className="bg-white p-8 rounded-lg shadow-lg text-center group hover:bg-violet-600 transition-all duration-300"
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.8,
                rotate: -10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: 0,
              }} // More dynamic animations with scale and rotation
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.1, // Staggered delay for each card
              }}
            >
              <div className="flex justify-center mb-6">
                <Image
                  src={card.icon}
                  className="w-12 h-12 text-primary_color group-hover:text-white"
                  alt="img"
                />
              </div>
              <h3 className="text-2xl font-semibold text-primary_color mb-4 group-hover:text-white">
                {card.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white mb-6">
                {card.description}
              </p>
              <span className="hidden group-hover:inline-block text-white font-medium">
                More about us
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
