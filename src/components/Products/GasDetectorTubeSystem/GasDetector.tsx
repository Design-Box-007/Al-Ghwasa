import Hero from "@/components/Categories/detail-page/GasDetectorHero";
import Overview from "@/components/Categories/detail-page/OverViewCard";
import WhyChooseGastec from "@/components/Categories/detail-page/WhyChooseGastec";
import ProductGrid from "@/components/Comman/ProductGrid";
import ResponsiveYouTube from "@/components/Gallery/GalleryVideo";
import data from "@/data/products/category-gastec.json";

import React from "react";

const GasDetector = () => {
  return (
    <div>
      <Hero
        backgroundImage="/images/Gastec3/gas-detection-accessories/351A_5_GV_100.jpg"
        title="GASTEC Detector Tube & Pump System"
        description="Experience precision gas measurement with GASTEC trusted manual sampling pumps and over 500 compatible detector tubes. Reliable, portable, and built for the toughest field environments."
        ctaText="Browse Detector Tubes"
        link="/Detection-table"
      />
      <Overview
        title={"What is the GASTEC Detector Tube System?"}
        description={
          "The GASTEC system is a direct-reading, colorimetric gas detector tube method designed for accurate measurement of airborne gases and vapors. By simply drawing air through a glass detector tube, users can instantly read concentration levels on a pre-calibrated scale — no additional equipment required."
        }
        showImage={true}
        imageUrl={"/images/detector-tube-system.jpg"}
        features={[
          {
            title: "Portable & Convenient",
            description:
              "From common industrial gases to specialized chemicals",
          },
          {
            title: "Quick Results",
            description: "Instant on-site readings in minutes.",
          },
          {
            title: "Extensive Coverage",
            description: "Over 500 gases detectable.",
          },
          {
            title: "Trusted Worldwide",
            description:
              "Used across industries for safety, research, and compliance.",
          },
        ]}
      />

      <WhyChooseGastec
        title={"Why Choose GASTEC?"}
        imageUrl="/images/Gastec/Gastec-2.png"
        features={[
          {
            featureTitle: "Direct Onsite Readouts",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/Gas sampling pum feature/gas sampling image 1.png",
            description:
              "No interpretation required; results are visible on the tube itself.",
          },
          {
            featureTitle: "Wide Concentration Range",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/Gas sampling pum feature/gas sampling image 2.png",
            description:
              "Flexible measurements, adjustable with sampling volume.",
          },
          {
            featureTitle: "High Accuracy",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/Gas sampling pum feature/gas sampling image 3.png",
            description:
              "ach tube is individually calibrated and comes with a control number.",
          },
          {
            featureTitle: "Stable & Long-Lasting",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/Gas sampling pum feature/gas sampling image 4.png",
            description: "Tubes maintain accuracy with long shelf life.",
          },
          {
            featureTitle: "User-Friendly Operation",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/Gas sampling pum feature/gas sampling image 5.png",
            description:
              "Intuitive design makes it simple for professionals in any field.",
          },
        ]}
      />
      <WhyChooseGastec
        title={"Three Simple Steps to Accurate Gas Detection"}
        titleClass="lg:text-5xl md:text-4xl text-2xl text-center mb-6 font-bold"
        features={[
          {
            featureTitle: "Insert the Detector Tube",
            description:
              "Select the appropriate tube for your target gas and break off the tips",
          },
          {
            featureTitle: "Draw the Sample",
            description:
              "Use the hand pump to pull the exact volume of air required.",
          },
          {
            featureTitle: "Read the Result",
            description:
              "Compare the color change against the printed scale for an immediate measurement.",
          },
        ]}
      />

      <div className="overflow-x-hidden relative md:px-4 px-4 lg:px-10 py-10">
        <hr className="mb-6" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5">
          {"Video instruction"}
        </h1>

        <ResponsiveYouTube
          videoURL={
            "https://www.youtube.com/embed/D0UnqGm_miA?si=35W6STzM9tPG7nSI"
          }
        />
        <hr className="mt-6" />
      </div>

      <WhyChooseGastec
        title2={"Airtightness Check"}
        description={
          "Before you begin sampling, it’s crucial to verify that your sampling pump is airtight—any leaks can compromise measurement accuracy. Here’s a simple check to ensure reliability:"
        }
        features={[
          {
            featureTitle: "Secure the Inlet",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/air tightness/air tightness image 1.png",
            description: "Ensure the inlet nut is firmly tightened",
          },
          {
            featureTitle: "Insert Intact Tube",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/air tightness/air tightness image 2.png",
            description:
              "Place a detector tube (with both tips intact) into the pump’s rubber inlet",
          },
          {
            featureTitle: "Align Marks",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/air tightness/air tightness image 3.png",
            description:
              "Push the handle fully in, aligning the guide marks (red line on pump body and triangle on handle)",
          },
        ]}
      />

      <WhyChooseGastec
        features={[
          {
            featureTitle: "Lock & Hold",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/air tightness/air tightness image 4.png",
            description:
              "Pull out in one motion until locked. Wait approximately 1 minute.",
          },
          {
            featureTitle: "Perform the Test",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/air tightness/air tightness image 5.png",
            description:
              "Twist handle 90°, then release gently. The handle should smoothly return—if the red mark is fully concealed, the pump is airtight.",
          },
        ]}
        className="grid md:grid-cols-2 grid-cols-1 gap-5"
      />
      <ProductGrid
        title="Related Products"
        items={data["Gas-detector-tube-system"]}
        ctaLabel="View Accessories"
        ctaHref="#"
        actionVariant="arrow"
        topDivider
        gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        className="lg:px-10 px-5"
      />
    </div>
  );
};

export default GasDetector;
