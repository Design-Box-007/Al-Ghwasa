import React, { Suspense } from "react";
import Hero from "./Hero";
import SearchSection from "./Search";

const Categories = () => {
  return (
    <div className="bg-background">
     <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchSection />
      </Suspense>
    </div>
  );
};

export default Categories;
