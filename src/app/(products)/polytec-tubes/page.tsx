import PolytecTubes from "@/components/Products/PolytecTubes/PolytecTubes";
import { polytec } from "@/lib/metadata";
 import React from "react";

export const metadata = polytec;

const page = () => {
  return (
    <div>
      <PolytecTubes />
    </div>
  );
};

export default page;
