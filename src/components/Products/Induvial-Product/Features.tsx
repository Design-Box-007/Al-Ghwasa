'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import IndustryCard from '../Industry/IndustryCard';
import { FaVials, FaSuitcaseRolling, FaBolt } from "react-icons/fa";

const Features = () => {
  const features = [
  {
    title: "Wide Gas Range",
    icon: FaVials,
    description: "From common industrial gases to specialized chemicals",
  },
  {
    title: "Portable & Lightweight",
    icon: FaSuitcaseRolling,
    description: "Ideal for on-site measurements",
  },
  {
    title: "Instant Readings",
    icon: FaBolt,
    description: "Clear scale markings for quick results",
  },
];
    return (
        <section className="py-16 lg:py-10 bg-white w-full">
            <div className="w-full">
                <motion.div 
                    className="rounded-2xl flex flex-col gap-[14px] justify-between overflow-hidden shadow-md bg-gray-100 border border-gray-200 p-5 mx-4 sm:mx-6 lg:mx-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {/* Product Photograph Section */}
                    <div className="relative w-full h-150 flex flex-col justify-center items-center">
                        <Image
                            src="/images/Gastec/Gastec-2.png"
                            alt="Specialized Gas Sampling Kit"
                            width={800}
                            height={100}
                            className="object-cover rounded-2xl scale-x-[-1]"
                        />
                    </div>

               
                   
                </motion.div>
            </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-9 mx-10 ">
                      {features.map((industry, index) => (
                        <IndustryCard
                          key={index}
                          name={industry.title}
                          description={industry.description}
                          icon={industry.icon}
                        />
                      ))}
                    </div>
        </section>
    );
};

export default Features;
