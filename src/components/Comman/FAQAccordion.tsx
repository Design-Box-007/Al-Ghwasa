"use client";

import { FAQItem } from "@/types";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";
import RevealComponent from "./RevealComponent";

const FAQAccordion: React.FC<{ faqs: FAQItem[] }> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4 w-full space-y-16 my-5 bg-white">
      <RevealComponent backgroundClass="bg-white">
        <h2 className="text-5xl font-medium text-black">Frequently Asked Questions</h2>
      </RevealComponent>
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <RevealComponent
            key={index}
            outerClass="overflow-hidden" // Removed border and rounding from here
            backgroundClass="bg-white"
            direction="bottom"
          >
            <div className="border rounded-2xl overflow-hidden"> {/* Moved border here */}
              <button
                className="w-full flex cursor-pointer justify-between text-left items-center py-5 px-4 lg:px-10 bg-white text-black text-lg font-medium"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <FaChevronUp className="text-blue-500 transition-transform duration-300 rotate-180" />
                ) : (
                  <FaChevronDown className="text-blue-500 transition-transform duration-300" />
                )}
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-10 py-5 bg-gray-100 text-gray-800">{faq.answer}</div>
              </motion.div>
            </div>
          </RevealComponent>

        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
