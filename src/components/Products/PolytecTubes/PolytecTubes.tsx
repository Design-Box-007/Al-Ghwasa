import React from "react";
import Hero from "./Hero";
import Overview from "@/components/Categories/detail-page/OverViewCard";
import FeatureCard from "./FeatureCard";
import ProductShowcase from "./ProductShowCase";
import Table from "@/components/Categories/detail-page/FeaturesCard";
import CTA from "@/components/Comman/CTA";

const PolytecTubes = () => {
  return (
    <div>
      <Hero />
      <Overview
        title="Polytec Tubes"
        description="Polytec tubes are quick, reliable tools used to identify unknown gases in the environment. They are widely trusted by emergency responders as they instantly indicate the presence of various gases, enabling faster decision-making during hazardous situations."
      />
      <FeatureCard />
      <Overview
        title="Types of Polytec Tubes"
        description="There are 6 types of Polytec tubes, each designed with 1–8 reaction layers to detect multiple gases at once. A single tube with a hand pump can analyze different substances simultaneously."
      />
      <ProductShowcase
        features={[
          "Detects a wide range of gases with one tube",
          "Color change indicates the type of gas present",
          "Simple, portable, and highly efficient for field use",
        ]}
      />

      <Table
        title="Detectable Gases & Indicators"
        showHeader={true}
        columns={["Substance", "Min. Concentration", "Colour Change"]}
        data={[
          ["Carbon Disulphide", "≥ 1 ppm", "Green"],
          ["Hydrogen Sulphide", "≥ 1 ppm", "Green"],
          ["Carbon Monoxide", "≥ 10 ppm", "Green / Brown"],
          ["Acetone", "≥ 1000 ppm", "Brown / Green"],
          ["Acetylene", "≥ 10 ppm", "Brown / Green"],
          ["Ethylene", "≥ 70 ppm", "Brown / Green"],
          ["Benzene", "≥ 20 ppm", "Brown"],
          ["Propane, Propylene", "≥ 100 ppm", "Brown"],
          ["Styrene", "≥ 10 ppm", "Yellow / Brown"],
          ["Trichloroethylene", "≥ 15 ppm", "Pale Brown"],
          ["Gasoline", "≥ 100 ppm", "Brown"],
          ["Toluene, Xylene", "≥ 10 ppm", "Purple"],
        ]}
      />

      <ProductShowcase
        title="Qualitative analysis tube for fire investigation (No.108)"
        className="pt-10 md:px-10 px-5"
        tableTitle={false} // hides title
        tableColumns={["Substance", "Min. Concentration", "Colour Change"]}
        tableData={[
          ["Required Details", "Required Details", "Required Details"],
          ["Required Details", "Required Details", "Required Details"],
          ["Required Details", "Required Details", "Required Details"],
        ]}
      />

      <ProductShowcase
        title="Polytec II (No.25)"
        className="pt-10 md:px-10 px-5"
        tableTitle={false} // hides title
        tableColumns={["Substance", "Min. Concentration", "Colour Change"]}
        tableData={[
          ["Required Details", "Required Details", "Required Details"],
          ["Required Details", "Required Details", "Required Details"],
          ["Required Details", "Required Details", "Required Details"],
        ]}
      />

      <ProductShowcase
        title="Polytec III (No.26)"
        className="pt-10 md:px-10 px-5"
        tableTitle={false} // hides title
        tableColumns={["Substance", "Min. Concentration", "Colour Change"]}
        tableData={[
          ["Required Details", "Required Details", "Required Details"],
          ["Required Details", "Required Details", "Required Details"],
          ["Required Details", "Required Details", "Required Details"],
        ]}
      />

      <ProductShowcase
        title="Polytec IV (No.27)"
        className="pt-10 md:px-10 px-5"
        tableTitle={false} // hides title
        tableColumns={["Substance", "Min. Concentration", "Colour Change"]}
        tableData={[
          ["Required Details", "Required Details", "Required Details"],
          ["Required Details", "Required Details", "Required Details"],
          ["Required Details", "Required Details", "Required Details"],
        ]}
      />

      <ProductShowcase
        title="Polytec V(No.28)"
        className="pt-10 md:px-10 px-5"
        tableTitle={false} // hides title
        tableColumns={["Substance", "Min. Concentration", "Colour Change"]}
        tableData={[
          ["Required Details", "Required Details", "Required Details"],
          ["Required Details", "Required Details", "Required Details"],
          ["Required Details", "Required Details", "Required Details"],
        ]}
      />

      <CTA
        title={
          <div className="flex flex-col md:gap-20">
            <span className="md:text-6xl text-3xl font-light lg:leading-[80px] md:leading-[50px]">
              Ready to Improve Your Gas Detection Accuracy?
            </span>
            <p className="text-xl font-medium mt-2">
              From product guidance to pricing — we’re just one message away.
            </p>
          </div>
        }
        rightDescription={
          <span className="md:text-3xl text-xl">
            Our team is here to help you select the right tubes, pumps, or kits
            for your environment. Get expert advice, fast delivery, and reliable
            support.
          </span>
        }
        buttonText="Get in Touch"
        buttonHref="#"
      />
    </div>
  );
};

export default PolytecTubes;
