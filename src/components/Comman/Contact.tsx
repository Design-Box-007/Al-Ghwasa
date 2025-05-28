'use client'


import React from 'react'
import ContactForm from './ContactForm'
import { motion } from 'framer-motion';
import RevealComponent from './RevealComponent';


const Contact = () => {
    return (
        <section id='contact' className='px-c-20 py-5 my-5 space-y-[56px]'>
            <motion.h1
                className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold font-dm-sans leading-tight mb-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
            >
                {"Let’s Connect &"} <br />
                Collaborate Together
            </motion.h1>
            <RevealComponent>
                <ContactForm className='bg-custom-red-light text-white' />
            </RevealComponent>
        </section>
    )
}

export default Contact