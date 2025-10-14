import Home from "@/components/Home/Home";
import { home } from "@/lib/metadata";
import React from "react";
export const metadata = home;
const page = () => {
  return <Home />;
};

export default page;
