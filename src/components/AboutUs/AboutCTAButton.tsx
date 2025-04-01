import { FiExternalLink } from "react-icons/fi"; // Search & replace with a more relevant icon if needed

const AboutCTAButton = () => {
    return (
        <section className="p-8">
            <button className="flex h-[450px] items-center py-5 px-[72px] justify-start w-full bg-custom-blue-1 text-white rounded-[120px] shadow-md">
                <span className="text-[90px] font-medium font-inter">Looking for Reliable Industrial Solutions</span>
                <FiExternalLink size={231} color="#ffffff" />
            </button>
        </section>
    );
};

export default AboutCTAButton;
