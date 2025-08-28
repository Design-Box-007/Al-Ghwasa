import React from "react";
import GalleryHero from "./GalleryHero";
import BlogSection from "../Comman/BlogSection";
import GallerySection from "./GallerySection";
import FAQAccordion from "../Comman/FAQAccordion";
import { homePagefaqs } from "@/data/comman";
import ResponsiveYouTube from "./GalleryVideo";
import { FaArrowRight } from "react-icons/fa";

const Gallery = () => {
  return (
    <main className="mt-[100px] space-y-8">
      <GalleryHero />
      <GallerySection />
      <div className="overflow-x-hidden relative md:px-4 px-4 lg:px-10 py-10">
        <div className="flex justify-between gap-2 items-center mb-4 lg:flex-row flex-col md:flex-row">
          <h1 className=" text-3xl md:text-4xl lg:text-5xl">See our Product in action</h1>
          <button className="flex items-center gap-2 font-bold whitespace-nowrap bg-white p-2.5 rounded-3xl">
            <span>Explore our Products</span>
            <span className="border border-white rounded-full p-1 flex items-center justify-center">
              <FaArrowRight />
            </span>
          </button>
        </div>
        <ResponsiveYouTube
          videoURL={
            "https://www.youtube.com/embed/iv67ive8mKs?si=5MVMs-NU35JNJWVv"
          }
        />
      </div>
      <BlogSection
        title="Featured Articles"
        ctaBtn="View All"
        ctaBtnClassName="py-c-10 px-6 bg-[#f3f3f3] text-black cursor-pointer font-medium text-xl flex justify-between items-center rounded-lg"
        titleClassName="text-[32px] font-medium font-poppins text-black"
      />
      <FAQAccordion faqs={homePagefaqs} />
    </main>
  );
};

export default Gallery;
