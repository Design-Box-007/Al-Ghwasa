import Gallery from "@/components/Gallery/Gallery";
import { gallery } from "@/lib/metadata";
import { Metadata } from "next";
import React from "react";
export const metadata = gallery;
const page = () => {
  return <Gallery />;
};

export default page;
