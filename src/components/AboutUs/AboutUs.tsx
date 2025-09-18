import React from "react";
import AboutUsHeader from "./AboutUsHeader";
import AboutUsSecond from "./AboutUsSecond";
// import SectionCTABtn from '../Comman/SectionCTABtn'
import MapComponent from "../Comman/MapComponent";
import TrustedPartners from "../Comman/TrustedPartners";

const AboutUs = () => {
  return (
    <main className="pt-[150px] pb-[40px] space-y-20">
      <AboutUsHeader />
      <AboutUsSecond />
      <MapComponent />
      <TrustedPartners/>
      {/* <SectionCTABtn className='bg-custom-blue-1 rounded-[120px]' /> */}
    </main>
  );
};

export default AboutUs;
