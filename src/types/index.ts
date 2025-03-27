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


export type {
    NavLinksType,
    SocialMediaLinks,
    Assets,
}