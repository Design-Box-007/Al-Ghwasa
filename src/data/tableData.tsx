'use client'

export const gastecTableData = [
    {
        gasType: "Ammonia (NH₃)",
        detectorTubeModel: "Gastec No. 3LA",
        detectionRange: "0.5 - 20 ppm",
        industryApplication: "Chemical, Agriculture",
    },
    {
        gasType: "Carbon Monoxide (CO)",
        detectorTubeModel: "Gastec No. 1",
        detectionRange: "5 - 2000 ppm",
        industryApplication: "Industrial Safety",
    },
    {
        gasType: "Hydrogen Sulfide (H₂S)",
        detectorTubeModel: "Gastec No. 4H",
        detectionRange: "0.2 - 120 ppm",
        industryApplication: "Oil & Gas",
    },
    {
        gasType: "Oxygen (O₂)",
        detectorTubeModel: "Gastec No. 31B",
        detectionRange: "5 - 25%",
        industryApplication: "Confined Spaces",
    },
];


export const gasetecColumns = [
    { key: 'gasType', header: 'gasType' },
    { key: 'detectorTubeModel', header: 'detectorTubeModel' },
    { key: 'detectionRange', header: 'detectionRange' },
    { key: 'industryApplication', header: 'industryApplication' },
]

export const genralColumns = [
    { key: 'feature', header: 'feature' },
    { key: 'specification', header: 'specification' },
]

export const fryingOilTesterTableData = [
    {
        feature: "Measurement Range",
        specification: "0% – 40% TPM",
    },
    {
        feature: "Accuracy",
        specification: "±2% TPM",
    },
    {
        feature: "Display",
        specification: "Digital LCD with color-coded alerts",
    },
    {
        feature: "Power",
        specification: "Rechargeable lithium-ion battery",
    },
    {
        feature: "Probe",
        specification: "Stainless steel, heat-resistant",
    },
    {
        feature: "Compliance",
        specification: "HACCP, ISO, FDA Standards",
    },
];



export const mx3TableData = [
    { pdfName: "MX3 Manual", link: "/docs/MX3Manual.pdf  " },
    { pdfName: "Quick Start Guide", link: "/docs/Quick-Start-Guide.pdf" },
    { pdfName: "App Guide", link: "/docs/App-Guide.pdf" },
    { pdfName: "Portal Guide", link: "/docs/Portal-Guide.pdf" },
    { pdfName: "MX3 Sweat Instructions", link: "/docs/MX3_sweat_instructions.pdf" },
    { pdfName: "MX3 Dispenser Guide", link: "/docs/MX3DispenserGuide_web.pdf" },
    { pdfName: "Technical Support Care", link: "/docs/MX3TechincalSupport_CareCleaning1.pdf" },
]

interface mx3TableDataType {
    pdfName: string;
    link: string;
}

export const mx3Columns = [
    { key: 'pdfName', header: 'Name' },
    {
        key: 'link',
        header: 'PDF',
        render: (row: mx3TableDataType) => (
            <a
                href={row.link}
                download
                className="px-2 py-1 text-[14px] cursor-pointer bg-[#EA721B] text-white hover:bg-white hover:text-[#EA721B] font-bold rounded-lg border border-solid transition-all duration-300 ease-in-out"
            >
                Download
            </a>
        ),
    },
]



