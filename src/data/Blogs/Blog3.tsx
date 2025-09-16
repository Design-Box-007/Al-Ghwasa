import Link from "next/link";
import React from "react";

const Blog3 = () => {
  return (
    <section className="blog-content space-y-6 text-base font-sans">
      {/* Introduction */}
      <p className="font-semibold text-xl">Introduction</p>
      <p>
        Not every workplace has the same risks. Selecting the right gas
        detection measures can mean the difference between reactive measures and
        proactive protection.
      </p>

      {/* Portable Gas Detectors */}
      <p className="font-semibold text-xl">Portable Gas Detectors</p>
      <p>
        Compact, battery-operated devices that workers can carry anywhere.
      </p>
      <p className="font-semibold text-xl">Ideal for:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Inspections and maintenance rounds</li>
        <li>Confined spaces</li>
        <li>Temporary or short-term monitoring</li>
      </ul>

      {/* Fixed Gas Detectors */}
      <p className="font-semibold text-xl">Fixed Gas Detectors</p>
      <p>
        Permanently installed units that continuously track gas levels and send
        instant alerts in case of leaks.
      </p>
      <p className="font-semibold text-xl">Ideal for:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Factories and manufacturing plants</li>
        <li>Laboratories and storage facilities</li>
        <li>High-risk, ongoing operations</li>
      </ul>

      {/* How to Choose */}
      <p className="font-semibold text-xl">How to Choose</p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <span className="font-semibold">Portable:</span> Best for mobile staff,
          inspections, and temporary setups
        </li>
        <li>
          <span className="font-semibold">Fixed:</span> Best for continuous
          monitoring in high-risk environments
        </li>
      </ul>

      {/* Conclusion */}
      <p className="font-semibold text-xl">Conclusion</p>
      <p>
        Understanding your operational needs is the first step toward better
        industrial safety. Al Ghwasa has guided businesses across the UAE, GCC,
        and Africa in selecting and implementing the right gas detection
        technologies to keep workplaces protected and compliant.
      </p>

      {/* Call to Action */}
      <p className="font-semibold text-xl">Call to Action</p>
      <p>
        Need expert guidance? Contact our <Link href={"/"}><span className="link">Expert Team</span></Link> to get personalised help
        choosing the best gas detector for your business.
      </p>
    </section>
  );
};

export default Blog3;
