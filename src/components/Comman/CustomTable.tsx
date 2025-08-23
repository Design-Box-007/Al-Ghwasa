/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import { AiOutlineDownload } from 'react-icons/ai';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import React, { useState } from 'react';
import RevealComponent from './RevealComponent';

export interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (row: T) => React.ReactNode;
}

interface CustomTableProps<T = any> {
  columns?: Column<T>[];
  data?: T[];
  headerBgColor?: string; // Tailwind class
  projectDocumentation?: string[];
  title?: string;
  description?: string;
  rowsPerPage?: number;
}

interface ProjectDownloadButtonProps {
  bgColor: string;
  name?: string;
  downloadLink: string;
}

export const ProductDownloadButton: React.FC<ProjectDownloadButtonProps> = ({
  downloadLink,
  bgColor,
  name = "Project Documentation",
}) => {
  return (
    <a
      href={downloadLink}
      download
      className={`flex w-full sm:w-auto h-auto items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white rounded-md ${bgColor} hover:opacity-90 transition-colors`}
    >
      <AiOutlineDownload className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
      {name}
    </a>
  );
};

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  rowsPerPage: number;
  onRowsPerPageChange: (rows: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  rowsPerPage,
  onRowsPerPageChange,
}) => {
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  return (
    <div className="flex items-center justify-between mt-6 mb-6 px-4">
      {/* Left side - Previous button and page numbers */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center px-3 py-2 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FiChevronLeft className="w-4 h-4 mr-1" />
          Prev
        </button>

        {getVisiblePages().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            disabled={page === '...'}
            className={`px-3 py-2 text-sm rounded ${
              page === currentPage
                ? 'bg-blue-500 text-white'
                : page === '...'
                ? 'text-gray-400 cursor-default'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center px-3 py-2 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
          <FiChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      {/* Right side - Rows per page selector */}
      <div className="flex items-center space-x-2">
        <select
          value={rowsPerPage}
          onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
          className="px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={10}>10 per page</option>
          <option value={20}>20 per page</option>
          <option value={50}>50 per page</option>
          <option value={100}>100 per page</option>
        </select>
      </div>
    </div>
  );
};


const CustomTable = <T extends { [key: string]: any }>({
  columns,
  data,
  headerBgColor = 'bg-[#1e3a8a]', // Dark blue to match image
  projectDocumentation,
  title,
  description,
  rowsPerPage = 10,
}: CustomTableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentRowsPerPage, setCurrentRowsPerPage] = useState(rowsPerPage);

  if (!data?.length || !columns?.length) return null;

  // Calculate pagination
  const totalPages = Math.ceil(data.length / currentRowsPerPage);
  const startIndex = (currentPage - 1) * currentRowsPerPage;
  const endIndex = startIndex + currentRowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleRowsPerPageChange = (rows: number) => {
    setCurrentRowsPerPage(rows);
    setCurrentPage(1); // Reset to first page
  };

  return (
    <section className="space-y-[54px]">
      <div className="space-y-6">
        {title &&
          <RevealComponent backgroundClass='bg-white'>
            <h4 className="text-[60px] font-medium">{title}</h4>
          </RevealComponent>
        }

        {description &&
          <RevealComponent backgroundClass='bg-white'>
            <p className="text-[40px] font-light">{description}</p>
          </RevealComponent>
        }
      </div>

      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className={`${headerBgColor} text-white`}>
              <tr>
                {columns.map((col) => (
                  <th
                    key={col.key.toString()}
                    className="px-6 py-4 font-semibold text-sm whitespace-nowrap text-left"
                  >
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentData.map((row, rowIndex) => (
                <tr 
                  key={rowIndex} 
                  className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}
                >
                  {columns.map((col) => (
                    <td
                      key={col.key.toString()}
                      className="px-6 py-4 text-gray-700 text-sm whitespace-nowrap"
                    >
                      {col.render ? col.render(row) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          rowsPerPage={currentRowsPerPage}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </div>

      {projectDocumentation && projectDocumentation?.length > 0 && (
        <div className="flex gap-3.5 w-full flex-wrap">
          {projectDocumentation.map((doc, index) => (
            <ProductDownloadButton
              key={index}
              downloadLink={doc}
              bgColor={headerBgColor}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default CustomTable;
