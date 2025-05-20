import { IconType } from "react-icons";

export interface NavLinksType {
    navTitle: string;
    navHref?: string;
    subLinks?: NavLinksType[]; // Allow nesting
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

export interface mx3DataType extends Omit<Blog, 'description'> { linkName: string }


export interface ProductFilterBtnProps {
    title: string;
    icon?: IconType;
    isActive?: boolean;
    images?: string[];
    btnColor?: string;
    onClick?: () => void;
}
export interface IFeature {
    title: string;
    description?: string;
    icon: string | IconType;
}

export interface IHowItWorks {
    description: string;
    sliderData: {
        imgSrc: string;
        content: string;
    }[];
}
export interface TableData {
    [columnName: string]: (string | number)[];
}
export interface TestimonialCard {
    imageSrc: string;
    userImageSrc: string;
    userName: string;
    userRole: string;
    testimonial: string;
}
export interface FeatureClassName {
    featureClass?: string;
    imageClass?: string;
    iconClass?: string;
    titleClass?: string;
    contentClass?: string;
}

