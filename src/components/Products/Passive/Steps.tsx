"use client";
import React from "react";
import { motion } from "framer-motion";
import StepCard from "@/components/Comman/Steps";

const PassiveSteps = () => {
  const steps = [
    {
      image:
        "/images/Gastec3/gas-detection-passive-monitoring/Dositube holder.jpg",
      caption: "Tube insertion",
      title: "Prepare the Dosimeter Tube",
      description: "Remove the tube from its pack and clip it near your breathing zone."
     },
    {
      image:
        "/images/Gastec3/gas-detection-passive-monitoring/Dositube holder.jpg",
      caption: "Pump handle action",
      title: "Wear During Work",
      description:"Wear the tube throughout the work shift or the specified monitoring period."
     },
    {
      image:
        "/images/Gastec3/gas-detection-passive-monitoring/Dositube holder.jpg",
      caption: "Scale reading",
      title: "Read Results",
      description:"Compare the color change to the reference scale and record the reading."
     },
  ];

  return (
    <section className="py-30 px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-2xl lg:text-5xl font-semibold mb-10">
          Simple 3-Step Usage Guide
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            title={step.title}
            description={step.description}
            caption={step.caption}
            image={step.image}
          />
        ))}
      </div>
    </section>
  );
};

export default PassiveSteps;
