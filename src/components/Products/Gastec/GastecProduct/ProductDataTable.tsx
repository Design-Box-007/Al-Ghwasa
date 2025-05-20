'use client'

import React, { useState } from 'react'
import { FiSearch, FiSend } from "react-icons/fi"
import { ProductFilterBtnProps, TableData } from '@/types'
import ProductFilterBtn from '@/components/Comman/ProductFilterBtn'
import gastecProductData from '@/data/products/gastec.json'
import CustomTable from '@/components/Comman/CustomTable'

interface FilterProps {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    searchBy: "Number" | "Name" | "Type";
    setSearchBy: (field: "Number" | "Name" | "Type") => void;
}

interface GastecDataType {
    tubeId: string;
    name: string;
    category: string;
}

const FilterProducts: React.FC<FilterProps> = ({
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    searchBy,
    setSearchBy,
}) => {
    const categoriesList: string[] = Array.from(
        new Set(
            gastecProductData.map((data: GastecDataType) =>
                data.category.trim().toLowerCase()
            )
        )
    );

    return (
        <div className="absolute -top-45 left-1/2 -translate-x-1/2 z-10 p-6 rounded-3xl border border-gray-200 shadow-sm w-[95%] mx-auto bg-white">
            {/* Search Bar */}
            <div className="relative mb-6">
                <FiSearch className="absolute left-4 top-3.5 text-gray-400 text-xl" />
                <input
                    type="text"
                    placeholder={`Search by ${searchBy.toLowerCase()}...`}
                    className="w-full pl-12 pr-12 py-3 rounded-full bg-gray-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="absolute right-4 top-3.5 text-xl text-gray-500">
                    <FiSend />
                </button>
            </div>

            {/* Search Category Selector */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Search By</h2>
                <div className="flex gap-3 flex-wrap">
                    {["Number", "Name", "Type"].map((searchTag) => (
                        <ProductFilterBtn
                            key={searchTag}
                            title={searchTag}
                            isActive={searchBy === searchTag}
                            onClick={() => setSearchBy(searchTag as "Number" | "Name" | "Type")}
                        />
                    ))}
                </div>

                <div className="bg-[#0277BD] h-[2px] w-full"></div>

                {/* Category Filter */}
                <div className="flex gap-3 flex-wrap">
                    {["All", ...categoriesList].map((cat) => (
                        <ProductFilterBtn
                            key={cat}
                            title={cat}
                            isActive={cat === selectedCategory}
                            onClick={() => setSelectedCategory(cat)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};


const transformToTableData = (data: GastecDataType[]): TableData => {
    return {
        Number: data.map(item => item.tubeId),
        Name: data.map(item => item.name),
        Type: data.map(item => item.category),
    };
};


const ProductDataTable: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [searchBy, setSearchBy] = useState<"Number" | "Name" | "Type">("Name");

    const filteredData = gastecProductData.filter((item) => {
        const matchesCategory =
            selectedCategory.trim().toLowerCase() === "all" ||
            item.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase();

        const term = searchTerm.toLowerCase();

        const matchesSearch =
            searchBy === "Number"
                ? item.tubeId.toLowerCase().includes(term)
                : searchBy === "Name"
                ? item.name.toLowerCase().includes(term)
                : item.category.toLowerCase().includes(term);

        return matchesCategory && matchesSearch;
    });

    const tableData: TableData = transformToTableData(filteredData);

    return (
        <section className='relative w-full bg-[#F1F1F1] rounded-[20px] p-9 pt-50'>
            <FilterProducts
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                searchBy={searchBy}
                setSearchBy={setSearchBy}
            />

            {/* ✅ Render filtered products */}
            <div className="w-full">
                <CustomTable data={tableData} />
            </div>
        </section>
    );
};

export default ProductDataTable;
