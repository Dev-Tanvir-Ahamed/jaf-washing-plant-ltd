import Image from "next/image";

const ProductGallery = () => {
  const galleryImage = [
    {
      src: "/assets/images/gallery/1.jpg",
      alt: "Higg Index",
    },
    {
      src: "/assets/images/gallery/2-1.jpg",
      alt: "Sedex",
    },
    {
      src: "/assets/images/gallery/3.jpg",
      alt: "Amfori BSCI",
    },
    {
      src: "/assets/images/gallery/4.jpg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/gallery/5.jpg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/gallery/6.jpg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/gallery/7.jpg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/gallery/8.jpg",
      alt: "GOTS",
    },
  ];
  return (
    <div className="my-10">
      {galleryImage.map((img, index) => {
        return (
          <div key={index} className="max-w-6xl mx-auto px-5 xl:px-0">
            <Image
              src={img.src || "/placeholder.svg"}
              alt={img.alt}
              width={1200} // Set the width based on the actual image dimensions
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductGallery;
