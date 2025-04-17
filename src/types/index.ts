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

interface FAQItem {
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

interface Blog {
    title: string;
    description: string;
    imgSrc: string;
    component: string;
}

export type {
    NavLinksType,
    SocialMediaLinks,
    Assets,
    ContactForm,
    FAQItem,
    Blog,
}
export interface ProductFilterBtnProps {
    title: string;
    icon: IconType;
    isActive?: boolean;
    images?: string[];
    onClick?: () => void;
}
