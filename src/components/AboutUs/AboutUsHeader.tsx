import React from "react";
import AboutSwiperComponent from "./AboutSwiperComponent";
import RevealComponent from "../Comman/RevealComponent";

const AboutUsHeader = () => {
  return (
    <header className="overflow-auto space-y-6 px-4 sm:px-6 lg:space-y-3">
      <RevealComponent
        outerClass="relative inline-block overflow-hidden flex items-center justify-center text-center w-full"
        direction="bottom"
      >
        <h1 className="font-medium text-3xl  md:text-5xl text-black text-center leading-tight">
          Driven by Excellence 
          (Since <span className="text-custom-blue-1">1988)</span>
        </h1>
      </RevealComponent>
      <AboutSwiperComponent />
      <p className="font-normal text-base sm:text-lg md:text-xl w-full sm:w-4/5 lg:w-3/4 mx-auto text-center">
        For over 30 years, Al Ghwasa has been the trusted distributor of GASTEC
        gas detection solutions, delivering reliable safety equipment and expert
        support across the UAE, Qatar, Kuwait, Saudi Arabia, Oman, Bahrain, and
        South Africa. Our deep commitment to gas detection innovation, product
        accuracy, and customer-focused service has made us a preferred partner
        for industries across the Gulf region and Africa.
      </p>
    </header>
  );
};

export default AboutUsHeader;
