'use client'

import React from 'react';
import HeroSection from './HeroSection';
import ReusableTable from './table';
import CTA from './CTA';
import gastecData from '../../../data/products/gastec-v2.json';

interface GastecItem {
  tubeId: string;
  name: string;
  category: string;
}

export interface TubeData {
  tube_no: string;
  tube_name: string;
  measuring_range: string;
  scale_range: string;
  no_test_per_box: string;
  tube_type: string;
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

const chemicalFormulas:{ [key: string]: string } = {
  "Acetaldehyde": "C2H4O",
  "Acetone": "C3H6O",
  "Methyl ethyl ketone": "C4H8O",
  "Formaldehyde": "CH2O",
  "Acetic acid": "C2H4O2",
  "Hydrogen cyanide": "HCN",
  "Nitro compounds": "R-NO2 (general nitro group)",
  "Acetylene": "C2H2",
  "Hydrocarbons (Lower class)": "general formula: CnH2n+2 (alkanes) / CnH2n (alkenes) — mixture",
  "Ethylene": "C2H4",
  "Acid gases": "general: e.g. HCl, SO2, CO2 (depends on gas)",
  "Acrolein": "C3H4O",
  "Hexane": "C6H14",
  "Acrylonitrile": "C3H3N",
  "Aliphatic hydrocarbons": "general formula: CnH2n+2 (alkanes) or CnH2n (alkenes)",
  "Gasoline": "mixture (complex hydrocarbon blend)",
  "Vinyl chloride": "C2H3Cl",
  "Methyl methacrylate": "C5H8O2",
  "Amines": "R-NH2 / R2-NH / R3-N (general)",
  "Ammonia": "NH3",
  "Amyl acetate": "C7H14O2",
  "Aniline": "C6H5NH2",
  "Aromatic hydrocarbons": "general formula: CnHn-6 (aromatic rings) — e.g. benzene C6H6",
  "Arsine": "AsH3",
  "Benzene": "C6H6",
  "Toluene": "C7H8",
  "Methyl bromide": "CH3Br",
  "Trichloroethylene": "C2HCl3",
  "Chloride ion": "Cl⁻",
  "Chlorine": "Cl2",
  "1,3-Butadiene": "C4H6",
  "Butane": "C4H10",
  "1-Butanol": "C4H10O",
  "2-Butanol": "C4H10O",
  "Butyl acetate": "C6H12O2",
  "Mercaptans": "R-SH (general thiol)",
  "Mercaptans (Mercury-free)": "R-SH (general thiol)",
  "tert-Butyl mercaptan": "C4H10S",
  "tert-Butyl mercaptan (Mercury-free)": "C4H10S",
  "TBM and DMS": "tert-butyl mercaptan (C4H10S) & dimethyl sulphide (C2H6S)",
  "Carbon dioxide": "CO2",
  "Carbon disulphide": "CS2",
  "Carbon monoxide": "CO",
  "Carbon monoxide (in Hydrogen)": "CO (mixture with H2)",
  "Carbon monoxide (in Hydrogen with Hydrocarbons)": "CO (mixture with H2 and hydrocarbons)",
  "Carbon tetrachloride": "CCl4",
  "Carbonyl sulphide": "COS",
  "Chlorine dioxide": "ClO2",
  "Chlorobenzene": "C6H5Cl",
  "1,1,1-Trichloroethane(Methyl chloroform)": "C2H3Cl3",
  "Fluorochlorocarbons": "general: CxHyClzFw (various)",
  "Chloroform": "CHCl3",
  "Chloropicrin": "CCl3NO2",
  "Chromium (VI)": "Cr(VI) (species, e.g. CrO4^2− as chromate)",
  "Copper": "Cu (element)",
  "o-Cresol": "C7H8O (ortho-cresol)",
  "Cyclohexanol": "C6H12O",
  "Cyclohexanone": "C6H10O",
  "Ethyl acetate": "C4H8O2",
  "Hydrocarbons(Higher class)": "general formula: larger CnHm compounds (mixture)",
  "Diborane": "B2H6",
  "o-Dichlorobenzene": "C6H4Cl2 (ortho isomer)",
  "p-Dichlorobenzene": "C6H4Cl2 (para isomer)",
  "1,1,1-Trichloroethane": "C2H3Cl3",
  "1,2-Dichloroethylene": "C2H2Cl2",
  "Dimethyl sulphide": "C2H6S",
  "N,N-Dimethylacetamide": "C4H9NO",
  "N,N-Dimethylformamide": "C3H7NO",
  "Hydrazine": "N2H4",
  "Ethylene oxide": "C2H4O",
  "Tetrahydrofuran": "C4H8O",
  "Styrene": "C8H8",
  "Ethanol": "C2H6O",
  "Methylene chloride": "CH2Cl2 (dichloromethane)",
  "Ethyl ether": "C4H10O (diethyl ether)",
  "Methyl mercaptan": "CH4S (CH3SH)",
  "Ethyl mercaptan": "C2H6S (C2H5SH)",
  "Ethyl mercaptan (Mercury-free)": "C2H6S (C2H5SH)",
  "Mmercaptans (Mercury-free)": "R-SH (general — likely typo of 'Mercaptans')",
  "Methanol": "CH4O (CH3OH)",
  "1,2-Dichloroethane": "C2H4Cl2",
  "Ethylene glycol": "C2H6O2",
  "Isopropyl alcohol": "C3H8O (isopropanol, C3H7OH)",
  "Hydrogen fluoride": "HF",
  "Free residual chlorine": "Cl2 (or active chlorine species like HOCl/ClO^− in water)",
  "Hydrogen": "H2",
  "Nitric acid": "HNO3",
  "Hydrogen chloride(for Low humidity)": "HCl (gas)",
  "Hydrogen chloride": "HCl",
  "Hydrogen peroxide": "H2O2",
  "Hydrogen sulphide": "H2S",
  "Hydrogen sulphide+ Sulphur dioxide(total quantification)": "H2S + SO2 (mixture)",
  "Hydrogen sulphide,Sulphur dioxide(Separate quantification)": "H2S (hydrogen sulfide) & SO2 (sulfur dioxide)",
  "Nitrogen dioxide": "NO2",
  "Iron (II)": "Fe^2+ (ferrous ion)",
  "Isoamyl acetate": "C7H14O2",
  "Isoamyl alcohol": "C5H12O (isoamyl alcohol, isopentanol)",
  "Isobutyl acetate": "C6H12O2",
  "Isobutyl alcohol": "C4H10O",
  "Isopropyl acetate": "C5H10O2",
  "LPG": "a mixture (mainly propane C3H8 and butane C4H10)",
  "Mercury": "Hg (element)",
  "Mercury vapour": "Hg (elemental vapor)",
  "Methacrylonitrile": "C4H5N",
  "Methyl tert-butyl ether": "C5H12O (MTBE)",
  "hydrazine": "N2H4",
  "Methyl iodide": "CH3I (iodomethane)",
  "Methyl isobutyl ketone": "C6H12O (MIBK)",
  "Methy tert-butyl ether": "C5H12O (likely MTBE — spelling variant)",
  "Methyl isothiocyanate": "C2H3NS",
  "Pyridine": "C5H5N",
  "hexane": "C6H14",
  "Methylcyclohexanol": "C7H14O (general isomeric formula)",
  "Methylcyclohexanone": "C7H12O (general isomeric formula)",
  "Phenol": "C6H5OH",
  "Nickel": "Ni (element)",
  "NO & NO<sub>2</sub>(Separate quantification)": "NO (nitric oxide) & NO2 (nitrogen dioxide)",
  "Nitrogen oxides": "NOx (general: NO and NO2)",
  "Oil mist": "aerosol of oils (mixture)",
  "Oxygen": "O2",
  "Ozone": "O3",
  "Tetrachloroethylene": "C2Cl4 (also PCE)",
  "2-Pentenenitrile": "C5H7N",
  "Petroleum naphtha": "mixture (complex hydrocarbons)",
  "Phosgene": "COCl2",
  "Phosphine": "PH3",
  "Phosphine (Mercury-free)": "PH3",
  "Propane": "C3H8",
  "Propyl acetate": "C5H10O2",
  "Polytec tube-1": "analytical tube (compound depends on target) — see vendor",
  "Polytec tube-2": "analytical tube (compound depends on target) — see vendor",
  "Polytec tube-3": "analytical tube (compound depends on target) — see vendor",
  "Polytec tube-4": "analytical tube (compound depends on target) — see vendor",
  "Polytec tube-5": "analytical tube (compound depends on target) — see vendor",
  "Qualitative analysis tube for fire investigation": "various (tube for multiple analytes)",
  "Stoddard solvent": "mixture (essentially petroleum distillates; approximate C9–C12 hydrocarbons)",
  "Sulphide ion": "S^2−",
  "Sulphur dioxide": "SO2",
  "Sulphuric acid": "H2SO4",
  "Sulphuryl fluoride": "SO2F2",
  "Tetrahydrothiophene": "C4H8S",
  "Xylene": "C8H10 (mixture of isomers: o-, m-, p-xylene)",
  "Vinyl acetate": "C4H6O2",
  "Vinylidene chloride": "C2H2Cl2 (1,1-dichloroethene)",
  "Water vapour": "H2O (gas)",
  "Water vapour (Pipeline Dew Point Tube)": "H2O (gas, measured as dew point)",
  "Zinc": "Zn (element)"
};



  // Transform gastec data to detection tube format
  const detectionTubeData: DetectionTubeItem[] = (gastecData as TubeData[]).map((item) => {
    return {
      chemical: item.tube_name,
      range: item.measuring_range,
      tubeName: chemicalFormulas[item.tube_name],
      partNo: item.tube_no,
      qtyBox: generateQtyBox(item.tube_type),
      type: item.tube_type,
      category: categorizeForFiltering(item.tube_type)
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

