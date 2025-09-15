"use client";

import React from "react";
import { IconType } from "react-icons";
import {
  FaApple,
  FaGoogle,
  FaAmazon,
  FaMicrosoft,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const trustedPartnersData: { icon: IconType; partnerName: string }[] = [
  { icon: FaApple, partnerName: "Apple" },
  { icon: FaGoogle, partnerName: "Google" },
  { icon: FaAmazon, partnerName: "Amazon" },
  { icon: FaMicrosoft, partnerName: "Microsoft" },
  { icon: FaFacebook, partnerName: "Facebook" },
  { icon: FaTwitter, partnerName: "Twitter" },
  { icon: FaInstagram, partnerName: "Instagram" },
];

const TrustedPartners = () => {
  return (
    <section className="space-y-8 bg-background pt-10 overflow-hidden">
      <h5 className="text-3xl font-medium text-custom-red-light font-poppins text-center">
        Trusted By
      </h5>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-slide whitespace-nowrap">
          {[...trustedPartnersData, ...trustedPartnersData].map(
            ({ partnerName, icon: Icon }, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 text-xl font-semibold capitalize px-10"
              >
                <Icon size={28} />
                <span>{partnerName}</span>
              </div>
            )
          )}
        </div>
      </div>

      <hr />
    </section>
  );
};

export default TrustedPartners;
