 "use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SoftwareCardProps {
  title?: string;
  downloads?: { label: string; link: string }[];
}

const SoftwareCard: React.FC<SoftwareCardProps> = ({ title, downloads }) => {
  return (
    <section className="px-5 md:px-10">
    <div className=" rounded-2xl py-4">
      <h3 className="text-h1 font-semibold mb-4 text-heading ">{title}</h3>

      <div className="flex lg:flex-row flex-col gap-6 w-full">
        {downloads?.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex items-center gap-2 border rounded-full px-4 py-2 lg:px-10 lg:py-4 text-h2 font-medium hover:bg-neutral transition w-full justify-between border-gray-400 text-text-color"
            target="_blank"
          > <div>
            {item.label} 
            </div>
            <div>
              <ArrowRight size={40} className="bg-black rounded-full text-white p-1"/>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </section>
  );
};

export default SoftwareCard;
