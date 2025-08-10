'use client'

import React, { useState } from 'react'
import { FiSearch, FiSend } from "react-icons/fi"
import CustomTable from '@/components/Comman/CustomTable'

interface FilterProps {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    categories: string[];
}

const FilterProducts: React.FC<FilterProps> = ({
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    categories,
}) => {
    return (
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-10 p-6 rounded-3xl border border-gray-200 shadow-sm w-[95%] mx-auto bg-white">
            {/* Search Bar */}
            <div className="relative mb-6">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                    type="text"
                    placeholder="Search by product name, category, or specification..."
                    className="w-full pl-12 pr-16 py-4 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <FiSend className="text-gray-600 text-lg" />
                </button>
            </div>

            {/* Filter Buttons */}
            <div className="space-y-3">
                <div className="flex gap-3 flex-wrap">
                    {["All", ...categories].slice(0, 7).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                cat === selectedCategory
                                    ? 'bg-blue-500 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                
                {/* Second row of filter buttons */}
                <div className="flex gap-3 flex-wrap">
                    {["All", ...categories].slice(7).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                cat === selectedCategory
                                    ? 'bg-blue-500 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

interface TableRow {
    [key: string]: unknown;
}

interface TableColumn {
    key: keyof TableRow | string;
    header: string;
    render?: (row: TableRow) => React.ReactNode;
}

interface ReusableTableProps {
    data: TableRow[];
    columns: TableColumn[];
    searchFields: string[];
    categoryField?: string;
    initialSearchBy?: string;
}

const ReusableTable: React.FC<ReusableTableProps> = ({
    data,
    columns,
    searchFields,
    categoryField = 'category',
    initialSearchBy,
}) => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [searchBy] = useState(initialSearchBy || searchFields[0] || "");

    // Extract unique categories from data
    const categoriesList: string[] = Array.from(
        new Set(
            data.map((item: TableRow) =>
                item[categoryField]?.toString().trim().toLowerCase() || ''
            ).filter(Boolean)
        )
    );

    // Filter data based on search and category
    const filteredData = data.filter((item) => {
        const matchesCategory =
            selectedCategory.trim().toLowerCase() === "all" ||
            item[categoryField]?.toString().trim().toLowerCase() === selectedCategory.trim().toLowerCase();

        const term = searchTerm.toLowerCase();

        const matchesSearch = searchFields.some(field => {
            const fieldValue = item[field]?.toString().toLowerCase() || '';
            return searchBy === field ? fieldValue.includes(term) : false;
        });

        // If no specific search field is selected or search term is empty, show all
        const hasSearch = searchTerm.length > 0;
        return matchesCategory && (!hasSearch || matchesSearch);
    });

    return (
        <section className='relative w-full bg-[#F1F1F1] rounded-[20px] p-9 pt-20 mt-30'>
            <FilterProducts
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                categories={categoriesList}
            />

            {/* Render filtered data */}
            <div className="w-full">
                <CustomTable data={filteredData} columns={columns} />
            </div>
        </section>
    );
};

export default ReusableTable;
