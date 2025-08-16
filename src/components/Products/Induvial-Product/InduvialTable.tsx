import Image from "next/image";

export default function InduvialTable() {
  const tubeData = [
    {
      tubeType: "Standard Detector Tubes",
      gasesDetected: "CO, CO₂, SO₂, H₂S, NH₃, Cl₂",
      measurementRange: "Low to high ppm/vol%",
      samplingTime: "30 sec – 5 min",
      modelExamples: "GHS-501FT, GV-100, GV-110",
    },
    {
      tubeType: "Short-Term Detector Tubes",
      gasesDetected: "H₂, O₂, NO₂, CH₄",
      measurementRange: "Specific ppm levels",
      samplingTime: "15 sec – 2 min",
      modelExamples: "GHS-102, GHS-105",
    },
    {
      tubeType: "Specialized Tubes",
      gasesDetected: "Organic vapors, halogenated gases",
      measurementRange: "Variable ppm levels",
      samplingTime: "1 – 5 min",
      modelExamples: "TG-1, TG-2",
    },
    {
      tubeType: "Long-Term Sampling Tubes",
      gasesDetected: "VOCs, Benzene, Toluene",
      measurementRange: "8 hrs – 24 hrs",
      samplingTime: "Long exposure",
      modelExamples: "LT-01, LT-02",
    },
  ];

  return (
    <section className=" bg-white">
      <div className=" mx-auto px-10 pb-8">
        {/* Background Image */}
        <div className="relative mb-10">
          <Image
            src="/images/Gastec3/gas-detection-specialized-sampling-kits/GV_100S.jpg"
            alt="Product Range Background"
            width={1000}
            height={100}
            className="w-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
        </div>

        {/* Content */}
    <div className="flex flex-col gap-10 mb-6">
  <div className="flex flex-col md:flex-row md:justify-between md:items-center items-center gap-6">
    <h2 className="font-poppins font-medium text-3xl md:text-4xl lg:text-5xl text-black leading-snug md:leading-relaxed mb-4 md:mb-0 md:w-1/2">
      GASTEC Detector Tube Product Range
    </h2>
    <p className="font-poppins font-normal text-base md:text-lg lg:text-xl text-black leading-relaxed md:w-1/2">
      GASTEC offers a complete line of detector tubes to measure over
      600 gases and vapors with accuracy and ease. Below is an overview
      of our most popular tube categories.
    </p>
  </div>
</div>

        <div className="overflow-x-auto">
          <table className="w-full border-2 border-[#0F2E53] text-left">
            <thead>
              <tr className="bg-[#0F2E53] text-white">
                <th className="p-3 border border-[#0F2E53]">Tube Type</th>
                <th className="p-3 border border-[#0F2E53]">Common Gases Detected</th>
                <th className="p-3 border border-[#0F2E53]">Measurement Range</th>
                <th className="p-3 border border-[#0F2E53]">Sampling Time</th>
                <th className="p-3 border border-[#0F2E53]">Tube Model Examples</th>
              </tr>
            </thead>
            <tbody>
              {tubeData.map((row, i) => (
                <tr key={i} className="hover:bg-gray-100">
                  <td className="p-3 border border-[#0F2E53]">{row.tubeType}</td>
                  <td className="p-3 border border-[#0F2E53]">{row.gasesDetected}</td>
                  <td className="p-3 border border-[#0F2E53]">{row.measurementRange}</td>
                  <td className="p-3 border border-[#0F2E53]">{row.samplingTime}</td>
                  <td className="p-3 border border-[#0F2E53]">{row.modelExamples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
