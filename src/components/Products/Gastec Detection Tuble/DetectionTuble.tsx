'use client'

import React from 'react';
import HeroSection from './HeroSection';
import ReusableTable from './table';
import CTA from './CTA';
import gastecData from '../../../data/products/gastec.json';

interface GastecItem {
  tubeId: string;
  name: string;
  category: string;
}

interface DetectionTubeItem {
  chemical: string;
  range: string;
  tubeName: string;
  partNo: string;
  qtyBox: string;
  type: string;
  category: string;
  [key: string]: string;
}

const DetectionTuble: React.FC = () => {
  // Function to generate mock range based on chemical type
  const generateRange = (chemical: string): string => {
    const ranges = {
      'Carbon monoxide': '1-300 ppm',
      'Carbon dioxide': '0.01-5%',
      'Ammonia': '0.25-5 ppm',
      'Hydrogen sulphide': '0.1-120 ppm',
      'Sulphur dioxide': '0.2-20 ppm',
      'Water vapour': '2-100 mg/L',
      'Phosphine': '0.05-20 ppm',
      'Chlorine': '0.1-20 ppm',
      'Nitrogen dioxide': '0.5-20 ppm',
      'NO & NO2(Separate quantification)': '2.5-200 ppm',
      'Nitrogen oxides': '0.5-100 ppm',
      'Hydrogen cyanide': '2-200 ppm',
      'Carbon disulphide': '0.1-30 ppm',
      'Hydrogen chloride': '0.2-100 ppm',
      'Nitric acid': '0.5-50 ppm',
      'Phosgene': '0.02-2 ppm',
      'Hydrogen fluoride': '0.2-20 ppm',
      'Ozone': '0.05-7 ppm',
      'Arsine': '0.005-0.5 ppm',
      'Carbonyl sulphide': '0.1-30 ppm',
      'Diborane': '0.1-10 ppm',
      'Chlorine dioxide': '0.1-10 ppm',
      'Hydrogen': '0.1-7%',
      'Oxygen': '2-25%',
      'Hydrogen peroxide': '0.1-100 ppm',
      'Sulphuric acid': '0.1-5 mg/m³',
      'Mercury vapour': '0.025-25 mg/m³',
      'LPG': '0.02-0.8%',
      'Propane': '0.1-2%',
      'Gasoline': '0.015-1.2%',
      'Hexane': '20-4000 ppm',
      'Butane': '100-8000 ppm',
      'Methanol': '50-8000 ppm',
      'Ethanol': '100-5000 ppm',
      'Isopropyl alcohol': '50-4000 ppm',
      'Benzene': '0.5-120 ppm',
      'Toluene': '1-300 ppm',
      'Xylene': '2-800 ppm',
      'Styrene': '2-400 ppm',
      'Acetone': '5-1200 ppm',
      'Formaldehyde': '0.1-5 ppm'
    };
    return ranges[chemical as keyof typeof ranges] || '1-100 ppm';
  };

  // Function to generate tube name based on chemical
  const generateTubeName = (chemical: string): string => {
    const tubeNames = {
      'Carbon monoxide': 'Carbon Monoxide Detection Tube',
      'Carbon dioxide': 'Carbon Dioxide Detection Tube',
      'Ammonia': 'Ammonia Detection Tube',
      'Hydrogen sulphide': 'Hydrogen Sulfide Detection Tube',
      'Sulphur dioxide': 'Sulfur Dioxide Detection Tube',
      'Water vapour': 'Water Vapor Detection Tube',
      'Phosphine': 'Phosphine Detection Tube',
      'Chlorine': 'Chlorine Detection Tube',
      'Nitrogen dioxide': 'Nitrogen Dioxide Detection Tube',
      'NO & NO2(Separate quantification)': 'NO + NO₂ (Separate Quantification)',
      'Nitrogen oxides': 'Nitrogen Oxides Detection Tube',
      'Hydrogen cyanide': 'Hydrogen Cyanide Detection Tube',
      'Carbon disulphide': 'Carbon Disulfide Detection Tube',
      'Hydrogen chloride': 'Hydrogen Chloride Detection Tube',
      'Nitric acid': 'Nitric Acid Detection Tube',
      'Phosgene': 'Phosgene Detection Tube',
      'Hydrogen fluoride': 'Hydrogen Fluoride Detection Tube',
      'Ozone': 'Ozone Detection Tube',
      'Arsine': 'Arsine Detection Tube',
      'Carbonyl sulphide': 'Carbonyl Sulfide Detection Tube',
      'Diborane': 'Diborane Detection Tube',
      'Chlorine dioxide': 'Chlorine Dioxide Detection Tube',
      'Hydrogen': 'Hydrogen Detection Tube',
      'Oxygen': 'Oxygen Detection Tube',
      'Hydrogen peroxide': 'Hydrogen Peroxide Detection Tube',
      'Sulphuric acid': 'Sulfuric Acid Detection Tube',
      'Mercury vapour': 'Mercury Vapor Detection Tube',
      'LPG': 'LP-Gas (LPG)',
      'Propane': 'Propane - Injection Detector Tube',
      'Gasoline': 'Gasoline',
      'Hexane': 'Hexane Detection Tube',
      'Butane': 'Butane Detection Tube',
      'Methanol': 'Methanol Detection Tube',
      'Ethanol': 'Ethanol Detection Tube',
      'Isopropyl alcohol': 'Isopropyl Alcohol Detection Tube',
      'Benzene': 'Benzene Detection Tube',
      'Toluene': 'Toluene Detection Tube',
      'Xylene': 'Xylene Detection Tube',
      'Styrene': 'Styrene Detection Tube',
      'Acetone': 'Acetone Detection Tube',
      'Formaldehyde': 'Formaldehyde Detection Tube'
    };
    return tubeNames[chemical as keyof typeof tubeNames] || `${chemical} Detection Tube`;
  };

  // Function to simplify category to type
  const simplifyType = (category: string): string => {
    if (category.includes('Short-term')) return 'Short Term Tube';
    if (category.includes('Long-term')) return 'Long Term Tube';
    if (category.includes('Injection')) return 'Injection Tube';
    if (category.includes('Airtec')) return 'Airtec Tube';
    if (category.includes('PYROTEC')) return 'Pyrotec Tube';
    if (category.includes('Polytec')) return 'Polytec Tube';
    if (category.includes('Automatic')) return 'Automatic Pump Tube';
    if (category.includes('solution')) return 'Solution Tube';
    return 'Detection Tube';
  };

  // Function to generate quantity per box based on type
  const generateQtyBox = (type: string): string => {
    if (type === 'Short Term Tube') return '10';
    if (type === 'Long Term Tube') return '5';
    if (type === 'Injection Tube') return '10';
    if (type === 'Airtec Tube') return '10';
    if (type === 'Pyrotec Tube') return '10';
    if (type === 'Polytec Tube') return '10';
    if (type === 'Automatic Pump Tube') return '20';
    if (type === 'Solution Tube') return '10';
    return '10';
  };

  // Function to categorize for filtering
  const categorizeForFiltering = (category: string): string => {
    if (category.includes('Short-term')) return 'Short-term Measurement';
    if (category.includes('Long-term')) return 'Long-term Measurement';
    if (category.includes('Injection')) return 'Injection type';
    if (category.includes('Airtec')) return 'Airtec';
    if (category.includes('PYROTEC')) return 'Pyrotec';
    if (category.includes('Polytec')) return 'Polytec';
    if (category.includes('Automatic')) return 'Automatic Pump';
    if (category.includes('solution')) return 'Solution Analysis';
    return 'Other';
  };

  // Transform gastec data to detection tube format
  const detectionTubeData: DetectionTubeItem[] = (gastecData as GastecItem[]).map((item) => {
    const type = simplifyType(item.category);
    return {
      chemical: item.name,
      range: generateRange(item.name),
      tubeName: generateTubeName(item.name),
      partNo: item.tubeId,
      qtyBox: generateQtyBox(type),
      type: type,
      category: categorizeForFiltering(item.category)
    };
  });

  // Define columns matching the image structure
  const columns = [
    { key: 'chemical', header: 'Chemical' },
    { key: 'range', header: 'Range' },
    { key: 'tubeName', header: 'Tube Name' },
    { key: 'partNo', header: 'Part No.' },
    { key: 'qtyBox', header: 'Qty/Box' },
    { key: 'type', header: 'Type' }
  ];

  // Define search fields for the table
  const searchFields = ['chemical', 'tubeName', 'partNo', 'type'];

  return (
    <section className="space-y-8">
      <HeroSection />
      <ReusableTable
        data={detectionTubeData}
        columns={columns}
        searchFields={searchFields}
        categoryField="category"
        initialSearchBy="chemical"
      />
      <CTA />
    </section>
  );
};

export default DetectionTuble;

