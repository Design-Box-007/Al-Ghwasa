'use client';
import React, { useRef } from 'react';
import images from '@/data/assets';
import Image from 'next/image';

const MX3LeaderLines = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const centerRef = useRef(null);

  return (
    <section className='relative flex flex-col justify-between items-center gap-[60px] p-4 rounded-[40px] overflow-hidden'>
      <div className="relative w-full bg-black/70 py-20 px-5 text-white rounded-[40px] overflow-hidden z-[14]">
        <div className="max-w-7xl mx-auto relative">
          <div
            ref={leftRef}
            className="absolute left-[3%] top-1/2 w-[300px] transform -translate-y-1/2 text-left z-10"
          >
            <h3 className="text-xl font-semibold">Monitor Your Hydration</h3>
            <p className="text-sm text-gray-300 mt-2">
              The MX3 App provides real-time hydration insights, allowing users to track hydration trends, log test results, and optimize performance with personalized data.
            </p>
          </div>

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

          <div
            ref={rightRef}
            className="absolute right-[3%] top-[15%] w-[300px] transform -translate-y-1/2 text-right z-10"
          >
            <h3 className="text-xl font-semibold">Turn Hydration Data into Actionable Insights</h3>
            <p className="text-sm text-gray-300 mt-2">
              Sync test results with the MX3 App to access detailed hydration analytics, trend comparisons, and custom alerts for improved hydration management.
            </p>
          </div>
          <Image src={images.Line1} width={430} height={61} alt="line-1" className="absolute top-1/4 right-[10%]" />
          <Image src={images.Line2} width={519} height={90} alt="line-1" className="absolute bottom-[30%] left-[10%]" />
        </div>
      </div>
      <div className='p-10 space-y-[34px] bg-white rounded-4xl relative z-[14]'>
        <h3 className='font-semibold text-[56px]'>
          {"Seamless Application integration"}
        </h3>
        <p className='font-medium text-[26px]'>
          {"The MX3 App syncs with the MX3 Hydration Testing System to provide real-time test logging, hydration trend analysis, and custom alerts. With Bluetooth connectivity and interactive data visualization, users can track hydration levels, optimize fluid intake, and enhance performance effortlessly."}
        </p>
      </div>
      <Image src={images.MX32} width={1416} height={1352} alt='bg-image' className='absolute inset-0 object-cover w-full h-full z-[13]' />
    </section>
  );
};

export default MX3LeaderLines;
