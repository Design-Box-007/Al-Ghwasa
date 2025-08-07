import React from 'react';
import CustomTable from '@/components/Comman/CustomTable';

interface GasDetectionData {
  gasType: string;
  detectorTubeModel: string;
  detectionRange: string;
  industryApplication: string;
}

const TableSection = () => {
  const gasDetectionData: GasDetectionData[] = [
    {
      gasType: "Ammonia (NH3)",
      detectorTubeModel: "Gastec No. 3LA",
      detectionRange: "0.5 - 20 ppm",
      industryApplication: "Chemical, Agriculture"
    },
    {
      gasType: "Carbon Monoxide (CO)",
      detectorTubeModel: "Gastec No. 1",
      detectionRange: "5 - 2000 ppm",
      industryApplication: "Industrial Safety"
    },
    {
      gasType: "Hydrogen Sulfide (H2S)",
      detectorTubeModel: "Gastec No. 4H",
      detectionRange: "0.2 - 120 ppm",
      industryApplication: "Oil & Gas"
    },
    {
      gasType: "Oxygen (O2)",
      detectorTubeModel: "Gastec No. 31B",
      detectionRange: "5 - 25%",
      industryApplication: "Confined Spaces"
    }
  ];

  const columns = [
    {
      key: 'gasType',
      header: 'Gas Type'
    },
    {
      key: 'detectorTubeModel',
      header: 'Detector Tube Model'
    },
    {
      key: 'detectionRange',
      header: 'Detection Range'
    },
    {
      key: 'industryApplication',
      header: 'Industry Application'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <CustomTable
          columns={columns}
          data={gasDetectionData}
          headerBgColor="bg-blue-900"
        />
      </div>
    </section>
  );
};

export default TableSection;
