"use client";

import { FAQItem } from "@/types";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

const FAQAccordion: React.FC<{ faqs: FAQItem[] }> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4 w-full space-y-16 my-5">
      <h2 className="text-5xl font-medium text-black">Frequently Asked Questions</h2>
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-2xl overflow-hidden">
            <button
              className="w-full flex justify-between items-center py-5 px-10 bg-white text-black text-lg font-medium"
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
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
