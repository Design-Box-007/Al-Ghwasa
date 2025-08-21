import React from "react";
import ProductHero from "./HeroCard";
import Overview from "./OverViewCard";
import {
  features,
  howToUseSteps,
  packageContent,
  relatedProduct,
  software,
  specifications,
} from "./data";
import Table from "./FeaturesCard";
import StepsGrid from "./HowToUseCard";
import SoftwareCard from "./SoftwareCard";
import PackageContentsCard from "./PackageContentsCard";
import CTA from "@/components/Comman/CTA";
import ProductGrid from "@/components/Comman/ProductGrid";

const Detail = () => {
  return (
    <div>
      <ProductHero
        name="GHS-8AT EX Monitor"
        category="Gas Detection Monitors"
        subName="GHS_8AT_EX_1"
        images={[
          "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_1.jpg",
          "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_2.jpg",
          "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_3.jpg",
          "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_4.jpg",
        ]}
      />
      <Overview
        description="The GHS-8AT EX Monitor is a portable hazardous gas detection device designed for high precision and reliability in industrial and field environments. It ensures worker safety and compliance by detecting a wide range of gases with quick response times."
        catalogUrl="/pdf/2148_ext_14_en_0.pdf"
        catalogName="download"
      />
      <Table features={features} />;
      <Table features={specifications} title="Technical Specifications" />
      <StepsGrid
        heading="How to Use – GHS-8AT EX Monitor"
        steps={howToUseSteps}
      />
      <SoftwareCard title="Software" downloads={software} />
      <PackageContentsCard title="Package Contents" items={packageContent} />
      <CTA
        title={
          <span className="text-7xl font-light leading-[80px]">
            Interested in this product?
          </span>
        }
        rightDescription={
          <span className="text-3xl">
            Get in touch with us to know more or request a quote.
          </span>
        }
        buttonText="Make an Enquiry"
        buttonHref="/contact"
      />
      <ProductGrid
        title="Related Products"
        items={relatedProduct}
        ctaLabel="View Accessories"
        ctaHref="#"
        actionVariant="arrow"
        topDivider
        gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        className="px-10"
      />
    </div>
  );
};

export default Detail;
