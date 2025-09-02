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
  rowClassName = "hover:bg-neutral",
  colClassName = "text-left md:text-h4",
  className = "",
}) => {
  return (
    <section className={className || `px-5 md:px-10 py-5`}>
      {title !== false && (
        <h2 className="text-h1 font-semibold text-custom-blue-1 mb-6">
          {title}
        </h2>
      )}

      <div className="overflow-x-auto rounded-lg border-2 border-gray-400">
        <table className="w-full">
          {showHeader && (
            <thead>
              <tr className={`border-b border-gray-400 ${headerClassName}`}>
                {columns?.map((col, idx) => (
                  <th
                    key={idx}
                    className={`px-4 py-6 font-semibold text-black ${colClassName}`}
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
                    className={`px-4 py-6 text-text-color ${colClassName} ${
                      colIndex === 0 ? "font-semibold" : "font-normal"
                    }`}
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
