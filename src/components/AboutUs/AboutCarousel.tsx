"use client";
import { motion } from "framer-motion"; // Importing motion for animations
import Image from "next/image";
import { useEffect, useState } from "react";
import { CardContent } from "../ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const AboutCarousel = () => {
  // Array of images
  const images = [
    {
      src: "/assets/images/aboutUs/image1.jpg",
      alt: "Higg Index",
    },
    {
      src: "/assets/images/aboutUs/image2.jpg",
      alt: "Social & Labor Convergence",
    },
    {
      src: "/assets/images/aboutUs/image3.jpg",
      alt: "Sedex",
    },
    {
      src: "/assets/images/aboutUs/image4.jpg",
      alt: "Amfori BSCI",
    },
    {
      src: "/assets/images/aboutUs/image5.jpg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/aboutUs/image6.jpg",
      alt: "GOTS",
    },
  ];

  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  // Autoplay functionality
  useEffect(() => {
    if (!carouselApi) return;

    const interval = setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0); // Go back to the start
      }
    }, 3000); // Autoplay interval in milliseconds (3 seconds)

    return () => {
      clearInterval(interval); // Cleanup interval on unmount
    };
  }, [carouselApi]);

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 my-10 py-10">
      {/* Content Section with Animation */}
      <motion.div
        className="space-y-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-4xl text-primary_color mb-5 mx-3 font-bold">
          JAF Washing
        </p>
        <div className="text-[#34343c] space-y-3 text-[20px] font-light mx-3">
          <p>
            JAF Washing is one of the most modern washing plants in Bangladesh,
            established in January 1998. It is situated at Road No: 21,
            Shyampur, Dhaka-1204. MD. Zohirul Islam Babu is our honorable
            Managing Director.
          </p>
          <p>
            Since we started our journey in 1998, we have been among the
            fastest-growing business conglomerates in Europe and the USA.
          </p>
          <p>
            This washing plant is set up with state-of-the-art machinery not
            only to cater to our internal requirements but also to meet the
            needs of outside customers. Additionally, our plant has undergone a
            large-scale expansion. The factory space covers 16000 square feet,
            including both the wash and dry process areas. The washing plant has
            a monthly capacity of 20,00,000 units for denim and twill. We employ
            120 individuals, and our yearly turnover is 3 million USD. Every
            year, we export 70% of our products to Europe and 30% to other
            countries. Our peak season is from March to August, and we have our
            own E.T.P. facilities.
          </p>
        </div>
      </motion.div>

      {/* Carousel Section with Animation */}
      <motion.div
        className="w-full relative flex items-center justify-center"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Carousel
          className="w-full flex items-center"
          opts={{
            align: "center",
          }}
          setApi={setCarouselApi}
        >
          <CarouselContent className="flex items-center">
            {images.map((item, index) => (
              <CarouselItem
                key={index}
                className="flex items-center justify-center"
              >
                <div className="p-1">
                  <CardContent className="flex items-center justify-center p-6">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      layout="responsive"
                      width={1920} // Ensures full width
                      height={1080} // Maintains aspect ratio
                      className="object-cover w-full h-full"
                    />
                  </CardContent>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-10 px-4 py-2 bg-white rounded shadow-md hover:bg-gray-200" />
          <CarouselNext className="absolute right-10 px-4 py-2 bg-white rounded shadow-md hover:bg-gray-200" />
        </Carousel>
      </motion.div>
    </div>
  );
};

export default AboutCarousel;
