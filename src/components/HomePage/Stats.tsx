export default function StatsSection() {
  return (
    <div className="h-[300px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 text-center mb-10">
      {/* grid - 1 */}
      <div className="bg-[#03BF34] flex justify-center items-center flex-col p-4">
        <h1 className="text-4xl font-bold text-white mb-5">2013</h1>
        <div className="space-y-2">
          <div className="border border-b-white w-12"></div>
          <div className="border border-b-white w-6 mx-auto"></div>
          <div className="border border-b-white w-12"></div>
        </div>
        <p className="text-[20px] text-white mt-5">Established</p>
      </div>
      {/* grid - 2 */}
      <div className="bg-[#08B435] flex justify-center items-center flex-col p-4">
        <h1 className="text-4xl font-bold text-white mb-5">21329</h1>
        <div className="space-y-2">
          <div className="border border-b-white w-12"></div>
          <div className="border border-b-white w-6 mx-auto"></div>
          <div className="border border-b-white w-12"></div>
        </div>
        <p className="text-[20px] text-white mt-5">Sqft. Factory Space</p>
      </div>
      {/* grid - 3 */}
      <div className="bg-[#09952E] flex justify-center items-center flex-col p-4">
        <h1 className="text-4xl font-bold text-white mb-5">800000</h1>
        <div className="space-y-2">
          <div className="border border-b-white w-12"></div>
          <div className="border border-b-white w-6 mx-auto"></div>
          <div className="border border-b-white w-12"></div>
        </div>
        <p className="text-[20px] text-white mt-5">Monthly Capacity</p>
      </div>
      {/* grid - 4 */}
      <div className="bg-[#047822] flex justify-center items-center flex-col p-4">
        <h1 className="text-4xl font-bold text-white mb-5">350</h1>
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
