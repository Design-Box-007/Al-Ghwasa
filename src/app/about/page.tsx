import AboutUs from "@/components/AboutUs/AboutUs";
import { about } from "@/lib/metadata";
import React from "react";

export const metadata = about;

const page = () => {
  return <AboutUs />;
};

export default page;
