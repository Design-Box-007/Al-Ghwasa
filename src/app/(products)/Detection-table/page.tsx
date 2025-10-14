import DetectionTable from "@/components/Products/Gastec Detection Tuble/DetectionTable";
import { detectionTable } from "@/lib/metadata";
// import DetectionTuble from '@/components/Products/Gastec Detection Tuble/DetectionTuble';
import React from "react";

export const metadata = detectionTable;

const Page = () => {
  return (
    <DetectionTable />
    // <DetectionTuble/>
  );
};

export default Page;
