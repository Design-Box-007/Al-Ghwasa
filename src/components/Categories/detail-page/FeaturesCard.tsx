"use client";

import React from "react";

interface TableProps {
  title?: string;
  showHeader?: boolean;
  columns?: string[];
  data?: (string | number)[][];
  headerClassName?: string;
  rowClassName?: string;
  colClassName?: string;
}

const Table: React.FC<TableProps> = ({
  title = "Key Features",
  showHeader = false,
  columns,
  data,
  headerClassName = "bg-gray-100",
  rowClassName = "hover:bg-gray-200",
  colClassName = "text-left text-[20px]",
}) => {
  return (
    <section className="px-6 lg:px-20 pt-15">
      <h2 className="text-5xl font-semibold text-[#143C66] mb-6">{title}</h2>
      <div className="overflow-hidden rounded-lg border-2 border-gray-400">
        <table className="w-full">
          {showHeader && (
            <thead>
              <tr className={`border-b border-gray-400 ${headerClassName}`}>
                {columns?.map((col, idx) => (
                  <th
                    key={idx}
                    className={`px-4 py-5 font-semibold text-gray-800 ${colClassName}`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {data?.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-b last:border-b-0 transition ${rowClassName}`}
              >
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-4 py-3 text-gray-600 ${colClassName}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
