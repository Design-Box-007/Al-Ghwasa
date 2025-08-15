"use client"

import { IconType } from "react-icons";
import { FaTractor, FaFlask, FaHardHat, FaFireExtinguisher, FaAmbulance, FaUtensils, FaLandmark, FaRadiation, FaIndustry, FaMicroscope, FaBalanceScale, FaShip, FaStethoscope, FaMountain, FaOilCan, FaBurn, FaPills, FaScroll, FaShieldAlt, FaCog, FaTruck, FaBolt, FaTint, FaTools } from "react-icons/fa";

interface IndustryCards {
  title: string;
  description: string;
  icon: IconType;
}

export const industries: IndustryCards[] = [
  {
    title: "Agriculture",
    description: "Monitoring gas levels in silos, greenhouses, and storage facilities.",
    icon: FaTractor
  },
  {
    title: "Chemical",
    description: "Ensuring safe handling and processing of chemicals.",
    icon: FaFlask
  },
  {
    title: "Construction",
    description: "Detecting hazardous gases on job sites for worker safety.",
    icon: FaHardHat
  },
  {
    title: "Fire Protection",
    description: "Supporting fire investigation and prevention with gas monitoring.",
    icon: FaFireExtinguisher
  },
  {
    title: "Emergency Response",
    description: "Equipping teams with rapid detection solutions in critical situations.",
    icon: FaAmbulance
  },
  {
    title: "Food and Beverage",
    description: "Ensuring compliance in processing and storage facilities.",
    icon: FaUtensils
  },
  {
    title: "Government & Military",
    description: "Providing mission-critical detection in defense and security operations.",
    icon: FaLandmark
  },
  {
    title: "Hazardous Waste",
    description: "Monitoring gas emissions during waste treatment and disposal.",
    icon: FaRadiation
  },
  {
    title: "Industrial Hygiene",
    description: "Protecting workers in manufacturing and processing plants.",
    icon: FaIndustry
  },
  {
    title: "Laboratories",
    description: "Enabling precise measurement for research and testing.",
    icon: FaMicroscope
  },
  {
    title: "Law Enforcement",
    description: "Supporting investigations with advanced detection tools.",
    icon: FaBalanceScale
  },
  {
    title: "Maritime",
    description: "Monitoring confined spaces on vessels and offshore platforms.",
    icon: FaShip
  },
  {
    title: "Medical",
    description: "Ensuring safe environments in healthcare and pharmaceutical facilities.",
    icon: FaStethoscope
  },
  {
    title: "Mining",
    description: "Providing gas detection in underground and surface mining operations.",
    icon: FaMountain
  },
  {
    title: "Oil and Gas",
    description: "Monitoring drilling, refining, and storage facilities for hazardous gases.",
    icon: FaOilCan
  },
  {
    title: "Petrochemical",
    description: "Safeguarding refineries and chemical plants.",
    icon: FaBurn
  },
  {
    title: "Pharmaceutical",
    description: "Ensuring cleanroom and production area safety.",
    icon: FaPills
  },
  {
    title: "Pulp and Paper",
    description: "Managing gas exposure risks in production processes.",
    icon: FaScroll
  },
  {
    title: "Safety",
    description: "Offering solutions for general occupational safety.",
    icon: FaShieldAlt
  },
  {
    title: "Steel and Metals",
    description: "Detecting gases in smelting, foundries, and production lines.",
    icon: FaCog
  },
  {
    title: "Transportation",
    description: "Ensuring safety in vehicle maintenance and storage areas.",
    icon: FaTruck
  },
  {
    title: "Utilities",
    description: "Monitoring power generation and distribution sites.",
    icon: FaBolt
  },
  {
    title: "Water and Wastewater",
    description: "Measuring gas levels during treatment processes.",
    icon: FaTint
  },
  {
    title: "Welding",
    description: "Protecting welders from toxic gas exposure.",
    icon: FaTools
  }
];
