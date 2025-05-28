'use client';
import React, { useRef } from 'react';
import images from '@/data/assets';
import Image from 'next/image';
import { motion } from "framer-motion";

const MX3LeaderLines = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const centerRef = useRef(null);

  return (
    <section className='relative flex flex-col justify-between items-center gap-[60px] p-4 rounded-[40px] overflow-hidden'>
      <div className="relative w-full bg-black/70 py-20 px-5 text-white rounded-[40px] overflow-hidden z-[14]">
        <div className="max-w-7xl mx-auto relative">

          {/* Fade-in Left Text */}
          <motion.div
            ref={leftRef}
            className="hidden lg:block absolute left-[3%] top-1/2 w-[300px] transform -translate-y-1/2 text-left z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-semibold">Monitor Your Hydration</h3>
            <p className="text-sm text-gray-300 mt-2">
              The MX3 App provides real-time hydration insights, allowing users to track hydration trends, log test results, and optimize performance with personalized data.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <Image
              ref={centerRef}
              src={images.MX313}
              alt="Tracking UI"
              width={398}
              height={813}
              className="z-0"
            />
          </div>

          {/* Fade-in Right Text */}
          <motion.div
            ref={rightRef}
            className="hidden lg:block absolute right-[3%] top-[15%] w-[300px] transform -translate-y-1/2 text-right z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-semibold">Turn Hydration Data into Actionable Insights</h3>
            <p className="text-sm text-gray-300 mt-2">
              Sync test results with the MX3 App to access detailed hydration analytics, trend comparisons, and custom alerts for improved hydration management.
            </p>
          </motion.div>

          {/* Fade-in Line1 */}
          <motion.div
            className="hidden lg:block absolute top-1/4 right-[10%]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image src={images.Line1} width={430} height={61} alt="line-1" />
          </motion.div>

          {/* Fade-in Line2 */}
          <motion.div
            className="hidden lg:block absolute bottom-[30%] left-[10%]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image src={images.Line2} width={519} height={90} alt="line-2" />
          </motion.div>
        </div>
      </div>

      {/* Fade-in Bottom Text Box */}
      <motion.div
        className='p-10 space-y-[34px] bg-white rounded-4xl relative z-[14]'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className='font-semibold text-3xl'>
          Seamless Application integration
        </h3>
        <p className='font-medium text-lg'>
          The MX3 App syncs with the MX3 Hydration Testing System to provide real-time test logging, hydration trend analysis, and custom alerts. With Bluetooth connectivity and interactive data visualization, users can track hydration levels, optimize fluid intake, and enhance performance effortlessly.
        </p>
      </motion.div>

      {/* Background Image (not animated) */}
      <Image src={images.MX32} width={1416} height={1352} alt='bg-image' className='absolute inset-0 object-cover w-full h-full z-[13]' />
    </section>
  );
};

export default MX3LeaderLines;
