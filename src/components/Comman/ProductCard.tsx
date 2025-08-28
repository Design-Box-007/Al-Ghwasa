import Image from "next/image";
import Link from "next/link"; // ✅ import Link
import { FaArrowRight } from "react-icons/fa";

interface ProductCardProps {
  imgSrc: string;
  name: string;
  className?: string;
  href?: string; // ✅ add optional href
}

const ProductCard: React.FC<ProductCardProps> = ({
  imgSrc,
  name,
  className,
  href = "",
}) => {
  return (
    <div
      className={`bg-white p-c-10 rounded-[20px] w-full text-custom-green-1 text-lg ${className}`}
    >
      <Image
        src={imgSrc}
        alt={name}
        width={1360}
        height={700}
        className="w-full h-[85%] object-cover object-center rounded-2xl"
      />
      <div className="flex h-[10%] items-center justify-between mt-4">
        <span>{name}</span>

        {/* ✅ Arrow now clickable */}
        <Link
          href={href}
          className="border border-custom-green-1 rounded-full p-1 hover:bg-custom-green-1 hover:text-white transition-colors"
        >
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
