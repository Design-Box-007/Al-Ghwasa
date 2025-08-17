"use client";
 
import GastecCard from "@/components/Comman/GastecCard";

export default function GastecHero() {
  return (
    <section className="pt-40 flex items-center justify-center md:px-10 px-5">
      <GastecCard
        image="/images/Gastec3/gas-generator-solutions/PD_1C_1.jpg"
        title="Permeater PD-1C"
        subtitle="Precision Calibration Gas Generation"
        description="Achieve highly accurate and stable calibration gas production
        for extended periods. The PD-1C is engineered for laboratories,
        industrial plants, and field applications requiring absolute
        precision."
        buttonText="Request a Quote"
        onButtonClick={() => alert("Quote requested!")} // 🔥 button action
      />
    </section>
  );
}
