"use client";
import Image from "next/image";
import React from "react";

interface PackageContentsCardProps {
  title: string;
  items: string[];
  image?: string;
}

const PackageContentsCard: React.FC<PackageContentsCardProps> = ({
  title,
  items,
  image,
}) => {
  return (
    <section className="px-5 md:px-10 py-10">
      <div>
        <h3 className="text-h1 font-semibold mb-8 text-heading">{title}</h3>
        {image && (
          <div className="flex items-center justify-center mb-5 w-full h-full">
            <Image
              width={1080}
              height={720}
              src={image}
              alt="images"
              className="lg:w-[60%] h-full object-cover rounded-2xl"
            />
          </div>
        )}
        <div className="flex flex-wrap gap-6">
          {items.map((item, index) => (
            <span
              key={index}
              className="border rounded-full px-4 py-3 border-gray-400 text-h3 text-text-color bg-neutral"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageContentsCard;
