import ContactUs from "@/components/ContactUs/ContactUs";
import { contact } from "@/lib/metadata";
import React from "react";
export const metadata = contact;
const page = () => {
  return <ContactUs />;
};

export default page;
