'use client';
import { IconType } from 'react-icons';
import { FaTint, FaHotel, FaShieldAlt, FaWater } from 'react-icons/fa';


export interface ProductsCategory {
    title: string;
    products: string[]
}

export interface ProductDataType {
    title: string;
    icon: IconType;
    color: string;
    productCategoryList: ProductsCategory[];
}

const hydrationProducts: ProductsCategory[] = [{
    title: "Hydration Testing Devices",
    products: [
        "MX3 Hydration Testing System",
        "Saliva Hydration Test Strips",
        "Sweat Hydration Test Strips",
    ]
},

{
    title: "Sweat & Electrolyte Analysis Kits",
    products: [
        "Sweat Patch Analysis Kits",
        "Electrolyte Balance Testers",
    ]
},
{
    title: "Industrial Hydration Monitoring Solutions",
    products: [
        "Workforce Hydration Check Stations",
        "Heat Stress & Hydration Monitors",
    ]
},
{
    title: "Medical & Clinical Hydration Testing",
    products: [
        "Hydration Biomarker Testing Kits",
        "Saliva & Blood Plasma Hydration Analyzers",
    ]
},
{
    title: "Smart Hydration Monitoring Wearables",
    products: [
        "Hydration Smart Patches",
        "Wearable Electrolyte Monitors",
    ]
},
{
    title: "Hydration Management Accessories",
    products: [
        "Smart Water Bottles with Hydration Reminders",
        "Customizable Hydration Plans",
    ]
},];
const hospitablityProducts: ProductsCategory[] = [
    {
        title: "Oil Quality Testing Devices",
        products: [
            "Alla Oil Quality Tester",
            "Frying Oil Filtration Systems",
            "Sweat Hydration Test Strips",
        ]
    },

    {
        title: "Food Safety & Temperature Monitoring",
        products: [
            "Digital & Infrared Thermometers",
            "Temperature Data Loggers",
        ]
    },
    {
        title: "pH & Chemical Testing Kits",
        products: [
            "pH Meters for Food & Beverage",
            "Water Hardness Test Kits"
        ],
    },
    {
        title: "Hygiene & Sanitation Testing",
        products: [
            "ATP Hygiene Monitoring Systems",
            "Sanitization Test Strips",
        ]
    },
    {
        title: "Beverage & Dairy Quality Control",
        products: [
            "Milk Quality & Lactose Testing Kits",
            "Beverage Acidity & Sugar Testers",
        ]
    },
];
const safetyProducts: ProductsCategory[] = [
    {
        title: "Gas Detection & Air Quality Monitoring",
        products: [
            "Gastec Gas Detector Tubes",
            "Fixed Gas Detection Systems"
        ]
    },
    {
        title: "Fire Safety & Suppression Systems",
        products: [
            "Fire & Smoke Detectors",
            "Automatic Fire Suppressio,n Systems",
            "Flameproof Safety Cabinets"
        ]
    },
    {
        title: "Personal Protective Equipment (PPE) & Wearable Safety Devices",
        products: [
            "Respirators & Gas Masks",
            "Hearing Protection Devices",
            "Protective Gloves & Clothing"
        ]
    },
    {
        title: "Confined Space Safety & Environmental Monitoring",
        products: [
            "Multi-Gas Detectors",
            "Oxygen & Toxic Gas Monitors",
            "Ventilation & Air Purification Systems"
        ]
    },
    {
        title: "Spill Control & Hazardous Material Management",
        products: [
            "Chemical Spill Kits",
            "Absorbent Pads & Booms",
            "Decontamination Showers & Eyewash Stations"
        ]
    }
];
const marineProducts: ProductsCategory[] = [{
    title: "Pumps & Fluid Handling Systems",
    products: [
        "Centrifugal Pumps",
        "Diaphragm Pumps",
        "Oil Transfer & Fuel Pumps",
    ]
}, {
    title: "Environmental & Water Quality Monitoring",
    products: [
        "Dissolved Oxygen Meters",
        "pH & Conductivity Meters",
        "Turbidity Sensors",
    ]
}, {
    title: "Pressure & Temperature Gauges",
    products: [
        "Digital & Analog Pressure Gauges",
        "Temperature Sensors & Thermocouples",
        "Multi-Parameter Process Monitors",
    ]
}, {
    title: "Industrial Gas Detection & Air Quality Monitoring",
    products: [
        "Fixed & Portable Gas Detectors",
        "Confined Space Entry Monitors",
        "VOC (Volatile Organic Compound) Detectors",
    ]
}, {
    title: "Marine Navigation & Safety Equipment",
    products: [
        "Marine Radars & GPS Systems",
        "AIS (Automatic Identification Systems)",
        "Lifeboats & Safety Equipment",
    ]
}, {
    title: "Industrial Valves & Pipeline Components",
    products: [
        "Ball Valves & Butterfly Valves",
        "Check Valves & Safety Relief Valves",
        "Actuated Valves & Remote Monitoring Systems",
    ]
}, {
    title: "Industrial & Marine Electrical Systems",
    products: [
        "Marine-Grade Circuit Breakers",
        "Industrial Control Panels & PLC Systems",
        "Explosion-Proof Electrical Equipmen",
    ]
},];

export const productData: ProductDataType[] = [
    {
        title: "Hydration Measurement",
        icon: FaTint,
        color: "bg-[#007DFC]",
        productCategoryList: hydrationProducts,
    },
    {
        title: "Hospitality Equipment",
        icon: FaHotel,
        color: "bg-[#FF6B6B]",
        productCategoryList: hospitablityProducts,
    },
    {
        title: "Safety Solutions",
        icon: FaShieldAlt,
        color: "bg-[#00897B]",
        productCategoryList: safetyProducts,
    },
    {
        title: "Marine & Industrial",
        icon: FaWater,
        color: "bg-[#6881FB]",
        productCategoryList: marineProducts,
    },
];

