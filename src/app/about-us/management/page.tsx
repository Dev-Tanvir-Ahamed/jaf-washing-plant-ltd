import Management from "@/components/HomePage/Management";

const page = () => {
  return (
    <>
      <div
        className="h-[200px]  flex justify-center items-center flex-col mb-5 text-center"
        style={{
          background: "linear-gradient(to right, #146d2b 0%, #009426 100%)",
        }}
      >
        <p className="font-bold text-5xl text-white space-y-5 mb-5">
          Management
        </p>
      </div>
      <Management />
    </>
  );
};

export default page;
