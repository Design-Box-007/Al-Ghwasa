import Link from "next/link";
import Image from "next/image";

interface ProductCTAProps {
    link: string,
    name: string,
    imgSrc: string,
    className: string,
}

const ProductCTA: React.FC<ProductCTAProps> = ({ link, name, imgSrc, className }) => {
    return (
        <Link href={link}>
            <div className={`flex items-center gap-2 p-1 bg-background rounded-lg w-44 h-11 ${className}`}>
                <Image
                    src={imgSrc}
                    alt={name.toLowerCase()}
                    width={52}
                    height={36}
                    className="rounded-lg object-cover h-full brightness-75"
                />
                <span className="font-semibold">{name}</span>
            </div>
        </Link>
    );
};

export default ProductCTA;
