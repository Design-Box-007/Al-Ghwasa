import { industries } from "@/data/products/industryData";
import IndustryCard from "./IndustryCard";
import { motion } from "framer-motion";

export default function IndustryGrid() {
  return (
    <main>
      <div className="mx-20 py-16 mt-5.5">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-[70px]">
            <h1 className="font-dm-sans font-semibold text-4xl md:text-7xl leading-[1.302] text-black mb-4 mx-auto">
              Tailored Solutions for Every Industry
            </h1>
            <p className="font-poppins font-medium text-16 leading-[1.5] text-black max-w-[702px] mx-auto">
              We understand that each industry has unique challenges when it
              comes to detecting and measuring hazardous gases.
            </p>
          </div>
        </motion.div>

        {/* Industry Grid */}
        <motion.div
          initial={{ scale: 1.02, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
          
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                name={industry.title}
                description={industry.description}
                icon={industry.icon}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
