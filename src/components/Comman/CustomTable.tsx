import { TableData } from '@/types';
import React from 'react';

interface CustomTableProps {
    data: TableData; // Notice array inside
    headerBgColor?: string; // Tailwind color class
}

const CustomTable: React.FC<CustomTableProps> = ({ data, headerBgColor = 'bg-blue-500' }) => {
    const headers = Object.keys(data);

    if (headers.length === 0 || data[headers[0]].length === 0) return null;

    // Determine number of rows by the first header's array length
    const numberOfRows = data[headers[0]].length;

    return (
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
    );
};

export default CustomTable;
