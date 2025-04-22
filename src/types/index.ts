import { IconType } from "react-icons";

export interface NavLinksType {
    navTitle: string;
    navHref: string;
}

export interface SocialMediaLinks {
    link: string;
    icon: IconType;
}

export interface Assets {
    [key: string]: string;
}

export interface ContactForm {
    name: string;
    email: string;
    mobile: string;
    location: string;
    message: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface Product {
    imgSrc: string;
    name: string;
}

export interface Category {
    title: string;
    products: Product[];
}

export interface ProductSectionData {
    number: string;
    title: string;
    categories: Category[];
}

export interface Blog {
    title: string;
    description: string;
    imgSrc: string;
    component: string;
}

export interface ProductFilterBtnProps {
    title: string;
    icon: IconType;
    isActive?: boolean;
    images?: string[];
    onClick?: () => void;
}
