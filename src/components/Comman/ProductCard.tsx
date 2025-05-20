import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface ProuductCardProps {
    imgSrc: string;
    name: string;
    className?: string;
}


const ProductCard: React.FC<ProuductCardProps> = ({ imgSrc, name, className }) => {
    return (
        <div className={`bg-white p-c-10 rounded-[20px] w-fit min-w-[350px] text-custom-green-1 text-lg ${className}`}>
            <Image
                src={imgSrc}
                alt={name}
                width={357}
                height={308}
                className="w-full h-auto object-cover rounded-2xl"
            />
            <div className="flex items-center justify-between mt-4">
                <span>{name}</span>
                <span className="border border-custom-green-1 rounded-full p-1">
                    <FaArrowRight />
                </span>
            </div>
        </div>
    );
};

export default ProductCard;