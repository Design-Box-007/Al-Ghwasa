"use client";

import type { IconType } from "react-icons";
import { useEffect, useState } from "react";

interface IndustryCardProps {
  name: string;
  description: string;
  icon: IconType;
}

const industryGasData: Record<
  string,
  { description: string; gases: string[] }
> = {
  Agriculture: {
    description: "Gases from fertilizers, manure, and silos",
    gases: [
      "Ammonia (NH₃)",
      "Hydrogen Sulfide (H₂S)",
      "Methane (CH₄)",
      "Nitrogen Dioxide (NO₂)",
      "Phosphine (PH₃)",
    ],
  },
  Chemical: {
    description: "Industrial chemicals and fumigants",
    gases: [
      "Ammonia (NH₃)",
      "Phosphine (PH₃)",
      "Methyl Bromide (CH₃Br)",
      "Hydrogen Cyanide (HCN)",
      "Chloropicrin (CCl₃NO₂)",
    ],
  },
  Construction: {
    description: "Gases from machinery, welding, and confined spaces",
    gases: [
      "Carbon Monoxide (CO)",
      "Nitrogen Oxides (NO, NO₂)",
      "Sulfur Dioxide (SO₂)",
      "Hydrogen Sulfide (H₂S)",
      "Ammonia (NH₃)",
    ],
  },
  "Fire Protection": {
    description: "Gases released during combustion",
    gases: [
      "Carbon Monoxide (CO)",
      "Hydrogen Cyanide (HCN)",
      "Hydrogen Chloride (HCl)",
      "Phosgene (COCl₂)",
      "Sulfur Dioxide (SO₂)",
    ],
  },
  "Emergency Response": {
    description: "Gases encountered in accidents or spills",
    gases: [
      "Carbon Monoxide (CO)",
      "Hydrogen Cyanide (HCN)",
      "Chlorine (Cl₂)",
      "Hydrogen Sulfide (H₂S)",
      "Ammonia (NH₃)",
    ],
  },
  "Food and Beverage": {
    description: "Gases from fermentation and storage",
    gases: [
      "Carbon Dioxide (CO₂)",
      "Nitrogen (N₂)",
      "Ammonia (NH₃)",
      "Methane (CH₄)",
      "Sulfur Dioxide (SO₂)",
    ],
  },
  "Government & Military": {
    description: "Gases in chemical warfare or training",
    gases: [
      "Chlorine (Cl₂)",
      "Phosgene (COCl₂)",
      "Sarin (GB)",
      "Hydrogen Cyanide (HCN)",
      "Mustard Gas (HD)",
    ],
  },
  "Hazardous Waste": {
    description: "Gases from decomposition and chemical reactions",
    gases: [
      "Hydrogen Sulfide (H₂S)",
      "Methane (CH₄)",
      "Ammonia (NH₃)",
      "Carbon Monoxide (CO)",
      "Nitrogen Oxides (NO, NO₂)",
    ],
  },
  "Industrial Hygiene": {
    description: "Monitoring workplace toxic gases",
    gases: [
      "Carbon Monoxide (CO)",
      "Hydrogen Sulfide (H₂S)",
      "Ammonia (NH₃)",
      "Nitrogen Dioxide (NO₂)",
      "Ozone (O₃)",
    ],
  },
  Laboratories: {
    description: "Chemical reactions and experiments",
    gases: [
      "Hydrogen Cyanide (HCN)",
      "Ammonia (NH₃)",
      "Chlorine (Cl₂)",
      "Phosgene (COCl₂)",
      "Sulfur Dioxide (SO₂)",
    ],
  },
  "Law Enforcement": {
    description: "Gases from tear gas or chemical threats",
    gases: [
      "Chlorine (Cl₂)",
      "CS Gas",
      "CN Gas",
      "Hydrogen Cyanide (HCN)",
      "Phosgene (COCl₂)",
    ],
  },
  Maritime: {
    description: "Gases from ship engines, fuel, and cargo",
    gases: [
      "Carbon Monoxide (CO)",
      "Hydrogen Sulfide (H₂S)",
      "Nitrogen Oxides (NO, NO₂)",
      "Sulfur Dioxide (SO₂)",
      "Methane (CH₄)",
    ],
  },
  Medical: {
    description: "Gases in sterilization and labs",
    gases: [
      "Nitrous Oxide (N₂O)",
      "Ethylene Oxide (C₂H₄O)",
      "Carbon Monoxide (CO)",
      "Chlorine (Cl₂)",
      "Formaldehyde (CH₂O)",
    ],
  },
  Mining: {
    description: "Gases from blasting, coal, and confined spaces",
    gases: [
      "Methane (CH₄)",
      "Carbon Monoxide (CO)",
      "Hydrogen Sulfide (H₂S)",
      "Nitrogen Dioxide (NO₂)",
      "Carbon Dioxide (CO₂)",
    ],
  },
  "Oil and Gas": {
    description: "Gases from drilling, refining, and storage",
    gases: [
      "Hydrogen Sulfide (H₂S)",
      "Methane (CH₄)",
      "Carbon Monoxide (CO)",
      "Ammonia (NH₃)",
      "Nitrogen Oxides (NO, NO₂)",
    ],
  },
  Petrochemical: {
    description: "Processing chemicals and solvents",
    gases: [
      "Hydrogen Sulfide (H₂S)",
      "Ammonia (NH₃)",
      "Carbon Monoxide (CO)",
      "Chlorine (Cl₂)",
      "Nitrogen Oxides (NO, NO₂)",
    ],
  },
  Pharmaceutical: {
    description: "Chemical reactions and solvents",
    gases: [
      "Hydrogen Cyanide (HCN)",
      "Ammonia (NH₃)",
      "Chlorine (Cl₂)",
      "Nitrogen Oxides (NO₂)",
      "Methanol vapors",
    ],
  },
  "Pulp and Paper": {
    description: "Chemicals used in bleaching and processing",
    gases: [
      "Chlorine (Cl₂)",
      "Sulfur Dioxide (SO₂)",
      "Hydrogen Sulfide (H₂S)",
      "Nitrogen Oxides (NO, NO₂)",
      "Carbon Monoxide (CO)",
    ],
  },
  Safety: {
    description: "General industrial safety awareness",
    gases: [
      "Carbon Monoxide (CO)",
      "Hydrogen Sulfide (H₂S)",
      "Ammonia (NH₃)",
      "Phosphine (PH₃)",
      "Chlorine (Cl₂)",
    ],
  },
  "Steel and Metals": {
    description: "Fumes from smelting and welding",
    gases: [
      "Carbon Monoxide (CO)",
      "Nitrogen Oxides (NO, NO₂)",
      "Sulfur Dioxide (SO₂)",
      "Ozone (O₃)",
      "Hydrogen Cyanide (HCN)",
    ],
  },
  Transportation: {
    description: "Exhaust gases and confined spaces",
    gases: [
      "Carbon Monoxide (CO)",
      "Nitrogen Oxides (NO, NO₂)",
      "Sulfur Dioxide (SO₂)",
      "Methane (CH₄)",
      "Hydrogen Sulfide (H₂S)",
    ],
  },
  Utilities: {
    description: "Power plants, gas distribution, and water treatment",
    gases: [
      "Ammonia (NH₃)",
      "Hydrogen Sulfide (H₂S)",
      "Carbon Monoxide (CO)",
      "Chlorine (Cl₂)",
      "Nitrogen Oxides (NO₂)",
    ],
  },
  "Water and Wastewater": {
    description: "Treatment plants and sewage systems",
    gases: [
      "Hydrogen Sulfide (H₂S)",
      "Methane (CH₄)",
      "Ammonia (NH₃)",
      "Chlorine (Cl₂)",
      "Carbon Dioxide (CO₂)",
    ],
  },
  Welding: {
    description: "Fumes and gases from welding metals",
    gases: [
      "Carbon Monoxide (CO)",
      "Ozone (O₃)",
      "Nitrogen Oxides (NO, NO₂)",
      "Hydrogen Cyanide (HCN)",
      "Metal fumes (like ZnO, CrO₃)",
    ],
  },
};

