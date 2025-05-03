import { TableData } from "@/types";

export const gastecTableData: TableData = {
    "Gas Type": [
        "Ammonia (NH₃)",
        "Carbon Monoxide (CO)",
        "Hydrogen Sulfide (H₂S)",
        "Oxygen (O₂)",
    ],
    "Detector Tube Model": [
        "Gastec No. 3LA",
        "Gastec No. 1",
        "Gastec No. 4H",
        "Gastec No. 31B",
    ],
    "Detection Range": [
        "0.5 - 20 ppm",
        "5 - 2000 ppm",
        "0.2 - 120 ppm",
        "5 - 25%",
    ],
    "Industry Application": [
        "Chemical, Agriculture",
        "Industrial Safety",
        "Oil & Gas",
        "Confined Spaces",
    ],
};
export const genralPdf: string[] = [
    "/docs/sample.pdf",
    "/docs/sample.pdf",
    "/docs/sample.pdf",
    "/docs/sample.pdf",
]

export const mx3TableData: TableData = {
    Feature: [
        "Measurement Type",
        "Connectivity",
        "Battery Life",
        "App Compatibility",
        "Test Duration",
    ],
    Specification: [
        "Saliva-based hydration test",
        "Bluetooth-enabled",
        "Rechargeable, long-lasting",
        "iOS & Android",
        "Results in under one minute",
    ],
};

export const fryingOilTesterTableData: TableData = {
    Feature: [
        "Measurement Range",
        "Accuracy",
        "Display",
        "Power",
        "Probe",
        "Compliance"
    ],
    Specification: [
        "0% – 40% TPM",
        "±2% TPM",
        "Digital LCD with color-coded alerts",
        "Rechargeable lithium-ion battery",
        "Stainless steel, heat-resistant",
        "HACCP, ISO, FDA Standards"
    ]
}

