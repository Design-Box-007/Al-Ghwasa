import Industry from "@/components/Products/Industry/Industry";
import { industries } from "@/lib/metadata";
import React from "react";

export const metadata = industries;

const page = () => {
  return <Industry />;
};

export default page;
