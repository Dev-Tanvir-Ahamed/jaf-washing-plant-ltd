import DryProcess from "@/components/facilities/DryProcess";
import WetProcess from "@/components/facilities/WetProcess";

const Faculties = () => {
  return (
    <div>
      <div
        className="h-[600px]  md:h-[400px] flex justify-center items-center flex-col mb-5 text-center"
        style={{
          background: "linear-gradient(to right, #146d2b 0%, #009426 100%)",
        }}
      >
        <p className="font-bold text-5xl text-white space-y-5 mb-5">
          Our Washing Facilities
        </p>
        <div className="max-w-4xl text-white font-light text-[18px]">
          <p className="mb-3">
            At J A F Washing Plant Ltd., we house state-of-the-art washing
            facilities equipped with advanced techniques to cater to a wide
            range of garment finishing requirements. Our expertise extends to
            both dry and wet processes, ensuring exceptional results for our
            clients.
          </p>
          <p>
            With our comprehensive range of washing facilities and expertise in
            various techniques, we ensure impeccable results and unmatched
            quality for our clients. Partner with us to bring your garment
            designs to life and achieve outstanding finishing effects.
          </p>
        </div>
      </div>
      <DryProcess />
      <WetProcess />
    </div>
  );
};

export default Faculties;
