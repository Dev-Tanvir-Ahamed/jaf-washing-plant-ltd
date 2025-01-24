"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

const ClientData = () => {
  const images = [
    {
      src: "/assets/images/ourClients/image1.jpeg",
      alt: "Higg Index",
    },
    {
      src: "/assets/images/ourClients/image2.png",
      alt: "Social & Labor Convergence",
    },
    {
      src: "/assets/images/ourClients/image3.png",
      alt: "Sedex",
    },
    {
      src: "/assets/images/ourClients/image4.png",
      alt: "Amfori BSCI",
    },
    {
      src: "/assets/images/ourClients/image5.jpeg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/ourClients/image6.jpeg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/ourClients/image7.jpeg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/ourClients/image8.jpeg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/ourClients/image9.jpeg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/ourClients/image10.jpeg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/ourClients/image11.jpeg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/ourClients/image12.jpeg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/ourClients/image13.jpeg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/ourClients/image14.jpeg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/ourClients/image15.png",
      alt: "GOTS",
    },
    {
      src: "/assets/images/ourClients/image16.jpeg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/ourClients/image17.jpeg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/ourClients/image18.jpeg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/ourClients/image19.jpeg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/ourClients/image20.jpeg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/ourClients/image21.jpeg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/ourClients/image22.jpeg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/ourClients/image23.jpeg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/ourClients/image24.jpeg",
      alt: "GOTS",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {images.map((image, index) => (
          <Card
            key={index}
            className="p-6 flex items-center justify-center transition-transform hover:scale-105"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
              />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ClientData;
