import Blogs from "@/components/blogs/Blogs";
import { blogs } from "@/lib/metadata";
import React from "react";

export const metadata = blogs;

const page = () => {
  return (
    <>
      <Blogs />
    </>
  );
};

export default page;
