'use client'

import React from 'react';
import HeroSection from './HeroSection';
import ReusableTable from './table';
import CTA from './CTA';

const DetectionTuble: React.FC = () => {
  // Detection tube data matching the table structure in the image
  const detectionTubeData = [
    {
      chemical: 'Nitric Acid',
      range: '2.5-200 ppm',
      tubeName: 'NO + NO₂ (Separate Quantification)',
      partNo: '10',
      qtyBox: '2×5',
      type: 'Short Term Tube',
      category: 'Short-term Measurement'
    },
    {
      chemical: 'Nitrogen Dioxide',
      range: '2.5-200 ppm',
      tubeName: 'NO + NO₂ (Separate Quantification)',
      partNo: '10',
      qtyBox: '2×5',
      type: 'Short Term Tube',
      category: 'Short-term Measurement'
    },
    {
      chemical: 'Nitrogen Oxide',
      range: '2.5-200 ppm',
      tubeName: 'NO + NO₂ (Separate Quantification)',
      partNo: '10',
      qtyBox: '2×5',
      type: 'Short Term Tube',
      category: 'Short-term Measurement'
    },
    {
      chemical: 'Xylene',
      range: '0.1-1.2%',
      tubeName: 'LP-Gas (LPG)',
      partNo: '100A',
      qtyBox: '10',
      type: 'Short Term Tube',
      category: 'Short-term Measurement'
    },
    {
      chemical: 'Propylene',
      range: '0.02-0.8%',
      tubeName: 'LP-Gas (LPG)',
      partNo: '100A',
      qtyBox: '10',
      type: 'Injection Tube',
      category: 'Injection type'
    },
    {
      chemical: 'LP-Gas (LPG)',
      range: '0.02-0.8%',
      tubeName: 'LP-Gas (LPG)',
      partNo: '100A',
      qtyBox: '10',
      type: 'Short Term Tube',
      category: 'Short-term Measurement'
    },
    {
      chemical: 'Propane',
      range: '0.1-2%',
      tubeName: 'Propane - Injection Detector Tube',
      partNo: '100B',
      qtyBox: '10',
      type: 'Short Term Tube',
      category: 'Short-term Measurement'
    },
    {
      chemical: 'Octane',
      range: '0.036-0.72%',
      tubeName: 'Gasoline',
      partNo: '101',
      qtyBox: '10',
      type: 'Short Term Tube',
      category: 'Short-term Measurement'
    },
    {
      chemical: 'Gasoline',
      range: '0.015-1.2%',
      tubeName: 'Gasoline',
      partNo: '101',
      qtyBox: '10',
      type: 'Short Term Tube',
      category: 'Short-term Measurement'
    },
    // Additional mock data to test pagination
    {
      chemical: 'Ammonia',
      range: '0.25-5 ppm',
      tubeName: 'Ammonia Detection Tube',
      partNo: '3L',
      qtyBox: '10',
      type: 'Short Term Tube',
      category: 'Short-term Measurement'
    },
    {
      chemical: 'Carbon Monoxide',
      range: '1-300 ppm',
      tubeName: 'Carbon Monoxide',
      partNo: '1LC',
      qtyBox: '10',
      type: 'Short Term Tube',
      category: 'Short-term Measurement'
    },
    {
      chemical: 'Hydrogen Sulfide',
      range: '0.1-120 ppm',
      tubeName: 'Hydrogen Sulfide',
      partNo: '4LK',
      qtyBox: '10',
      type: 'Short Term Tube',
      category: 'Short-term Measurement'
    },
    {
      chemical: 'Benzene',
      range: '0.5-120 ppm',
      tubeName: 'Benzene',
      partNo: '122',
      qtyBox: '10',
      type: 'Short Term Tube',
      category: 'Short-term Measurement'
    },
    {
      chemical: 'Toluene',
      range: '1-300 ppm',
      tubeName: 'Toluene',
      partNo: '124',
      qtyBox: '10',
      type: 'Short Term Tube',
      category: 'Short-term Measurement'
    },
    {
      chemical: 'Acetone',
      range: '5-1200 ppm',
      tubeName: 'Acetone',
      partNo: '151',
      qtyBox: '10',
      type: 'Short Term Tube',
      category: 'Short-term Measurement'
    }
  ];

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

