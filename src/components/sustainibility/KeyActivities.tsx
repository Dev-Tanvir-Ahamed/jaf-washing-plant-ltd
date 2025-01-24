import Image from "next/image";
import keyActivities from "../../../public/assets/images/key-activities.png";
const KeyActivities = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 px-5 xl:px-0">
      <div className="grid  xl:grid-cols-2">
        {/* content */}
        <div className="font-light space-y-3 text-[20px]">
          <p className="font-semibold text-[26px] text-primary_color mb-3">
            Commitment to Our Community and Environment
          </p>
          <p>
            We are actively involved in CSR activities that aim to enhance the
            lifestyle and conditions of both our own employees and the wider
            community. By engaging in various social initiatives, we strive to
            make a positive impact on the lives of individuals within and
            outside our organization.
          </p>
          <p>
            Environment is always at the priority list of Al-Madina Washing
            Plant Ltd. Our firm commitment in conserving the environment
            reflected in our state-of-art production units, washing plants with
            modern ETP plants. Efforts are made to control Waste and use of
            natural resources as Water, Gas, and Energy. We also emphasize on
            disposal and proper re-utilization of Industrial Wastes.
          </p>
        </div>
        {/* image */}
        <div>
          <Image
            src={keyActivities}
            alt="keyAcactivities"
            width={800}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default KeyActivities;
