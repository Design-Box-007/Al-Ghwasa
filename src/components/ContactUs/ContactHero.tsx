'use client'

import { motion } from 'framer-motion'
import images from '@/data/assets'
import Image from 'next/image'
import React from 'react'

const ContactHero = () => {
  return (
    <header className="relative w-full bg-white mt-[120px] lg:mt-5">
      <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[90vh] min-h-[450px] rounded-[20px] overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <Image
          src={images.ContactUsHero}
          alt="Contact Hero"
          fill
          priority
          className="absolute inset-0 object-cover object-center brightness-75 rounded-[20px]"
        />

        {/* Content */}
        <div className="relative z-20 text-white text-center px-4 md:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-5xl md:text-4xl lg:text-6xl font-medium mb-2"
          >
            Connect with
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="font-bold leading-tight text-7xl md:text-6xl lg:text-[150px] xl:text-[200px]"
          >
            Al Ghwasa
          </motion.h1>
        </div>
      </div>
    </header>
  )
}

export default ContactHero
