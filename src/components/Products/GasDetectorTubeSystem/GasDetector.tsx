import Hero from "@/components/Categories/detail-page/GasDetectorHero";
import Overview from "@/components/Categories/detail-page/OverViewCard";
import WhyChooseGastec from "@/components/Categories/detail-page/WhyChooseGastec";
import ProductGrid from "@/components/Comman/ProductGrid";
import ResponsiveYouTube from "@/components/Gallery/GalleryVideo";
import { gasDetectorTubeSystem } from "@/data/products/category-gastec";

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
        title="Overview"
        description="GASTEC Detector Tubes provide direct concentration readings using a calibrated scale printed on each tube. At GASTEC, we are committed to delivering the highest quality detector tubes for accurate analysis of gases and vapours in air, as well as pollutants in soil and water, backed by advanced, state-of-the-art research and development. Our dedication to quality and innovation has earned us a strong reputation across a wide range of industries, commercial sectors, and public services. Today, our detector tubes support over 500 different applications."
      />

      {/* <Overview
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
      /> */}

      <WhyChooseGastec
        title={"Gas Sampling Pump Features"}
        imageUrl="/images/Gastec/Gastec-2.png"
        features={[
          {
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/Gas sampling pum feature/gas sampling image 1.png",
            description:
              "The built-in tip breaker incorporates a diamond edge for maximum durability that cuts the surface of the detector tube. This makes the tip breaking much easier, safer and convenient. Discarded tips are deposited in a storage bin for safe and easy disposal.",
          },
          {
            // featureTitle: "Wide Concentration Range",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/Gas sampling pum feature/gas sampling image 2.png",
            description:
              "The GASTEC GV-110 and GV-100 pumps feature a smaller-diameter piston for easier operation with minimal effort. Both models meet the EN1231 leakage standard, ensuring leakage stays below 3 mL/min in the first minute of a pump stroke. A red line on the pump shaft clearly indicates leakage rates for quick visual confirmation.",
          },
          {
            // featureTitle: "High Accuracy",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/Gas sampling pum feature/gas sampling image 3.png",
            description:
              "The pump body is coated with a soft elastomer and designed with a narrower middle section for a secure grip. All external parts are made from non-sparking ABS resin, except for the tube tip cutter opening, which is constructed from chrome-plated stainless steel.",
          },
          {
            // featureTitle: "Stable & Long-Lasting",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/Gas sampling pum feature/gas sampling image 4.png",
            description:
              "The pump shaft features clear red markings for both full-stroke (100 mL) and half-stroke (50 mL) positions, with the handle locking precisely in place. A built-in flow finish indicator automatically signals when sampling is complete—when the white disk pops out, the stroke is finished.",
          },
          {
            // featureTitle: "User-Friendly Operation",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/Gas sampling pum feature/gas sampling image 5.png",
            description:
              "The automatic stroke counter built in model GV-110 (in Model GV-110S) gas sampling pump can track up to ten pump strokes automatically so there is no chance of miscounting.",
          },
        ]}
      />

      <WhyChooseGastec
        title={"Three Simple Steps to Accurate Gas Detection"}
        titleClass="lg:text-5xl md:text-4xl text-2xl text-center mb-6 font-bold"
        features={[
          {
            // featureTitle: "Insert the Detector Tube",
            description:
              "Break off both ends of the detector tube. Insert the tube into the rubber inlet.",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/Operating Procedure/operating procedure image 1.png",
          },
          {
            // featureTitle: "Draw the Sample",
            description:
              "Pull out the handle until it is locked. Wait until the sampling time has elapsed.",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/Operating Procedure/operating procedure image 2.png",
          },
          {
            // featureTitle: "Read the Result",
            description:
              "Read the measurement at the end of the coloured layer.",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/Operating Procedure/operating procedure image 3.png",
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
            // featureTitle: "Secure the Inlet",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/air tightness/air tightness image 1.png",
            description: "First, confirm that the inlet nut is not loose.",
          },
          {
            // featureTitle: "Insert Intact Tube",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/air tightness/air tightness image 2.png",
            description:
              "Insert a detector tube (with both tips intact) into the rubber tube inlet of the sampling pump.",
          },
          {
            // featureTitle: "Align Marks",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/air tightness/air tightness image 3.png",
            description:
              "With the handle fully pushed in, align both of the guide marks (red line + triangle) on the pump (tail-end block) and the handle (▲100).",
          },
        ]}
      />

      <WhyChooseGastec
        features={[
          {
            // featureTitle: "Lock & Hold",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/air tightness/air tightness image 4.png",
            description:
              "Pull out the handle in one thrust until it is locked, and then release the handle. Wait until the sampling time (approx. 1 minute) has elapsed.",
          },
          {
            // featureTitle: "Perform the Test",
            featureImage:
              "/images/GAS SAMPLING PUMP MAIN LANDING PAGE IMAGES/air tightness/air tightness image 5.png",
            description:
              "Grasp the handle and turn it 90 degrees. If the pump is completely airtight, the handle should readily return to its original position; with the handle's demarcation read line fully concealed.",
          },
        ]}
        className="grid md:grid-cols-2 grid-cols-1 gap-5"
      />

      <ProductGrid
        title="Related Products"
        items={gasDetectorTubeSystem}
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
