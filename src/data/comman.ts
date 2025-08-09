import { FAQItem, NavLinksType, SocialMediaLinks } from "@/types";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaMedium,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const navLinks: NavLinksType[] = [
  { navTitle: "Home", navHref: "/" },
  { navTitle: "About Us", navHref: "/about" },
  {
    navTitle: "Products",
    navHref: "/our-products",
    subLinks: [
      // {
      //   navTitle: "MX3",
      //   navHref: "/mx-3"
      // },
      { navTitle: "Gastec", navHref: "/gastec" },
      { navTitle: "Gastec-2", navHref: "/gastec-2" },
      { navTitle: "Product Overview", navHref: "/product-overview" },
      { navTitle: "Detection Table", navHref: "/Detection-table" },
      // { navTitle: "Alla France", navHref: "/frying-oil-tester" },
      // { navTitle: "Frying Oil Tester", navHref: "/products/frying-oil-tester" },
      // { navTitle: "Products", navHref: "/our-product" },
    ],
  },
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
