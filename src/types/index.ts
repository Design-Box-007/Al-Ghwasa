import { IconType } from "react-icons";

interface NavLinksType {
    navTitle: string;
    navHref: string;
}

interface SocialMediaLinks {
    link: string;
    icon: IconType;
}

interface Assets {
    [key: string]: string;
}

interface ContactForm {
    name: string;
    email: string;
    mobile: string;
    location: string;
    message: string;
}


export type {
    NavLinksType,
    SocialMediaLinks,
    Assets,
    ContactForm,
}