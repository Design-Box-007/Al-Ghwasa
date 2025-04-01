import { ProductSectionData } from "@/types";
import images from "./assets";

const productsData: ProductSectionData[] = [
    {
        number: "01",
        title: "Hospitality Equipment",
        categories: [
            {
                title: "Thermometer",
                products: [
                    { imgSrc: images.Thermometer, name: "Digital Thermometer" },
                    { imgSrc: images.Thermometer, name: "Infrared Thermometer" },
                    { imgSrc: images.Thermometer, name: "Smart Thermometer" },
                ],
            },
            {
                title: "Alia Oil Tester",
                products: [
                    { imgSrc: images.Thermometer, name: "Basic Oil Tester" },
                    { imgSrc: images.Thermometer, name: "Advanced Oil Tester" },
                    { imgSrc: images.Thermometer, name: "Pro Oil Tester" },
                ],
            },
            {
                title: "Eco-Friendly Straws",
                products: [
                    { imgSrc: images.Thermometer, name: "Paper Straws" },
                    { imgSrc: images.Thermometer, name: "Bamboo Straws" },
                    { imgSrc: images.Thermometer, name: "Metal Straws" },
                ],
            },
        ],
    },
    {
        number: "02",
        title: "Hydration Measurement",
        categories: [
            {
                title: "Water Quality Testers",
                products: [
                    { imgSrc: images.Thermometer, name: "Basic Water Tester" },
                    { imgSrc: images.Thermometer, name: "Advanced Water Tester" },
                    { imgSrc: images.Thermometer, name: "Pro Water Tester" },
                ],
            },
            {
                title: "Smart Bottles",
                products: [
                    { imgSrc: images.Thermometer, name: "Temperature Bottle" },
                    { imgSrc: images.Thermometer, name: "Hydration Reminder Bottle" },
                    { imgSrc: images.Thermometer, name: "UV Purifier Bottle" },
                ],
            },
        ],
    },
    {
        number: "03",
        title: "Safety Solutions",
        categories: [
            {
                title: "Sanitization",
                products: [
                    { imgSrc: images.Thermometer, name: "Hand Sanitizer" },
                    { imgSrc: images.Thermometer, name: "Surface Disinfectant" },
                    { imgSrc: images.Thermometer, name: "Air Sanitizer" },
                ],
            },
            {
                title: "Protective Gear",
                products: [
                    { imgSrc: images.Thermometer, name: "Face Mask" },
                    { imgSrc: images.Thermometer, name: "Gloves" },
                    { imgSrc: images.Thermometer, name: "Face Shield" },
                ],
            },
        ],
    },
];

export default productsData;


