import React from "react";
import CustomTable from "@/components/Comman/CustomTable";

interface GasDetectionData {
  tubeExample: string;
  gasMeasured: string;
  range: string;
  duration: string;
}

const PassiveTable = () => {
  const gasDetectionData: GasDetectionData[] = [
    {
      tubeExample: "1D / 1DL",
      gasMeasured: "Carbon Monoxide",
      range: "0.4–2000 ppm",
      duration: "Up to 24 hrs",
    },
    {
      tubeExample: "3D / 3DL",
      gasMeasured: "Ammonia",
      range: "0.1–1000 ppm",
      duration: "Up to 10 hrs",
    },
    {
      tubeExample: "5D / 5DH",
      gasMeasured: "Sulfur Dioxide",
      range: "0.2–600 ppm",
      duration: "Various durations",
    },
    {
      tubeExample: "91D",
      gasMeasured: "Formaldehyde",
      range: "0.1–20 ppm",
      duration: "1–10 hrs",
    },
  ];

  const columns = [
    { key: "tubeExample", header: "Tube Example" },
    { key: "gasMeasured", header: "Gas Measured" },
    { key: "range", header: "Range" },
    { key: "duration", header: "Duration" },
  ];

  return (
    <section className="py-25 bg-gray-50">
      <div className="container mx-auto px-10">
        <div className="flex md:justify-between gap-5 md:items-end md:flex-row flex-col">
          <h1 className="md:text-6xl text-3xl font-semibold">Product Range Overview</h1>
          <p>Choose the Right Tube for Your Monitoring Needs</p>
        </div>
        <CustomTable
          columns={columns}
          data={gasDetectionData}
          headerBgColor="bg-blue-900"
        />
      </div>
    </section>
  );
};

export default PassiveTable;
