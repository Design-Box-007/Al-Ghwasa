import Categories from "@/components/Categories/Categories";
import { categories } from "@/lib/metadata";
import React from "react";

export const metadata = categories;

const page = () => {
  return (
    <div>
      <Categories />
    </div>
  );
};

export default page;
