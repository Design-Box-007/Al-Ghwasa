import { IHowItWorks } from "@/types";
import images from "./assets";

export const gastecSliderData: IHowItWorks = {
    description: '3 Simple Steps for Instant Gas Detection',
    sliderData: [
        {
            imgSrc: images.ProductOverview2,
            content: 'Connect your device',
        },
        {
            imgSrc: images.ProductOverview4,
            content: 'Start detection',
        },
        {
            imgSrc: images.ProductOverview6,
            content: 'View results instantly',
        },
    ],
};