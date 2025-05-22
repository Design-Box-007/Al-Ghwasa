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
        navTitle: "mx3",
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
  { navTitle: "Blog", navHref: "/blogs" },
];


export const socialMedia: SocialMediaLinks[] = [
  { icon: FaFacebook, link: "https://facebook.com" },
  { icon: FaLinkedin, link: "https://x.com/Spacesculpt_uae " },
  { icon: FaInstagram, link: "https://instagram.com" },
  { icon: FaXTwitter, link: "https://x.com/Spacesculpt_uae" },
  { icon: FaMedium, link: "https://medium.com/@Spacesculp" },
];

export const homePagefaqs: FAQItem[] = [
  { question: "How do I choose the right hydration system?", answer: "We provide expert recommendations based on your needs." },
  { question: "Do you provide on-site setup and support?", answer: "Yes, we offer full installation and maintenance support." },
  { question: "What brands do you work with?", answer: "We collaborate with top hydration brands globally." },
  { question: "Can I get a custom system for my space?", answer: "Absolutely! We tailor solutions for your requirements." },
];

export const contactUsEmail = "samplemail@domain.com"




