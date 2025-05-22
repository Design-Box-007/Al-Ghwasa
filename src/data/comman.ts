import { FAQItem, NavLinksType, SocialMediaLinks } from "@/types";
import { FaFacebook, FaLinkedin, FaInstagram, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const navLinks: NavLinksType[] = [
  { navTitle: "Home", navHref: "/" },
  { navTitle: "About Us", navHref: "/about" },
  {
    navTitle: "Products",
    navHref: "/our-products",
    subLinks: [
      {
        navTitle: "MX3",
        subLinks: [
          { navTitle: "Athletics", navHref: "/mx-3/athletics" },
          { navTitle: "Military", navHref: "/mx-3/military" },
          { navTitle: "Workplace safety", navHref: "/mx-3/workplace-safety" },
        ],
      },
      { navTitle: "Gastec", navHref: "/gastec/product-data" },
      // { navTitle: "Frying Oil Tester", navHref: "/products/frying-oil-tester" },
      // { navTitle: "Products", navHref: "/our-product" },
    ],
  },
  { navTitle: "Experience Center", navHref: "/gallery" },
  { navTitle: "Blogs", navHref: "/blogs" },
];


export const socialMedia: SocialMediaLinks[] = [
  { icon: FaFacebook, link: "https://facebook.com" },
  { icon: FaLinkedin, link: "https://x.com/Spacesculpt_uae " },
  { icon: FaInstagram, link: "https://instagram.com" },
  { icon: FaXTwitter, link: "https://x.com/Spacesculpt_uae" },
  { icon: FaMedium, link: "https://medium.com/@Spacesculp" },
];

export const homePagefaqs: FAQItem[] = [
  {
    question: "What makes Gastec gas detection systems different from electronic gas detectors?",
    answer: "Gastec gas detection systems use manual pumps and chemical detector tubes that provide instant visual results without electricity or calibration. They’re cost-effective, maintenance-free, and ideal for fieldwork in hazardous or remote environments. The GHS-8AT-EX model even allows safe use in explosion-prone zones."
  },
  {
    question: "How accurate is the MX3 Hydration Testing System for workforce monitoring?",
    answer: "MX3 uses saliva-based analysis, providing highly accurate hydration status within minutes. It’s trusted by health and safety managers across industries for its scientific backing, digital integration, and ability to prevent dehydration-related incidents on-site."
  },
  {
    question: "How often should cooking oil be tested using Alla France Frying Oil Testers?",
    answer: "It’s recommended to test frying oil at least once per day in commercial kitchens, or more frequently depending on usage volume. Regular monitoring with Alla France testers ensures food safety, flavor consistency, and compliance with HACCP standards."
  },
  {
    question: "Can Gastec detector tubes measure multiple types of gases?",
    answer: "Yes. Gastec offers a wide range of pre-calibrated tubes designed to measure over 500 different gases and vapors, including toxic, flammable, and corrosive compounds. Each tube is specific to a target gas and concentration range."
  },
  {
    question: "Is the MX3 Hydration Testing System suitable for industries outside construction or oil & gas?",
    answer: "Absolutely. MX3 is widely used in sports, military, firefighting, and industrial environments—anywhere hydration impacts performance and safety. It’s portable, easy to use, and scalable for teams of all sizes."
  }
];

export const contactUsEmail = "samplemail@domain.com"




