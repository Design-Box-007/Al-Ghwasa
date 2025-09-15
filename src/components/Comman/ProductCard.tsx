"use client"
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface ProductCardProps {
  imgSrc: string;
  name: string;
  className?: string;
  href?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imgSrc,
  name,
  className,
  href = "",
}) => {
  return (
    <Link
      href={href}
      className={`block bg-neutral p-c-10 rounded-[20px] w-full text-custom-green-1 text-lg ${className}`}
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
        <span className="border border-custom-green-1 rounded-full p-1 group-hover:bg-custom-green-1 group-hover:text-white transition-colors">
          <FaArrowRight />
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
