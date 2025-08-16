"use client";
import {
  FaDownload,
  FaMicroscope,
  FaLeaf,
  FaIndustry,
  FaFlask,
} from "react-icons/fa";

const technicalSpecs = [
  { parameter: "Dilution Gas", details: "Nitrogen or Air" },
  { parameter: "Pressure Range", details: "0.15–0.6 MPa" },
  { parameter: "Flow Rates", details: "0.2–10 L/min (±3.7%)" },
  { parameter: "Temperature Control", details: "Room temp +5 ºC to 50 ºC" },
  { parameter: "Dimensions (W×D×H)", details: "~250 × 340 × 315 mm" },
  { parameter: "Weight", details: "~14 kg" },
  { parameter: "Compliance", details: "IEC Low Voltage, EMC Industrial, RoHS" },
  {
    parameter: "Included Accessories",
    details: "Tubing, filters, power cable, tube cage, funnel, spanner",
  },
];

const excels = [
  {
    icon: <FaMicroscope className="text-[40px] text-[#0F2E53]" />,
    text: "Calibration of gas detectors and analyzers in laboratories.",
  },
  {
    icon: <FaLeaf className="text-[40px] text-[#0F2E53]" />,
    text: "Environmental monitoring station equipment checks.",
  },
  {
    icon: <FaIndustry className="text-[40px] text-[#0F2E53]" />,
    text: "Industrial safety system validation.",
  },
  {
    icon: <FaFlask className="text-[40px] text-[#0F2E53]" />,
    text: "Research and development testing for precision instrumentation.",
  },
];

export default function Datasheet() {
  return (
    <div className="px-4 lg:px-10 py-10 space-y-12">
      {/* Datasheet Button */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Technical Specifications
        </h2>
        <button className="flex items-center gap-2 px-5 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800 text-sm font-medium shadow-sm transition">
          Download Full Technical Datasheet
          <FaDownload className="text-gray-600" />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-[#0F2E53] rounded-lg shadow-sm border-collapse">
          <thead>
            <tr className="bg-[#0F2E53] text-white text-left">
              <th className="px-6 py-3 font-semibold border border-[#0F2E53] w-1/2">
                Parameter
              </th>
              <th className="px-6 py-3 font-semibold border border-[#0F2E53] w-1/2">
                Details
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {technicalSpecs.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-3 border border-[#0F2E53]">
                  {item.parameter}
                </td>
                <td className="px-6 py-3 border border-[#0F2E53]">
                  {item.details}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Where the PD-1C Excels */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Where the PD-1C Excels
          </h2>
          <button className="flex items-center gap-2 px-5 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800 text-sm font-medium shadow-sm transition">
            Inquire for Your Industry Application
            <FaDownload className="text-gray-600" />
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {excels.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white shadow rounded-xl flex flex-col items-start space-y-3 gap-9 "
            >
              {item.icon}
              <p className="text-[#0F2E53]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
