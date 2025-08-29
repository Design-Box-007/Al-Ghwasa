// import SpecializedKits from "@/components/Categories/SpecializedKits";
import { FAQItem, NavLinksType, SocialMediaLinks } from "@/types";
import formatToHyphenated from "@/utils/formatPathName";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaMedium,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const navLinks: NavLinksType[] = [
  // { navTitle: "Home", navHref: "/gastec-2" },
  // { navTitle: "Gastec", navHref: "/product-overview" },
  // { navTitle: "Gastec Tube Detection Table", navHref: "/Detection-table" },
  { navTitle: "Home", navHref: "/" },
  { navTitle: "About Us", navHref: "/about" },

  {
    navTitle: "Solutions",
    navHref: "/categories?category=Solutions",
    subLinks: [
      {
        navTitle: "Specialised Sampling Kits",
        navHref: "/categories?category=Specialized Sampling Kits",
        subLinks: [
          {
            navTitle: "H2S Data Logger-GHS-8AT-EX",
            navHref: `/categories/${formatToHyphenated("GHS-8AT EX Monitor")}`,
          },
          {
            navTitle: "Automatic Air Sampling Pump GSP-501FT",
            navHref: `/categories/${formatToHyphenated(
              "GHS-501FT Fit Tester"
            )}`,
          },
          {
            navTitle: "Toxic gas detection kit TG-1",
            navHref: `/categories/${formatToHyphenated(
              "TG-1EN Gas Sampling Kit"
            )}`,
          },
          {
            navTitle: "GASTEC Compressed Breathing Air Measurement KitCG-1",
            navHref: `/categories/${formatToHyphenated(
              "GASTEC Calibration Kit"
            )}`,
          },
          {
            navTitle: "Gas sampling pump kit GV-100LS",
            navHref: `/categories/${formatToHyphenated("GV-100S Hand Pump")}`,
          },
          {
            navTitle: "Gas sampling pump kit GV-100S",
            navHref: `/categories/${formatToHyphenated("GV-110S Hand Pump")}`,
          },
        ],
      },
      {
        navTitle: "Gas Generator Solutions",
        navHref: "/categories?category=Gas Generator Solutions",
        subLinks: [{ navTitle: "Permeater PD-1C" }],
      },
      {
        navTitle: "Gas Detection Passive Monitoring",
        navHref: "/categories?category=Gas Detection Passive Monitoring",
        subLinks: [{ navTitle: "Dosimeter Tubes – TWA" }],
      },
      {
        navTitle: "Accessories",
        navHref: "/categories?category=Accessories",
        subLinks: [
          { navTitle: "351A Extension Hoses" },
          { navTitle: "Fumigation Probe 380" },
          { navTitle: "Pyrotec Pyrolyzer 860" },
          { navTitle: "Extension Pole 350BP-2" },
          { navTitle: "Twin Tube Holder GV500" },
        ],
      },
      // {
      //   navTitle: "Support Materials",
      //   subLinks: [
      //     { navTitle: "Product Manuals" },
      //     { navTitle: "Safety Datasheets" },
      //   ],
      // },
      {
        navTitle: "GASTEC Detector Tubes",
        navHref: "/Detection-table",
        subLinks: [
          { navTitle: "Detection Table", navHref: "/Detection-table" },
        ],
      },
    ],
  },

  { navTitle: "Industries", navHref: "/Industry" },
  { navTitle: "Experience Center", navHref: "/gallery" },
  { navTitle: "Blogs", navHref: "/blogs" },
];

export const socialMedia: SocialMediaLinks[] = [
  {
    icon: FaFacebook,
    link: "https://www.facebook.com/profile.php?id=100069135072790",
  },
  { icon: FaLinkedin, link: "https://x.com/Spacesculpt_uae " },
  { icon: FaInstagram, link: "https://instagram.com" },
  { icon: FaXTwitter, link: "https://x.com/Spacesculpt_uae" },
  { icon: FaMedium, link: "https://medium.com/@Spacesculp" },
  { icon: FaYoutube, link: "https://www.youtube.com/@AlGhwasa" },
];

export const homePagefaqs: FAQItem[] = [
  {
    question:
      "Who is the official distributor of GASTEC in the Middle East and Africa?",
    answer:
      "Al Ghwasa is the authorized distributor for GASTEC across the Middle East and Africa.",
  },
  {
    question: "Do you offer training for using GASTEC equipment?",
    answer:
      "Yes, we provide product training, demonstrations, and technical support.",
  },
  {
    question: "Can I buy GASTEC products directly online?",
    answer:
      "No, GASTEC devices are not sold online. You can send us an inquiry by selecting the device and tubes you need—our team will contact you with pricing and assistance.",
  },
  {
    question: "How can I request a quote?",
    answer:
      "Visit our website, choose the products you’re interested in, and submit an inquiry. Our team will respond promptly.",
  },
  {
    question: "Do you provide calibration services?",
    answer:
      "Yes, we offer calibration and maintenance support for GASTEC sampling pumps and accessories.",
  },
];

export const contactUsEmail: string = "Sales@alghwasa.com";
export const phoneNumber: string = "+971 4 3968037";
export const address: string =
  "Unit M08/09, Al Shraifi-1 Zabeel Road, PO BOX: 52084 Dubai, UAE";
export const googleMapLink: string =
  "https://maps.app.goo.gl/b8KAwE9whDgJS2ix8?g_st=com.google.maps.preview.copy";
