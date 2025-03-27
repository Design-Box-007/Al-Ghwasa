import { NavLinksType, SocialMediaLinks } from "@/types";
import { FaFacebook, FaLinkedin, FaInstagram, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const navLinks: NavLinksType[] = [
    { navTitle: "Home", navHref: "" },
    { navTitle: "About Us", navHref: "" },
    { navTitle: "Our Products", navHref: "" },
    { navTitle: "Experience Center", navHref: "" },
    { navTitle: "Blog", navHref: "" },
];

export const socialMedia: SocialMediaLinks[] = [
    { icon: FaFacebook, link: "https://facebook.com" },
    { icon: FaLinkedin, link: "https://x.com/Spacesculpt_uae " },
    { icon: FaInstagram, link: "https://instagram.com" },
    { icon: FaXTwitter, link: "https://x.com/Spacesculpt_uae" },
    { icon: FaMedium, link: "https://medium.com/@Spacesculp" },
];

export const contactUsEmail ="samplemail@domain.com"




