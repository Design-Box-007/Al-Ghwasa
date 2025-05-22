import Feature from "@/components/Comman/Feature";
import images from "@/data/assets";
import { IFeature } from "@/types";
import Image from "next/image";
import { FaUserShield, FaTemperatureHigh, FaClock, FaChartPie } from "react-icons/fa";

const oshaCards: IFeature[] = [
    {
        icon: FaUserShield,
        title: "Stay OSHA-Compliant",
        description: "Meet workplace safety regulations with proactive hydration monitoring",
    },
    {
        icon: FaTemperatureHigh,
        title: "Prevent Heat Stress",
        description: "Ensure employees maintain optimal hydration in high-risk environments",
    },
    {
        icon: FaClock,
        title: "Real-Time Testing",
        description: "Quick, non-invasive hydration analysis for industrial workforces",
    },
    {
        icon: FaChartPie,
        title: "Data-Driven Safety Programs",
        description: "Use hydration insights to enhance workplace health strategies",
    },
];

const MX3Osha = () => {
    return (
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-6 space-y-14 sm:space-y-[56px]">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0">
                <h2 className="text-[42px] sm:text-[56px] lg:text-[74px] font-medium mb-4 max-w-full lg:max-w-[60%]">
                    OSHA’s New National Emphasis Program
                </h2>

                <div className="w-full sm:w-auto lg:w-auto flex justify-center lg:justify-end">
                    <Image
                        src={images.MX314}
                        alt="osha"
                        width={526}
                        height={184}
                        className="object-contain max-w-full h-auto"
                    />
                </div>
            </div>

            <div className="bg-black h-[2px] w-full"></div>

            <p className="text-lg sm:text-xl lg:text-2xl font-light max-w-full mx-auto">
                {"With OSHA’s National Emphasis Program (NEP) focusing on heat-related hazards, proper hydration monitoring is critical for workplace safety. The MX3 Hydration Testing System helps businesses comply with OSHA guidelines by providing real-time hydration assessments, reducing the risk of heat stress, dehydration, and compliance penalties."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {oshaCards.map((card: IFeature, index) => (
                    <Feature
                        feature={card}
                        key={index}
                        featureClassName={{ featureClass: "rounded-2xl text-white px-4 py-6 bg-[#007DFC]" }}
                    />
                ))}
            </div>
        </section>

    );
};

export default MX3Osha;
