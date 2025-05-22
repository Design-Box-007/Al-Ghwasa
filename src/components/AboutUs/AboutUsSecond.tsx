'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import images from '@/data/assets'


const headingVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
}

const paragraphVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
}


const AboutUsSecond = () => {

    const aboutUsSecondContent = [
        {

            title: "Integrity",
            content: "We build trust through transparency.",
            color: "#3A5088"
        },
        {

            title: "Innovation",
            content: "We embrace cutting-edge solutions.",
            color: "#FF6B6B"
        },
        {

            title: "Reliability",
            content: "Our clients can always count on us.",
            color: "#00897B"
        },
    ]

    return (
        <section className="space-y-4 py-5 px-c-20">
            <div className="flex flex-col gap-4">
                <motion.h1
                    className="font-medium text-4xl lg:text-[60px] flex-1"
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    A Legacy of Innovation, Reliability, and Growth
                </motion.h1>
                <div className="flex flex-col gap-2 justify-around flex-1">
                    <motion.p
                        className="text-xl font-light text-secondary"
                        variants={paragraphVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        {"Founded in 1988, Al Ghwasa has become a trusted name in providing high-quality equipment. Our journey reflects a commitment to quality, customer satisfaction, and technological advancement—helping businesses across the UAE operate with efficiency and confidence."}
                    </motion.p>
                    <motion.p
                        className="text-xl font-light text-secondary"
                        variants={paragraphVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        Al Ghwasa is a trusted name in the hospitality, health, and safety industries, delivering specialized testing solutions that prioritize quality, accuracy, and compliance. With over a decade of industry presence, we are proud to be the authorized distributor of world-renowned brands, including Alla France Oil Tester, MX3 Diagnostics, and Gastec—each known for precision and reliability.
                    </motion.p>
                    <motion.p
                        className="text-xl font-light text-secondary"
                        variants={paragraphVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        Our product portfolio focuses on three key testing categories:
                    </motion.p>
                    <motion.p
                        className="text-xl font-light text-secondary"
                        variants={paragraphVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        Food Oil Testing – With Alla France’s oil testers, we help kitchens and food production facilities maintain oil quality and comply with food safety standards. Our solutions support consistent taste, healthier frying, and cost-effective oil usage.
                    </motion.p>
                    <motion.p
                        className="text-xl font-light text-secondary"
                        variants={paragraphVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        Hydration Testing – In partnership with MX3 Diagnostics, we offer portable hydration testing devices ideal for sports teams, military units, and high-risk work environments. Our solutions empower real-time hydration monitoring to prevent dehydration-related risks.
                    </motion.p>
                    <motion.p
                        className="text-xl font-light text-secondary"
                        variants={paragraphVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        Gas Detection & Air Quality Monitoring – As the regional supplier of Gastec, we provide precise and easy-to-use gas detection tubes and monitors for industrial and occupational safety. Our tools are used across laboratories, factories, and health inspection agencies to ensure breathable air and hazardous gas compliance.
                    </motion.p>
                    <motion.p
                        className="text-xl font-light text-secondary"
                        variants={paragraphVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        At Al Ghwasa, we are committed to advancing health, hygiene, and operational excellence by equipping professionals with innovative tools they can rely on. Our team provides end-to-end support—from product selection and training to after-sales service—ensuring our clients achieve the highest standards in quality control and safety management.
                    </motion.p>
                </div>

            </div>
            {/* Image Reveal Animation using an overlay */}
            <div className="relative w-full h-auto md:h-[500px] rounded-2xl overflow-hidden flex items-end p-4">
                <Image
                    loading="lazy"
                    src={images.AboutSection}
                    alt="about"
                    width={1360}
                    height={700}
                    className="absolute inset-0 z-10 w-full h-full object-cover"
                />

                <div className='flex flex-col md:flex-row gap-4 w-full h-auto relative z-30'>
                    {
                        aboutUsSecondContent.map((data, index) => (
                            <div className={`flex-1 space-y-4 bg-white px-4 py-6 rounded-2xl`} style={{ color: data.color }} key={index}>
                                <h5 className="text-3xl sm:text-4xl font-bold">{data.title}</h5>
                                <p className="text-lg sm:text-xl font-light mt-2">
                                    {data.content}
                                </p>
                            </div>
                        ))
                    }
                </div>
                {/* <motion.div
                    className="absolute top-0 right-0 h-full w-full bg-white"
                    initial={{ width: "100%" }}
                    whileInView={{ width: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                /> */}
            </div>
        </section>
    )
}

export default AboutUsSecond
