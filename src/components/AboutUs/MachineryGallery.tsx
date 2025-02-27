"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Sample gallery images - replace with your actual images
const galleryImages = [
  {
    src: "/assets/images/machineryGallery/1.jpg",
    width: 600,
    height: 400,
    alt: "Industrial machinery 1",
  },
  {
    src: "/assets/images/machineryGallery/2.jpg",
    width: 600,
    height: 400,
    alt: "Industrial machinery 2",
  },
  {
    src: "/assets/images/machineryGallery/3.jpg",
    width: 600,
    height: 400,
    alt: "Industrial machinery 1",
  },
  {
    src: "/assets/images/machineryGallery/4.jpg",
    width: 600,
    height: 400,
    alt: "Industrial machinery 2",
  },
  {
    src: "/assets/images/machineryGallery/5.jpg",
    width: 600,
    height: 400,
    alt: "Industrial machinery 1",
  },
  {
    src: "/assets/images/machineryGallery/6.jpg",
    width: 600,
    height: 400,
    alt: "Industrial machinery 2",
  },
  {
    src: "/assets/images/machineryGallery/7.jpg",
    width: 600,
    height: 400,
    alt: "Industrial machinery 1",
  },
  {
    src: "/assets/images/machineryGallery/8.jpg",
    width: 600,
    height: 400,
    alt: "Industrial machinery 2",
  },
  {
    src: "/assets/images/machineryGallery/9.jpg",
    width: 600,
    height: 400,
    alt: "Industrial machinery 2",
  },
  {
    src: "/assets/images/machineryGallery/10.jpg",
    width: 600,
    height: 400,
    alt: "Industrial machinery 2",
  },
  {
    src: "/assets/images/machineryGallery/11.jpg",
    width: 600,
    height: 400,
    alt: "Industrial machinery 2",
  },
  // Add more images as needed
];

export default function MachineryGallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setIndex(idx)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        index={index}
        slides={galleryImages}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
}
