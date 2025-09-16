// "use client";

// import React from "react";
// import Image from "next/image";

// const trustedPartnersData: { logo: string; alt: string }[] = [
//   { logo: "/images/All-Product-Images/pikaso-creations-2025-09-16_11_40/freepik__enhance__13235.png", },
//   { logo: "/images/All-Product-Images/pikaso-creations-2025-09-16_11_40/freepik__enhance__13236.png", },
//   { logo: "/images/All-Product-Images/pikaso-creations-2025-09-16_11_40/freepik__enhance__13237.png", },
//   { logo: "/images/All-Product-Images/pikaso-creations-2025-09-16_11_40/freepik__enhance__13238.png", },
//   { logo: "/images/All-Product-Images/pikaso-creations-2025-09-16_11_40/freepik__enhance__13239.png", },
//   { logo: "/images/All-Product-Images/pikaso-creations-2025-09-16_11_40/freepik__enhance__13240.png", },

// ];

// const TrustedPartners = () => {
//   return (
//     <section className="space-y-8 bg-background pt-10 overflow-hidden">
//       <h5 className="text-xl sm:text-2xl lg:text-3xl font-medium text-custom-red-light font-poppins text-center">
//         Trusted By
//       </h5>

//       {/* Slider Container */}
//       <div className="relative w-full overflow-hidden">
//         <div className="flex animate-slide whitespace-nowrap">
//           {[...trustedPartnersData].map(
//             ({ logo, alt }, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-center px-8 sm:px-12 lg:px-16"
//               >
//                 <Image
//                   src={logo}
//                   alt={alt}
//                   width={250} // ⬆️ Bigger width
//                   height={120} // ⬆️ Bigger height
//                   className="object-contain"
//                 />
//               </div>
//             )
//           )}
//         </div>
//       </div>

//       <hr />
//     </section>
//   );
// };

// export default TrustedPartners;

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const TrustedPartners = () => {
  const trustedPartnersData: { logo: string }[] = [
    {
      logo: "/images/All-Product-Images/pikaso-creations-2025-09-16_11_40/freepik__enhance__13235.png",
    },
    {
      logo: "/images/All-Product-Images/pikaso-creations-2025-09-16_11_40/freepik__enhance__13236.png",
    },
    {
      logo: "/images/All-Product-Images/pikaso-creations-2025-09-16_11_40/freepik__enhance__13237.png",
    },
    {
      logo: "/images/All-Product-Images/pikaso-creations-2025-09-16_11_40/freepik__enhance__13238.png",
    },
    {
      logo: "/images/All-Product-Images/pikaso-creations-2025-09-16_11_40/freepik__enhance__13239.png",
    },
    {
      logo: "/images/All-Product-Images/pikaso-creations-2025-09-16_11_40/freepik__enhance__13240.png",
    },
    {
      logo: "/images/All-Product-Images/pikaso-creations-2025-09-16_11_40/freepik__enhance__13236.png",
    },
    {
      logo: "/images/All-Product-Images/pikaso-creations-2025-09-16_11_40/freepik__enhance__13237.png",
    },
  ];
  return (
    <div className="w-full py-6 space-y-4">
      <h5 className="text-xl sm:text-2xl lg:text-3xl font-medium text-custom-red-light font-poppins text-center">
        Trusted By{" "}
      </h5>

      <Marquee gradient={false} speed={40}>
        {trustedPartnersData.map((item, index) => (
          <div
            key={index}
            className="mx-8 py-12 flex items-center justify-center min-w-[100px] h-[64px]"
          >
            <Image
              src={item.logo} // ✅ fixed here
              alt={`Partner ${index + 1}`}
              width={120}
              height={64}
              quality={100}
              className="object-contain h-16 w-auto"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TrustedPartners;
