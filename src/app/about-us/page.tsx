import AboutCarousel from "@/components/AboutUs/AboutCarousel";
import CommitmentSection from "@/components/AboutUs/CommitmentCustomers";
import CommitmentFellow from "@/components/AboutUs/CommitmentFellow";
import MissionVisionSection from "@/components/AboutUs/MissionVisionSection";

const AboutUs = () => {
  return (
    <div>
      <div className="h-[200px] flex justify-center items-center mb-5 gradient-violet">
        <p className="font-bold text-4xl text-white">About Us</p>
      </div>
      <AboutCarousel />
      <MissionVisionSection />
      <CommitmentSection />
      <CommitmentFellow />
    </div>
  );
};

export default AboutUs;
