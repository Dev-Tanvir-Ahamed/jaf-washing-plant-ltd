import Image from "next/image";
import dryProcess1 from "../../../public/assets/images/facilities/Dry-Process-1.jpg";
export default function DryProcess() {
  const processes = [
    "Whisker (Manual & Laser), Hand Sand Image & Full Body (Manual & Laser)",
    "Tagging, PP sponging, PP Spray (Only Image or Full Body)",
    "Resin Spray (Only Crinkle or 3D area or Full Body)",
    "Pigment Spray (Only Image), PP rubbing (Full body or Only Image)",
    "PP touch up (On top of whisker or Only Seam Area)",
    "Permanent crinkle (5 times wash) or Non-permanent crinkles",
    "Permanent 3D (5 times wash) or Non-permanent 3D",
    "Grinding & Destruction (Manual or Laser)",
    "Laser print (only image or Full Body)",
    "Rib & Repair, Leather Coating, Indigo blocking",
  ];

  return (
    <div className="container mx-auto p-6">
      {/* part - 1 */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left side - Process List */}
        <div>
          <h2 className="text-3xl font-bold text-green-600 mb-6">
            Dry Process
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

        {/* Right side - Image */}
        <div className="relative h-[600px] bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={dryProcess1}
            alt="Dry Process Facility"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/5"></div>
        </div>
      </div>
    </div>
  );
}
