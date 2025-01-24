"use client";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../../../../public/assets/images/logo.jpg";
const Page = () => {
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
  ];

  const productionData = [
    { label: "Year of Establishment", value: "2013" },
    { label: "Area", value: "21,329.18 Sq Ft" },
    { label: "Number of Employees", value: "350" },
    {
      label: "Monthly Capacity",
      value: "8,00,000 PCS ( Denim + Over dye + Acid wash + Twill )",
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
    <div className="">
      <div
        className="h-[200px]  flex justify-center items-center flex-col mb-5 text-center "
        style={{
          background: "linear-gradient(to right, #146d2b 0%, #009426 100%)",
        }}
      >
        <p className="font-bold text-5xl text-white space-y-5 mb-5">
          Factory Profile
        </p>
      </div>
      {/* grid content -1 */}
      <div className="bg-[#F9F9F9]">
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 items-center my-20 max-w-7xl mx-auto ">
          <div className="mb-5 md:mb-0">
            <Image src={logo} alt="logo" width={250} height={250} />
          </div>
          <div className="space-y-3 px-3 md:px-0">
            <p className="text-4xl text-primary_color font-bold">
              Business Information
            </p>
            <p className="font-light text-[18px]">
              Established in January 2013, Al-Madina Washing Plant Ltd. boasts a
              single, efficient washing unit under the ownership of Mehedi
              Hasan. Since our inception, we have dedicated ourselves to
              delivering top-notch washing services and have grown to become a
              leading player in the washing industry. With our focus on quality,
              sustainability, and customer satisfaction, we continue to pave the
              way for excellence in the textile washing.
            </p>
            <p className="font-bold text-lg">Production Capacity</p>
            <p className="text-sm font-semibold text-gray-700">
              Monthly Capacity : 8,00,000 PCS ( Denim +Over dye +Acid wash +
              Twill)
            </p>
          </div>
        </div>
      </div>
      {/* grid content - 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-5">
        {/* Carousel */}
        <div className="w-full relative">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
            }}
            setApi={setCarouselApi}
          >
            <CarouselContent>
              {images.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <CardContent className="flex items-center justify-center p-6">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={600} // Ensures full width
                        height={500} // Maintains aspect ratio
                        className="object-center h-[500px]"
                      />
                    </CardContent>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className="aboslute left-10 md:left-20 px-4 py-2 bg-white rounded shadow-md hover:bg-gray-200" />
            <CarouselNext className="aboslute right-10 md:right-20 px-4 py-2 bg-white rounded shadow-md hover:bg-gray-200" /> */}
          </Carousel>
        </div>
        {/* content */}
        <div className="mt-10">
          <p className="text-4xl text-primary_color mb-5 text-center md:text-left">
            Production Unit
          </p>
          <ul className="space-y-3 text-lg pl-3 md:pl-0">
            {productionData.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-green-600 mr-2">
                  <ChevronRight />{" "}
                </span>
                <div className="flex font-light text-[18px]">
                  <p className="mr-1">{item.label}:</p> <p>{item.value}</p>
                </div>
              </li>
            ))}
          </ul>
          {/* download btn */}
          <div className="mt-8 text-center md:text-left pb-10 md:pb-0">
            <Link
              href="https://almadinawashing.com/wp-content/uploads/2024/08/Factory-Profile-of-Al-madina-Washing-Plant.pdf"
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow-md hover:bg-[#0a2759] transition-all ease-in-out"
            >
              📄 Download company profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
