import Link from "next/link";
import React from "react";

const Blog5 = () => {
  return (
    <section className="blog-content space-y-6 text-base font-sans">
      {/* Introduction */}
      <p className="font-semibold text-xl">Introduction</p>
      <p>
        Selecting the correct gas detection device is critical for workplace
        safety and compliance. Al Ghwasa helps organisations across the UAE,
        GCC, and Africa choose and implement the right solutions — including
        authentic Gastec models — to match their specific needs.
      </p>

      {/* Steps */}
      <p className="font-semibold text-xl">Steps to Choose the Best Device</p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <span className="font-semibold">Identify the gases present –</span>{" "}
          Determine which gases require monitoring in your operations.
        </li>
        <li>
          <span className="font-semibold">Assess the environment –</span>{" "}
          Confined spaces versus open areas demand different monitoring
          approaches.
        </li>
        <li>
          <span className="font-semibold">Select the device type –</span>{" "}
          Portable for mobility and inspections, fixed for continuous monitoring
          in high-risk zones.
        </li>
        <li>
          <span className="font-semibold">Review key features –</span> Alarm
          systems, battery life, calibration options, and data logging all
          impact effectiveness.
        </li>
      </ul>

      {/* Tip */}
      <p className="italic">
        💡 Tip: Consult with Al Ghwasa’s expert team to match your operational
        requirements with the most suitable technology, including trusted Gastec
        models.
      </p>

      {/* Conclusion */}
      <p className="font-semibold text-xl">Conclusion</p>
      <p>
        Making an informed choice ensures worker safety, regulatory compliance,
        and peace of mind. Al Ghwasa provides tailored guidance and authentic
        equipment to keep your workplace protected.
      </p>

      {/* Call to Action */}
      <p className="font-semibold text-xl">Call to Action</p>
      <p>
        Get a{" "}
        <Link href={"/"}>
          <span className="link">Personalized Consultation</span>
        </Link>{" "}
        to find the perfect gas detection solution for your business.
      </p>
    </section>
  );
};

export default Blog5;
