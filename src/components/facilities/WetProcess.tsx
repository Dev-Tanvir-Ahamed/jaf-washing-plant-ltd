import Image from "next/image";
import wetProcess from "../../../public/assets/images/facilities/Wash-Section2.jpg";
export default function WetProcess() {
  const processes = [
    "Rinse / Garments / Silicon wash",
    "Rubber ball wash, Enzyme wash, Stone enzyme wash",
    "Bleach wash, Acid wash, and Towel bleach",
    "Tie Wash, Snow wash",
    "Dip bleach, Resin dipping, Garments. Dye, over dye",
    "Florescent Pigment dye, Sulphur dye, Weave dye",
    "Tie dye and Cool dye",
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left side - Image */}
        <div className="relative h-[600px] bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={wetProcess}
            alt="Wet Process Facility"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/5"></div>
        </div>

        {/* Right side - Process List */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl font-bold text-green-600 mb-6">
            Wet Process
          </h2>
          <ul className="space-y-4">
            {processes.map((process, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-green-600 mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-800 font-light text-lg">
                  {process}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
