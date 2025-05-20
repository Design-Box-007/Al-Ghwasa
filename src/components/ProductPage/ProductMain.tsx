'use client'

import React, { useState } from 'react'
import ProductFilterBtn from '../Comman/ProductFilterBtn'
import { productData } from '../../data/products/productData'
import { ProductDropdown } from './ProductDropdown'

const ProductMain = () => {
    const [selectedCategory, setSelectedCategory] = useState(productData[0].title);
    const [selectedProductData, setSelectedProductData] = useState(productData[0].productCategoryList[0].products[0]);

    const handleFilterClick = (title: string) => {
        setSelectedCategory(title);
        const selectedProduct = productData.find((item) => item.title === title);
        setSelectedProductData(selectedProduct?.productCategoryList[0].products[0] || '');
    };

    const selectedProduct = productData.find((item) => item.title === selectedCategory);


    return (
        <section className='bg-[#F1F1F1] rounded-[20px] px-[30px] py-[40px]'>
            <h2 className='font-medium text-[90px] text-black capitalize'>
                Browse by your needs
            </h2>

            <div className="flex flex-wrap gap-4 justify-start">
                {productData.map(({ title, icon, color }, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <ProductFilterBtn
                            title={title}
                            icon={icon}
                            isActive={title === selectedCategory}
                            btnColor={title === selectedCategory ? `${color} text-white` : "bg-white text-[#888888]"}
                            onClick={() => handleFilterClick(title)}
                        />
                        {index !== productData.length - 1 && (
                            <span className="mx-2 text-gray-500 text-[24px] md:text-[32px] font-medium">/</span>
                        )}
                    </div>
                ))}
            </div>

            <div className="w-full mt-10 grid grid-cols-7 gap-2.5">
                <div className='col-span-2 bg-white rounded-3xl'>
                    {selectedProduct &&
                        selectedProduct.productCategoryList.map((category, index) => (
                            <ProductDropdown
                                key={index}
                                title={category.title}
                                products={category.products}
                                color={selectedProduct.color.replace("bg-[", "").replace("]", "")}
                                selectedProductData={selectedProductData}
                                setSelectedProductData={setSelectedProductData}
                            />
                        ))}
                </div>
                <div className='col-span-5 bg-white rounded-3xl flex justify-center items-center'>
                    {
                        selectedProductData
                    }
                </div>
            </div>

        </section>
    )
}

export default ProductMain
