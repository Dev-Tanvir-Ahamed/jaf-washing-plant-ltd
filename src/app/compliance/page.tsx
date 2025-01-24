import CertificationList from "@/components/complience/CertificationList";
import { CertificateCarousoul } from "@/components/HomePage/CertificateCarousoul";

const Compliance = () => {
  return (
    <>
      <div
        className="h-[500px]  md:h-[400px] flex justify-center items-center flex-col mb-5 text-center"
        style={{
          background: "linear-gradient(to right, #146d2b 0%, #009426 100%)",
        }}
      >
        <p className="font-bold text-5xl text-white space-y-5 mb-5">
          Compliance and Certification
        </p>
        <div className="max-w-4xl text-white font-light text-[18px]">
          <p className="mb-3">
            JAF Washing Plant Ltd. (JAFWPL), we take great pride in upholding
            high standards of compliance and achieving various certifications
            that validate our commitment to social and environmental
            responsibility. These certifications are a testament to our
            dedication to sustainable and ethical practices throughout our
            operations.
          </p>
        </div>
      </div>
      <CertificationList />
      <CertificateCarousoul />
    </>
  );
};

export default Compliance;
