 "use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SoftwareCardProps {
  title: string;
  downloads: { label: string; link: string }[];
}

const SoftwareCard: React.FC<SoftwareCardProps> = ({ title, downloads }) => {
  return (
    <section className="px-20 ">
    <div className=" rounded-2xl py-4">
      <h3 className="text-5xl font-semibold mb-8 text-[#143C66] ">{title}</h3>

      <div className="flex gap-6 w-full">
        {downloads.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex items-center gap-2 border rounded-full px-10 py-4 text-4xl font-medium hover:bg-gray-200 transition w-full justify-between border-gray-400 text-gray-700"
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
