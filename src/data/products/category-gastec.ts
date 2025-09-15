// data.ts

import images from "@/All-Image-Data/Data";

export interface ProductItem {
  name: string;
  description: string;
  imgSrc: string;
}

// Calibration Regulators
export const calibrationRegulators: ProductItem[] = [
  {
    name: "GASTEC Compressed Breathing Air Measurement Kit CG-1",
    description: "Complete calibration set for accurate measurements.",
    imgSrc: images.CG1,
  },
  {
    name: "GASTEC Flow Regulator",
    description: "Ensures stable gas flow during sampling.",
    imgSrc: images.FlowRegulator,
  },
  {
    name: "Pressure Regulator",
    description: "Maintains consistent pressure for reliable results.",
    imgSrc: images.PressureRegulator,
  },
  {
    name: "High-Precision Flow Regulator",
    description: "Designed for precise gas flow control.",
    imgSrc: images.HighFlow,
  },
  {
    name: "Adaptor / Connector",
    description: "Compatible connector for multi-device integration.",
    imgSrc: images.Adaptor,
  },
];

// Digital Monitors
export const digitalMonitors: ProductItem[] = [
  {
    name: "H2S Data Logger-GHS-8AT-EX",
    description: "Portable monitor for hazardous gas detection.",
    imgSrc: images.GHS8ATEX1,
  },
];

// Specialized Kits
export const specializedKits: ProductItem[] = [
  {
    name: "Toxic gas detection kit TG-1",
    description: "Complete field sampling kit for multiple gases.",
    imgSrc: images.TG1,
  },
];

// Calibration Equipment
export const calibrationEquipment: ProductItem[] = [
  {
    name: "351A Extension Hoses",
    description:
      "For remote sampling in confined spaces, connects to GV-100 / GV-110 pumps.",
    imgSrc: images.Extension351A,
  },
  {
    name: "Fumigation Probe 380",
    description: "For sampling residual fumigants through container seals.",
    imgSrc: images.Fumigation380,
  },
  {
    name: "Pyrotec Pyrolyzer 860",
    description: "Converts sulfuryl fluoride for detection with tubes.",
    imgSrc: images.Pyrotec860,
  },
  {
    name: "Extension Pole 350BP-2",
    description: "Lightweight 2.8 m pole for extended reach sampling.",
    imgSrc: images.Extension350BP2,
  },
  {
    name: "Twin Tube Holder GV500",
    description: "Protects twin tubes during sampling.",
    imgSrc: images.GV500,
  },
];

// Gas Detector Tube System
export const gasDetectorTubeSystem: ProductItem[] = [
  {
    name: "Gas Sampling Pump GV100S/GV100LS/GV110S.",
    description: "Compact gas sampling pump with carrying case.",
    imgSrc: images.GV100S,
  },
  {
    name: "Gas sampling pump kit GV-110S",
    description: "Advanced model with extra durability.",
    imgSrc: images.GV110S,
  },
  {
    name: "Gas sampling pump kit GV-100LS",
    description: "Advanced model with extra durability.",
    imgSrc: images.GV100LS,
  },
];

export const gasDetectorTubeSystem2: ProductItem[] = [
  {
    name: "Gas Sampling Pump GV100S/GV100LS/GV110S.",
    description: "Compact gas sampling pump with carrying case.",
    imgSrc: images.GV100S,
  },
];

// Gas Detection Passive
export const gasDetectionPassive: ProductItem[] = [
  {
    name: "Dosimeter Tubes – TWA",
    description: "Effortlessly measure time-weighted average",
    imgSrc: images.DosimeterTubesTWA,
  },
  {
    name: "Dositube Holder",
    description:
      "Wear a tube—get a precise exposure reading. GASTEC’s passive dosimeter tubes offer a simple and accurate way to track worker exposure over time, no pumps or power required.",
    imgSrc: images.DositubeHolder,
  },
];

// Automatic Air Sampling Pump
export const automaticAirSamplingPump: ProductItem[] = [
  {
    name: "Automatic Air Sampling Pump GSP-501FT",
    description: "Fit testing unit for respiratory equipment.",
    imgSrc: images.GSP501FT1,
  },
];

// Gas Detection Passive 2
export const gasDetectionPassive2: ProductItem[] = [
  {
    name: "Permeater PD-1C",
    description: "Effortlessly measure time-weighted average",
    imgSrc: images.PD1C1,
  },
];
