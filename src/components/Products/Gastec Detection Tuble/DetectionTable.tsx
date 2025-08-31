import React from "react";
import HeroSection from "./HeroSection";
import DetectionProductTable from "./DetectionProductTable";
import { DetectionDataProvider } from "@/context/DetectionDataContext";
import DetectionContactForm from "../Gastec/GastecProduct/DetectionContactForm";

const DetectionTable = () => {
  return (
    <div>
      <HeroSection />
      <DetectionDataProvider>
        <DetectionProductTable />
        <DetectionContactForm
          className="bg-[#00897B] md:mx-10 mx-5" 
          btnClassName="text-[#00897B]"
        />
      </DetectionDataProvider>``
    </div>
  );
};

export default DetectionTable;
