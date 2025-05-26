import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface ProuductCardProps {
    imgSrc: string;
    name: string;
    className?: string;
}


const ProductCard: React.FC<ProuductCardProps> = ({ imgSrc, name, className }) => {
    return (
        <div className={`bg-white p-c-10 rounded-[20px] w-full text-custom-green-1 text-lg ${className}`}>
            <Image
                src={imgSrc}
                alt={name}
                width={1360}
                height={700}
                className="w-full h-[85%] object-cover object-center rounded-2xl"
            />
            <div className="flex h-[10%] items-center justify-between mt-4">
                <span>{name}</span>
                <span className="border border-custom-green-1 rounded-full p-1">
                    <FaArrowRight />
                </span>
            </div>
        </div>
    );
};

export default ProductCard;