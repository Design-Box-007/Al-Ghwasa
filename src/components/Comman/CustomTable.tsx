/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import { AiOutlineDownload } from 'react-icons/ai';
import React from 'react';
import RevealComponent from './RevealComponent';

export interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (row: T) => React.ReactNode;
}

interface CustomTableProps<T = any> {
  columns: Column<T>[];
  data: T[];
  headerBgColor?: string; // Tailwind class
  projectDocumentation?: string[];
  title?: string;
  description?: string;
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


const CustomTable = <T extends { [key: string]: any }>({
  columns,
  data,
  headerBgColor = 'bg-blue-500',
  projectDocumentation,
  title,
  description,
}: CustomTableProps<T>) => {
  if (!data.length || !columns.length) return null;

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

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full text-left">
          <thead className={`${headerBgColor} text-white`}>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key.toString()}
                  className="px-6 py-4 font-semibold text-sm whitespace-nowrap capitalize"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
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
