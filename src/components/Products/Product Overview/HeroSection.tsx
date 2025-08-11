'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import images from '@/data/assets';
import Link from 'next/link';

const ProductOverviewHero = () => {
  const products = [
    {
      id: 'gv100',
      title: 'GASTEC GV–100',
      desc: 'Standard 100 ml piston pump with stroke counter.',
      image: images.gastecSmall,
      href: '/products/gastec-gv-100',
    },
    {
      id: 'gv110',
      title: 'GASTEC GV–110',
      desc: 'Standard 100 ml piston pump with stroke counter.',
      image: images.gastecSmall,
      href: '/products/gastec-gv-110',
    },
    {
      id: 'gv50',
      title: 'GASTEC GV–50',
      desc: 'Standard 100 ml piston pump with stroke counter.',
      image: images.gastecSmall,
      href: '/products/gastec-gv-50',
    },
  ];

  return (
    <>
    <header className="relative min-h-[680px] lg:min-h-[760px] rounded-3xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.product860}
          alt="Product Overview Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-10 h-full flex flex-col">
        {/* Top left headline */}
        <div className="pt-16 lg:pt-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[940px] text-left font-semibold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] leading-[1.05] tracking-tight"
          >
            Next–Gen Detection for Critical Environments.
          </motion.h1>

          {/* Certifications row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 flex items-center gap-4 text-white"
          >
            <Image src={images.Frame} alt="certified" width={32} height={32} className="h-8 w-8" />
            <p className="text-lg sm:text-xl lg:text-2xl font-medium">OSHA | NIOSH | ISO</p>
          </motion.div>
        </div>

        {/* Bottom-right aligned content */}
        <div className="flex-1" />
        <div className="w-full flex justify-end pt-80
         pb-2">
          <div className="max-w-3xl text-right">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-white/90 text-base sm:text-lg lg:text-xl"
            >
              Al Ghwasa delivers certified safety solutions tailored for industrial hygiene, environmental monitoring, and worker protection.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-4 flex justify-end"
            >
              <Link
                href="/products"
                className="group relative inline-flex items-center rounded-full bg-white text-black px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium shadow-md hover:bg-gray-100"
              >
                Explore our Products
                <span className="ml-3 h-7 w-7 rounded-full bg-black text-white grid place-items-center text-xs">→</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom cards strip (anchored to bottom) */}
      </div>

      
    </header>

    {/* Cards section below the hero image */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative z-20 w-full px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-14 lg:-mt-16 xl:-mt-20"
    >
      <div className="w-full rounded-2xl bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white p-3 sm:p-4 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="rounded-2xl border border-gray-200 bg-[#F5F5F7] p-3 sm:p-4 flex gap-4 items-center">
              <div className="shrink-0 rounded-xl overflow-hidden bg-white/80 p-2">
                <Image src={product.image} alt={product.title} width={120} height={80} className="h-16 w-28 object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">{product.title}</h3>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 line-clamp-2">{product.desc}</p>
                <div className="mt-3 flex items-center justify-between">
                  <Link href={product.href} className="text-sm font-medium text-gray-900 underline underline-offset-4">View Products</Link>
                  <span className="h-7 w-7 rounded-full grid place-items-center bg-white text-gray-900 shadow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default ProductOverviewHero;
