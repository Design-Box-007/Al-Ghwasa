import { mx3DataType } from "@/types";
import images from "../assets";

export const mx3subData: mx3DataType[] = [
    {
        title: "MX3: The Future of Hydration Testing for Peak Athletic Performance",
        imgSrc: images.Athletic1,
        linkName: "athletics",
        component: "Mx31",
    },
    {
        title: "Hydration Is Safety: Protect Your Workforce with MX3",
        imgSrc: images.Military1,
        linkName: "military",
        component: "Mx32",
    },
    {
        title: "Technology to Advance Soldier Health and Performance",
        imgSrc: images.WorkSpaceSafety1,
        linkName: "workplace-safety",
        component: "Mx33",
    }
];
export const mx3SubLinks = [
    { title: "Athletics", link: "/mx-3/athletics", color: "#00897B" },
    { title: "Workplace safety", link: "/mx-3/workplace-safety", color: "#FF6B6B" },
]


export const gasetecSubLinks = [
    { title: "Find the right Gastec Product", link: "/gastec/product-data", color: "#0277BD" }
]