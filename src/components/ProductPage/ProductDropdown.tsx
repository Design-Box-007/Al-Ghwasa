'use client'

import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

interface ProductDropdownProps {
  title: string;
  products: string[];
  color: string;
  selectedProductData: string;
  setSelectedProductData: (val: string) => void;
}

export const ProductDropdown: React.FC<ProductDropdownProps> = ({
  title,
  products,
  color,
  selectedProductData,
  setSelectedProductData
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left text-[20px] font-semibold px-6 py-4 rounded-lg flex justify-between items-center cursor-pointer`}
      >
        <span>{title}</span>
        {isOpen ? <FaAngleDown /> : <FaAngleRight />}
      </button>

      {isOpen && (
        <ul className="bg-white rounded-b-lg px-6 py-4 space-y-3">
          {products.map((product, index) => {
            const isSelected = selectedProductData === product;
            return (
              <li
                key={index}
                onClick={() => setSelectedProductData(product)}
                className={`text-[18px] cursor-pointer px-3 py-2 rounded-xl transition-all ${
                  isSelected
                    ? `text-white`
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
                style={{
                  backgroundColor: isSelected ? color : "transparent",
                }}
              >
                {product}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
