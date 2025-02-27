"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// const galleryImage = [
//   {
//     src: "/assets/images/gallery/1.jpg",
//     alt: "Higg Index",
//   },
//   {
//     src: "/assets/images/gallery/2.jpg",
//     alt: "Sedex",
//   },
//   {
//     src: "/assets/images/gallery/3.jpg",
//     alt: "Amfori BSCI",
//   },
//   {
//     src: "/assets/images/gallery/4.jpg",
//     alt: "GOTS",
//   },
//   {
//     src: "/assets/images/gallery/5.jpg",
//     alt: "GOTS",
//   },
//   {
//     src: "/assets/images/gallery/6.jpg",
//     alt: "GOTS",
//   },
//   {
//     src: "/assets/images/gallery/7.jpg",
//     alt: "GOTS",
//   },
//   {
//     src: "/assets/images/gallery/8.jpg",
//     alt: "GOTS",
//   },
//   {
//     src: "/assets/images/gallery/9.jpg",
//     alt: "GOTS",
//   },
//   {
//     src: "/assets/images/gallery/10.jpg",
//     alt: "GOTS",
//   },
// ];

const galleryImage = Array.from({ length: 32 }, (_, index) => ({
  src: `/assets/images/gallery/${index + 1}.jpg`,
  alt: `Gallery Image ${index + 1}`,
}));

export default function ProductGallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImage.map((image, idx) => (
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
        slides={galleryImage}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
}
