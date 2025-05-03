'use client';
import { AiOutlineDownload } from 'react-icons/ai';
import { TableData } from '@/types';
import React from 'react';

interface CustomTableProps {
    data: TableData; // Notice array inside
    headerBgColor?: string; // Tailwind color class
    projectDocumentation?: string[];
    title: string;
    description?: string;
}

interface ProjectDownloadButtonProps {
    bgColor: string;
    downloadLink: string;
}


const ProductDownloadButton: React.FC<ProjectDownloadButtonProps> = ({ downloadLink, bgColor }) => {
    return (
        <a
            href={downloadLink} // Update this path to your actual file
            download
            className={`flex-1 w-auto h-auto inline-flex items-center px-6 py-3 text-white rounded-md ${bgColor} hover:${bgColor} transition-colors`}
        >
            <AiOutlineDownload className="w-5 h-5 mr-2" />
            Product Documentation
        </a>
    );
};



const CustomTable: React.FC<CustomTableProps> = ({ data, headerBgColor = 'bg-blue-500', projectDocumentation, title, description }) => {
    const headers = Object.keys(data);

    if (headers.length === 0 || data[headers[0]].length === 0) return null;

    // Determine number of rows by the first header's array length
    const numberOfRows = data[headers[0]].length;

    return (
        <section className='space-y-[54px]'>
            <div className='space-y-6'>
                <h4 className='text-[60px] font-medium'>
                    {title}
                </h4>
                {description && (
                    <p className='text-[40px] font-light'>
                        {description}
                    </p>
                )}
            </div>
            <div className="overflow-x-auto rounded-lg shadow-md">
                <table className="min-w-full text-left">
                    <thead className={`${headerBgColor} text-white`}>
                        <tr>
                            {headers.map((header) => (
                                <th key={header} className="px-6 py-4 font-semibold text-sm whitespace-nowrap">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {Array.from({ length: numberOfRows }).map((_, rowIndex) => (
                            <tr key={rowIndex}>
                                {headers.map((header) => (
                                    <td key={header} className="px-6 py-4 text-gray-700 text-sm whitespace-nowrap">
                                        {data[header][rowIndex]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='flex gap-3.5 w-full'>
                {projectDocumentation?.map((doc: string, index: number) => (
                    <ProductDownloadButton downloadLink={doc} bgColor={headerBgColor} key={index} />
                ))}
            </div>
        </section>

    );
};

export default CustomTable;
