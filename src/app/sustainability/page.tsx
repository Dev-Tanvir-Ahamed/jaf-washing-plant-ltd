import KeyActivities from "@/components/sustainibility/KeyActivities";

const Sustainability = () => {
  return (
    <>
      <div
        className="h-[700px] md:h-[500px] flex justify-center items-center flex-col mb-5 text-center"
        style={{
          background: "linear-gradient(to right, #146d2b 0%, #009426 100%)",
        }}
      >
        <p className="font-bold text-[40px] text-white space-y-5 mb-5">
          Sustainability
        </p>
        <div className="max-w-4xl text-white font-light text-[18px] space-y-3">
          <p className="mb-3">
            JAF Washing Plant Ltd., we are deeply committed to sustainability
            and environmental responsibility. We recognize the importance of
            protecting our planet and minimizing our ecological footprint. With
            this in mind, we have implemented various initiatives to promote
            sustainable practices throughout our operations.
          </p>
          <p>
            From utilizing state-of-the-art machinery with energy-efficient
            features to implementing water conservation measures, we strive to
            minimize resource consumption and waste generation. Our advanced
            Effluent Treatment Plant (ETP) ensures the proper treatment and
            disposal of wastewater, meeting stringent environmental standards.
          </p>
        </div>
      </div>
      <KeyActivities />
    </>
  );
};

export default Sustainability;
