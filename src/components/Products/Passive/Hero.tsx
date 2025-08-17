"use client";

import GastecCard from "@/components/Comman/GastecCard";

export default function PassiveHero() {
  return (
    <section className="pt-40 flex items-center justify-center md:px-10 px-5">
      <GastecCard
        image="/images/Gastec3/gas-detection-passive-monitoring/Dositube holder.jpg"
        title="GASTEC Passive Dosimeter Tubes"
        subtitle="Effortless Time-Weighted Average Monitoring"
        description="Wear a tube—get a precise exposure reading. GASTEC’s passive dosimeter tubes offer a simple and accurate way to track worker exposure over time, no pumps or power required."
        buttonText="Browse TWA Tubes"
        onButtonClick={() => alert("Quote requested!")} // 🔥 button action
      />
    </section>
  );
}
