export default function StatsSection() {
  return (
    <div className="h-[300px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 text-center mb-10">
      {/* grid - 1 */}
      <div className="bg-[#8A2BE2] flex justify-center items-center flex-col p-4">
        <h1 className="text-4xl font-bold text-white mb-5">1998</h1>
        <div className="space-y-2">
          <div className="border border-b-white w-12"></div>
          <div className="border border-b-white w-6 mx-auto"></div>
          <div className="border border-b-white w-12"></div>
        </div>
        <p className="text-[20px] text-white mt-5">Established</p>
      </div>
      {/* grid - 2 */}
      <div className="bg-[#7A1FCA] flex justify-center items-center flex-col p-4">
        <h1 className="text-4xl font-bold text-white mb-5">16000</h1>
        <div className="space-y-2">
          <div className="border border-b-white w-12"></div>
          <div className="border border-b-white w-6 mx-auto"></div>
          <div className="border border-b-white w-12"></div>
        </div>
        <p className="text-[20px] text-white mt-5">Sqft. Factory Space</p>
      </div>
      {/* grid - 3 */}
      <div className="bg-[#6819A6] flex justify-center items-center flex-col p-4">
        <h1 className="text-4xl font-bold text-white mb-5">20,00,000</h1>
        <div className="space-y-2">
          <div className="border border-b-white w-12"></div>
          <div className="border border-b-white w-6 mx-auto"></div>
          <div className="border border-b-white w-12"></div>
        </div>
        <p className="text-[20px] text-white mt-5">Monthly Capacity</p>
      </div>
      {/* grid - 4 */}
      <div className="bg-[#4B0F73] flex justify-center items-center flex-col p-4">
        <h1 className="text-4xl font-bold text-white mb-5">120</h1>
        <div className="space-y-2">
          <div className="border border-b-white w-12"></div>
          <div className="border border-b-white w-6 mx-auto"></div>
          <div className="border border-b-white w-12"></div>
        </div>
        <p className="text-[20px] text-white mt-5">Employee</p>
      </div>
    </div>
  );
}
