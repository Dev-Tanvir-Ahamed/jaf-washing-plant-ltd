import MachineryGallery from "@/components/AboutUs/MachineryGallery";
import MachineryList from "@/components/AboutUs/MachineryList";

const ListOfMachinaries = () => {
  return (
    <>
      <div
        className="h-[1000px]  md:h-[500px] flex justify-center items-center flex-col mb-5 text-center px-5 md:px-0"
        style={{
          background: "linear-gradient(to right, #146d2b 0%, #009426 100%)",
        }}
      >
        <p className="font-bold text-[40px] text-white space-y-5 mb-5">
          List of Machineries
        </p>
        <div className="max-w-4xl text-white font-light text-[18px] space-y-3">
          <p className="mb-3">
            At Al-Madina Washing Plant Ltd., we take pride in our
            state-of-the-art machinery that enables us to deliver top-quality
            washing services. This page provides you with an insight into the
            advanced equipment and technologies we employ to meet our
            client&apos;s diverse needs. With a focus on efficiency, precision,
            and innovation, our machinery lineup plays a crucial role in
            ensuring optimal results and customer satisfaction.
          </p>
          <p>
            Explore our comprehensive list of machineries below to discover the
            cutting-edge equipment that powers our washing plant. From advanced
            washers and dryers to specialized systems designed for different
            fabric types, we are equipped with the latest tools to handle a wide
            range of textile washing requirements. With a strong emphasis on
            quality control and adherence to industry standards, we continuously
            invest in upgrading our machinery to stay at the forefront of the
            washing industry.
          </p>
        </div>
      </div>
      <MachineryList />
      <MachineryGallery />
    </>
  );
};

export default ListOfMachinaries;
