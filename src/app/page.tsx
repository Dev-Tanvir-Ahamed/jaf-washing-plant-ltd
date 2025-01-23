import { CertificateCarousoul } from "@/components/HomePage/CertificateCarousoul";
import CTASection from "@/components/HomePage/CTASection";
import HeroSection from "@/components/HomePage/HeroSection";
import Management from "@/components/HomePage/Management";
import { OurClients } from "@/components/HomePage/OurClients";
import Stats from "@/components/HomePage/Stats";
import WhoWeAre from "@/components/HomePage/WhoWeAre";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <WhyChooseUs />
      <Management />
      <CertificateCarousoul />
      <Stats />
      <OurClients />
      <CTASection />
    </>
  );
}
