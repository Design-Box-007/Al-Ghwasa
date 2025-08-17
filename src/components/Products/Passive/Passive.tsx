import React from "react";
import PassiveHero from "./Hero";
import PassiveHero2 from "./Hero2";
import FeatureGridSection from "@/components/Comman/FeatureGridSection";
import PassiveSteps from "./Steps";
import PassiveExplore from "./PassiveExplore";
import PassiveTable from "./PassiveOverView";

const Passive = () => {
  return (
    <div>
      <PassiveHero />
      <PassiveHero2 />
      <PassiveTable />
      <FeatureGridSection
        heading={<span>Why Choose Al Ghwasa Dosimeter Tubes</span>}
        subheading={
          <span>
            Discover the key advantages that make our dosimeter tubes the smart
            choice for workplace air quality monitoring.
          </span>
        }
        columns={2}
        features={[
          {
            icon: (
              <svg
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="5" />
                <path d="M12 3v2M21 12h-2M12 21v-2M5 12H3" />
                <circle
                  cx="12"
                  cy="12"
                  r="1.5"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            ),
            title: (
              <span className="text-2xl md:text-3xl font-bold text-blue-900">
                Authorized GASTEC Distributor
              </span>
            ),
            description: (
              <span className="text-lg md:text-xl text-gray-600 block mx-auto max-w-xl">
                Get 100% genuine GASTEC products with complete warranty and
                technical documentation.
              </span>
            ),
          },
          {
            icon: (
              <svg
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" />
                <path d="M9 12l2.2 2.2L15 10.5" />
              </svg>
            ),
            title: (
              <span className="text-2xl md:text-3xl font-bold text-blue-900">
                Product & Industry Expertise
              </span>
            ),
            description: (
              <span className="text-lg md:text-xl text-gray-600 block mx-auto max-w-xl">
                Our team understands your industry&rsquo;s needs — from lab
                safety to field detection.
              </span>
            ),
          },
          {
            icon: (
              <svg
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 9a7 7 0 0 0-10 0L4 15v5h5l6-6a7 7 0 0 0 0-10z" />
                <path d="M14 7L7 14" />
                <path d="M9.5 16.5L7 14" />
              </svg>
            ),
            title: (
              <span className="text-2xl md:text-3xl font-bold text-blue-900">
                Fast Regional Delivery
              </span>
            ),
            description: (
              <span className="text-lg md:text-xl text-gray-600 block mx-auto max-w-xl">
                Stocked and shipped locally for faster turnaround and minimal
                downtime.
              </span>
            ),
          },
          {
            icon: (
              <svg
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <ellipse cx="9.5" cy="7" rx="5.5" ry="3" />
                <path d="M4 7v6c0 1.7 2.5 3 5.5 3S15 14.7 15 13V7" />
                <path d="M19 14l-1.2 2.2L15.5 17l2 1.7L17 21l2-1.1L21 21l-.5-2.3L22 17l-2.3-.8L19 14z" />
              </svg>
            ),
            title: (
              <span className="text-2xl md:text-3xl font-bold text-blue-900">
                Technical Support & Training
              </span>
            ),
            description: (
              <span className="text-lg md:text-xl text-gray-600 block mx-auto max-w-xl">
                Get expert setup guidance, calibration support, and usage
                training when you need it.
              </span>
            ),
          },
        ]}
      />
      <PassiveSteps />
      <PassiveExplore />
    </div>
  );
};

export default Passive;
