'use client';

import React, { JSX, useState } from 'react';
import CustomTable, { ProductDownloadButton } from '@/components/Comman/CustomTable';
import { allafranceData, AllaFranceDataType } from '@/data/products/allaFranceData';
import {
    AF_91000AF003,
    AF_91000060F,
    AF_91000053,
    AF_91000061CA,
    AF_91000037CCVA,
    AF_91000AF009,
    AF_91000044,
    AF_91000003,
    AF_91000002,
    AF_91000AF008,
    AF_4200_001,
} from '@/data/products/AllaFranceDataComponents';
import { FaXmark } from 'react-icons/fa6';

const componentMap: Record<string, JSX.Element> = {
    AF_91000AF003: <AF_91000AF003 />,
    "AF_91000-060/F": <AF_91000060F />,
    "AF_91000-053": <AF_91000053 />,
    "AF_91000-061-ca": <AF_91000061CA />,
    "AF_91000-037/CC-va": <AF_91000037CCVA />,
    AF_91000AF009: <AF_91000AF009 />,
    "AF_91000-044": <AF_91000044 />,
    "AF_91000-003": <AF_91000003 />,
    "AF_91000-002": <AF_91000002 />,
    AF_91000AF008: <AF_91000AF008 />,
    AF_4200_001: <AF_4200_001 />
};


const FOTCustomTable = () => {
    const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

    const openModal = (componentKey: string) => setSelectedComponent(componentKey);
    const closeModal = () => setSelectedComponent(null);


    const selectedData = allafranceData.find((item) => item.component === selectedComponent);
    const projectDocumentation = selectedData?.projectDocumentation;

    const allaFranceCustomColumns = [
        { key: 'id', header: 'ID' },
        { key: 'specification', header: 'Specification' },
        {
            key: 'component',
            header: 'PDF',
            render: (row: AllaFranceDataType) => (
                <button
                    onClick={() => openModal(row.component)}

                    className="px-3 py-1 text-sm bg-[#EC3D3D] text-white cursor-pointer font-semibold rounded-md border border-[#EC3D3D] hover:bg-white hover:text-[#EC3D3D] transition-all"
                >
                    View
                </button>
            ),
        },
    ];

    return (
        <section className="relative">
            <CustomTable
                data={allafranceData}
                columns={allaFranceCustomColumns}
                title="Engineered for Accuracy, Built for Durability"
                headerBgColor="bg-[#EC3D3D]"
            />

            {selectedComponent && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40 backdrop-blur-2xl px-4">
                    <div className="relative bg-white w-full max-w-5xl shadow-2xl max-h-[90vh] overflow-y-auto rounded-xl p-6 space-y-4">
                        <button
                            onClick={closeModal}
                            className="absolute cursor-pointer top-4 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold transition"
                            aria-label="Close"
                        >
                            <FaXmark />
                        </button>
                        {componentMap[selectedComponent] || (
                            <p className="text-gray-700 text-center">Component not found.</p>
                        )}

                        {projectDocumentation && projectDocumentation?.length > 0 && (
                            <div className="flex gap-3.5 w-full flex-wrap">
                                {projectDocumentation.map((doc, index) => (
                                    <ProductDownloadButton
                                        key={index}
                                        downloadLink={doc.pdfLink}
                                        bgColor={"bg-[#EC3D3D]"}
                                        name={doc.pdfName}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default FOTCustomTable;
