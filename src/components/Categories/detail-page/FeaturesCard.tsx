"use client";

import React from "react";

interface TableProps {
  title?: string | false;
  showHeader?: boolean;
  columns?: string[];
  data?: (string | number)[][];
  headerClassName?: string;
  rowClassName?: string;
  colClassName?: string;
  className?: string;
}

const Table: React.FC<TableProps> = ({
  title = "Key Features",
  showHeader = false,
  columns,
  data,
  headerClassName = "bg-gray-100",
  rowClassName = "",
  colClassName = "text-left md:text-h4",
  className = "",
}) => {
  // 🔹 Group rows by first column value
  const groupedData: { [key: string]: (string | number)[][] } = {};
  data?.forEach((row) => {
    const key = row[0]; // product name
    if (!groupedData[key]) groupedData[key] = [];
    groupedData[key].push(row);
  });

  return (
    <section className={className || `px-5 md:px-10 py-5`}>
      {title !== false && (
        <h2 className="text-h1 font-semibold text-custom-blue-1 mb-6">
          {title}
        </h2>
      )}

      <div className="overflow-x-auto border border-gray-400">
        <table className="w-full border-collapse border border-gray-400">
          {showHeader && (
            <thead>
              <tr className={`border-b border-gray-400 ${headerClassName}`}>
                {columns?.map((col, idx) => (
                  <th
                    key={idx}
                    className={`px-4 py-4 font-semibold text-black border border-gray-400 ${colClassName}`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {Object.entries(groupedData).map(([product, rows], groupIndex) =>
              rows.map((row, rowIndex) => (
                <tr
                  key={`${groupIndex}-${rowIndex}`}
                  className={`transition ${rowClassName}`}
                >
                  {/* First column with rowspan */}
                  {rowIndex === 0 && (
                    <td
                      rowSpan={rows.length}
                      className={`px-4 py-6 text-text-color font-semibold align-middle text-center border border-gray-400 ${colClassName}`}
                    >
                      {product}
                    </td>
                  )}
                  {/* Remaining columns */}
                  {row.slice(1).map((cell, colIndex) => (
                    <td
                      key={colIndex}
                      className={`px-4 py-6 text-text-color font-normal border border-gray-400 ${colClassName}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
