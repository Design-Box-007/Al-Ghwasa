import { industries } from "@/data/products/industryData";
import IndustryCard from "./IndustryCard";

export default function IndustryGrid() {
  return (
    <main>
      <div className="lg:mx-20 mx-10 py-16 mt-5.5">
        {/* Header Section */}
        <div>
          <div className="text-center mb-[70px]">
            <h1 className="font-dm-sans font-semibold text-3xl md:text-7xl leading-[1.302] text-black mb-4 mx-auto">
              Tailored Solutions for Every Industry
            </h1>
            <p className="font-poppins font-medium text-16 leading-[1.5] text-black max-w-[702px] mx-auto">
              We understand that each industry has unique challenges when it
              comes to detecting and measuring hazardous gases.
            </p>
          </div>
        </div>

        {/* Industry Grid */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                name={industry.title}
                description={industry.description}
                icon={industry.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
