import AboutCarousel from "@/components/AboutUs/AboutCarousel";
import CommitmentSection from "@/components/AboutUs/CommitmentCustomers";
import CommitmentFellow from "@/components/AboutUs/CommitmentFellow";
import MissionVisionSection from "@/components/AboutUs/MissionVisionSection";
import CTASection from "@/components/HomePage/CTASection";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-primary_color h-[200px] flex justify-center items-center mb-5">
        <p className="font-bold text-4xl text-white">About Us</p>
      </div>
      <AboutCarousel />
      <MissionVisionSection />
      <CommitmentSection />
      <CommitmentFellow />
      <CTASection />
    </div>
  );
};

export default AboutUs;
