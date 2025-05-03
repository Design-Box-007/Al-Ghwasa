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
        <div className="bg-white py-12 px-6 space-y-[56px]">
            <div className="flex flex-col lg:flex-row justify-between">
                <h2 className="text-[74px] font-medium mb-4">
                    OSHA’s New National Emphasis Program
                </h2>

                <Image src={images.MX314} alt="osha" width={526} height={184} className="object-contain" />
            </div>

            <div className='bg-black h-[2px] w-full'></div>

            <p className="text-2xl font-light">
                {"With OSHA’s National Emphasis Program (NEP) focusing on heat-related hazards, proper hydration monitoring is critical for workplace safety. The MX3 Hydration Testing System helps businesses comply with OSHA guidelines by providing real-time hydration assessments, reducing the risk of heat stress, dehydration, and compliance penalties."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {oshaCards.map((card: IFeature, index) => (
                    <Feature feature={card} key={index} featureClassName={{ featureClass: "rounded-2xl text-white px-4 py-6 bg-[#007DFC]" }} />
                ))}
            </div>
        </div>
    );
};

export default MX3Osha;
