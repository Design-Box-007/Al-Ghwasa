import FeatureGridSection from "@/components/Comman/FeatureGridSection";
import GastecHero from "./Hero";
import Generation from "./Generation";
import Datasheet from "./DataSheet";
import GastecExplore from "./GastecExplore";

export default function Gastec() {
  return (
    <div>
      <GastecHero />
      <FeatureGridSection
        heading={<span>Why Choose the PD-1C?</span>}
        subheading={
          <span>
            The PD-1C combines advanced gas generation technology with easy
            operation, making it the ideal choice for accurate calibration in
            diverse settings.
          </span>
        }
        columns={2}
        features={[
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636a9 9 0 010 12.728m-12.728 0a9 9 0 010-12.728m2.121 2.121a5.5 5.5 0 017.778 0l1.415 1.414m-10.607 0a5.5 5.5 0 017.778 0"
                />
              </svg>
            ),
            title: (
              <span className="text-2xl md:text-3xl font-bold text-blue-900">
                Continuous Generation
              </span>
            ),
            description: (
              <span className="text-lg md:text-xl text-gray-600 block mx-auto max-w-xl">
                Maintains stable output for long durations without manual
                intervention.
              </span>
            ),
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            ),
            title: (
              <span className="text-2xl md:text-3xl font-bold text-blue-900">
                Versatile Concentrations
              </span>
            ),
            description: (
              <span className="text-lg md:text-xl text-gray-600 block mx-auto max-w-xl">
                Supports a wide range of gas concentrations for different
                applications.
              </span>
            ),
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" strokeWidth="2" />
              </svg>
            ),
            title: (
              <span className="text-2xl md:text-3xl font-bold text-blue-900">
                Unmatched Accuracy
              </span>
            ),
            description: (
              <span className="text-lg md:text-xl text-gray-600 block mx-auto max-w-xl">
                Uses advanced weight loss and dilution flow control for precise
                output.
              </span>
            ),
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8h13a4 4 0 110 8H7m10-8l4 4-4 4"
                />
              </svg>
            ),
            title: (
              <span className="text-2xl md:text-3xl font-bold text-blue-900">
                Reliable Output Flow
              </span>
            ),
            description: (
              <span className="text-lg md:text-xl text-gray-600 block mx-auto max-w-xl">
                Integrated mass flow controller ensures stable and repeatable
                performance.
              </span>
            ),
          },
        ]}
      />
      <Generation />
      <Datasheet/>
      <GastecExplore/>
    </div>
  );
}
