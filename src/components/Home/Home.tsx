import React from "react";
import Hero from "./Hero";
import FAQAccordion from "../Comman/FAQAccordion";
import { homePagefaqs } from "@/data/comman";
import HomeOurProducts from "./HomeOurProduct";
import HomeAbout from "./HomeAbout";
import HomeProductApplication from "./HomeProductApplications";
import BlogSection from "../Comman/BlogSection";
// import ProductCTA from '../Comman/ProductCTA'
import ProductPageCTA from "../Comman/ProductPageCTA";
import { gasetecSubLinks } from "@/data/products/mx3Data";
import TrustedPartners from "../Comman/TrustedPartners";

const Home = () => {
  return (
    <main>
      <Hero />
      <HomeOurProducts />
      <HomeAbout />
      <TrustedPartners />
      <HomeProductApplication />
      <BlogSection
        title="Featured Articles"
        ctaBtn="View All"
        ctaBtnClassName="px-4 py-2 sm:px-6 sm:py-c-10 bg-custom-green-1 text-white font-medium text-base sm:text-xl flex justify-between items-center rounded-lg"
        titleClassName="text-h1 font-medium font-inter text-custom-red-light"
      />
      <FAQAccordion faqs={homePagefaqs} />
      <div className="px-4">
        <ProductPageCTA items={gasetecSubLinks} />
      </div>
    </main>
  );
};

export default Home;
