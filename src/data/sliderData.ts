import { IHowItWorks } from "@/types";
import images from "./assets";

export const gastecSliderData: IHowItWorks = {
    description: '3 Simple Steps for Instant Gas Detection',
    sliderData: [
        {
            imgSrc: images.GastecStep1,
            // content: 'Connect your device',
        },
        {
            imgSrc: images.GastecStep2,
            // content: 'Start detection',
        },
        {
            imgSrc: images.GastecStep3,
            // content: 'View results instantly',
        },
    ],
};

export const mx3SliderData: IHowItWorks = {
    description: "Collect a small saliva sample using the MX3 device",



    sliderData: [
        {
            imgSrc: images.MX3Step1,
            content: "The device displays your SOSM reading within seconds."
        },
        {
            imgSrc: images.MX3Step2,
            content: "Compare it with your OHZ to assess hydration."
        },
        {
            imgSrc: images.MX3Step3,
            content: "Log the result in the MX3 App or Portal for tracking."
        },
    ],
}
export const fryingOilTesterSliderData: IHowItWorks = {
    description: "Accurate Results in Three Simple Steps",
    sliderData: [
        {
            imgSrc: images.OilTesterStep1,
            // content: 'Insert the probe',
        },
        {
            imgSrc: images.OilTesterStep2,
            // content: 'Start detection',
        },
        {
            imgSrc: images.OilTesterStep3,
            // content: 'View results instantly',
        },
    ],
}