export default function IndustryCard({
  name,
  description,
  icon: Icon,
}: IndustryCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // detect if device supports touch
    if (typeof window !== "undefined") {
      setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
    }
  }, []);

  const handleCardClick = () => {
    if (isTouch) {
      setIsFlipped(!isFlipped);
    }
  };

  const gasData = industryGasData[name];

  return (
    <div
      className="relative w-full h-80 cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={handleCardClick}
      onMouseEnter={() => !isTouch && setIsFlipped(true)}   // flip on hover (desktop)
      onMouseLeave={() => !isTouch && setIsFlipped(false)} // unflip on hover out
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 ease-in-out`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="bg-gray-200 border border-[#C5C5C5] rounded-2xl p-6 flex flex-col items-center justify-center gap-5 h-full">
            <Icon className="text-5xl text-[#0F2E53]" />
            <h3 className="font-dm-sans font-semibold text-2xl text-[#0F2E53] text-center">
              {name}
            </h3>
            <p className="font-poppins font-medium text-sm text-center">
              {description}
            </p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="bg-gray-200 border border-[#C5C5C5] rounded-2xl p-6 flex flex-col gap-4 h-full overflow-y-auto">
            {gasData && (
              <ul className="space-y-2">
                {gasData.gases.map((gas, index) => (
                  <li
                    key={index}
                    className="font-poppins text-sm text-gray-700 bg-white/50 rounded-lg px-3 py-2 border border-gray-300"
                  >
                    • {gas}
                  </li>
                ))}
              </ul>
            )}
            <div className="text-center pt-2 border-t border-gray-300">
              <p className="font-poppins text-xs text-gray-500">
                {isTouch ? "Tap to flip back" : "Hover to flip back"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

