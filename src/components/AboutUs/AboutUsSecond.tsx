"use client";

import Image from "next/image";
import React from "react";
import images from "@/data/assets";
import RevealComponent from "../Comman/RevealComponent";
import { motion } from "framer-motion";

const AboutUsSecond = () => {
  const aboutUsSecondContent = [
    {
      title: "Integrity",
      content: "We build trust through transparency.",
      color: "#3A5088",
    },
    {
      title: "Innovation",
      content: "We embrace cutting-edge solutions.",
      color: "#FF6B6B",
    },
    {
      title: "Reliability",
      content: "Our clients can always count on us.",
      color: "#00897B",
    },
  ];

  return (
    <section className="space-y-7 px-c-20">
      <div className="flex flex-col gap-4">
        <motion.h1
          className="font-medium text-3xl md:text-4xl lg:text-[60px] flex-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          A Legacy of Innovation, Reliability, and Growth
        </motion.h1>
        <RevealComponent
          direction="bottom"
          outerClass="flex flex-col gap-4 justify-around flex-1"
        >
          <p className="text-xl font-light text-secondary">
            Founded in 1988, Al Ghwasa has established itself as a trusted name
            in gas detection and air quality monitoring across the UAE and the
            wider Gulf region. With a strong commitment to safety, accuracy, and
            regulatory compliance, we are proud to be the authorized distributor
            of GASTEC—a globally recognized leader in gas detection
            technologies.
          </p>
          <p className="text-xl font-light text-secondary">
            At Al Ghwasa, we specialize in supplying GASTEC gas detection tubes,
            gas sampling pumps, and advanced air quality monitoring systems to
            industries where accurate gas measurement is essential. From
            hazardous gas detection in industrial plants to indoor air quality
            assessments in public and private facilities, our solutions are
            relied on by safety engineers, environmental consultants, and
            government authorities.
          </p>
          <p className="text-xl font-light text-secondary">
            Our GASTEC product line supports a wide range of applications,
            including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-xl font-light text-secondary pl-4">
            <li>
              <strong>Industrial & Occupational Gas Detection</strong> – Monitor
              toxic and flammable gases in factories, refineries, construction
              sites, and confined spaces.
            </li>
            <li>
              <strong>Environmental Testing</strong> – Analyze pollutants in
              soil, water, and ambient air to ensure compliance with
              environmental regulations.
            </li>
            <li>
              <strong>Firefighting & Emergency Response</strong> – Quickly
              identify dangerous gases in disaster zones and emergency
              situations.
            </li>
            <li>
              <strong>Indoor Air Quality Monitoring</strong> – Measure carbon
              monoxide, carbon dioxide, and VOCs in schools, hospitals, offices,
              and other indoor spaces.
            </li>
            <li>
              <strong>Shipping & Fumigation Safety</strong> – Detect residual
              fumigants in containers to ensure safe inspection and unloading.
            </li>
          </ul>
          <p className="text-xl font-light text-secondary">
            We provide end-to-end support for all GASTEC systems—including
            product selection, usage training, calibration guidance, and
            after-sales service. Our technical team works closely with clients
            to tailor solutions that meet both operational needs and safety
            standards.
          </p>
          <p className="text-xl font-light text-secondary">
            Serving clients across the UAE, Saudi Arabia, Qatar, Oman, Bahrain,
            Kuwait, and South Africa, Al Ghwasa is your go-to source for
            dependable and easy-to-use gas detection systems from GASTEC.
          </p>
        </RevealComponent>
      </div>
      {/* Image Reveal Animation using an overlay */}
      <RevealComponent outerClass="relative w-full h-auto md:h-[500px] rounded-2xl overflow-hidden flex items-end p-4">
        <Image
          loading="lazy"
          src={images.AboutSection}
          alt="about"
          width={1360}
          height={700}
          className="absolute inset-0 z-10 w-full h-full object-cover"
        />

        <div className="flex flex-col md:flex-row gap-4 w-full h-auto relative z-30">
          {aboutUsSecondContent.map((data, index) => (
            <div
              className={`flex-1 space-y-4 bg-white px-4 py-6 rounded-2xl`}
              style={{ color: data.color }}
              key={index}
            >
              <h5 className="text-3xl sm:text-4xl font-bold">{data.title}</h5>
              <p className="text-lg sm:text-xl font-light mt-2">
                {data.content}
              </p>
            </div>
          ))}
        </div>
      </RevealComponent>
    </section>
  );
};

export default AboutUsSecond;
