import { ProductFilterBtnProps } from "@/types";
import React from "react";

const ProductFilterBtn: React.FC<ProductFilterBtnProps> = ({
    title,
    icon: Icon,
    isActive = false,
    onClick,
}) => {
    return (
        <button
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all cursor-pointer ${isActive
                    ? "bg-custom-blue-1 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
            onClick={onClick}
        >
            <Icon className={`${isActive ? "text-white" : "text-gray-500"}`} size={20} />
            <span>{title}</span>
        </button>
    );
};

export default ProductFilterBtn;
