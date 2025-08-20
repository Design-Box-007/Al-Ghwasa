import React from "react";
import Hero from "./Hero";
import SearchSection from "./Search";
import Calibration from "./Calibration";
import DigitalMonitors from "./MonitorsTesters";
import GasSampling from "./SamplingPumps";
import SpecializedKits from "./SpecializedKits";

const Categories = () => {
  return (
    <div>
      <Hero />
      <SearchSection/>
      <Calibration/>
      <DigitalMonitors/>
      <GasSampling/>
      <SpecializedKits/>
    </div>
  );
};

export default Categories;
