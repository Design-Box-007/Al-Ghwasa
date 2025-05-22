import { ProductSectionData } from "@/types";
import images from "./assets";

const productsData: ProductSectionData[] = [
    {
        number: "01",
        title: "Hospitality Equipment",
        link: "/frying-oil-tester",
        images: [
            { imgSrc: images.oilTesterHp, name: "Digital Food Oil Tester" },
            { imgSrc: images.oilTesterStraws, name: "Straws" },
            { imgSrc: images.oilTesterKit, name: "Device Kit" },
        ]
    },
    {
        number: "02",
        title: "Hydration Measurement",
        link: "/mx-3",
        images: [
            { imgSrc: images.mx3DeviceHp, name: "Hydration device" },
            { imgSrc: images.mx3Device2, name: "Hydration Kit" },
            { imgSrc: images.mx3DeviceKit, name: "Hydration Test Strip" },
        ]
    },
    {
        number: "03",
        title: "Safety Solutions",
        link: "/gastec",
        images: [
            { imgSrc: images.gastec860_2, name: "860_2" },
            { imgSrc: images.gastecGHS_501FT_1, name: "GHS_501FT_1" },
            { imgSrc: images.gastecGHS_8AT_EX_1, name: "GHS_8AT_EX_1" },
        ]
    },
];

export default productsData;


