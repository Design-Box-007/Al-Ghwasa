import Image from "next/image";

export default function InduvialHero() {
  return (
 
    <header className="w-full bg-white pt-[150px] px-c-20 lg:p-c-20 relative">
      <div className="relative overflow-hidden rounded-[20px] min-h-screen lg:min-h-[700px] lg:h-[800px] px-4 md:px-[5%] py-6 md:py-10 flex flex-col lg:flex-row items-center gap-8">
        {/* Background Image */}
        <Image
          src="/images/Gastec3/gas-detection-accessories/351A_5_GV_100.jpg"
          alt="Hero Background"
          className="absolute inset-0 brightness-[.6] z-10 object-cover object-center w-full h-full rounded-[20px]"
          fill
        />
           {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-5 ">
        <h1 className="text-white font-dm-sans font-semibold text-7xl leading-tight mb-6">
          GASTEC Detector Tube & Pump System
        </h1>

        <p className="text-white font-poppins font-medium text-base leading-relaxed mb-6 max-w-3xl mx-auto">
          Experience precision gas measurement with GASTEC's trusted manual
          sampling pumps and over 500 compatible detector tubes. Reliable,
          portable, and built for the toughest field environments.
        </p>

        {/* CTA Button */}
        <div className="inline-flex items-center space-x-2 bg-white text-secondary px-5 py-2 rounded-3xl border border-gray-300">
          <span className="font-poppins font-medium text-base">
            Browse Detector Tubes
          </span>
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5 text-secondary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      </div>

   
    </header>
  );
}
