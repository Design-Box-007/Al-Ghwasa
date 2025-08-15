import { IconType } from "react-icons";

interface IndustryCardProps {
  name: string;
  description: string;
  icon: IconType; // React Icon component type
}

export default function IndustryCard({
  name,
  description,
  icon: Icon,
}: IndustryCardProps) {
  return (
    <div className="bg-gray-200 border border-[#C5C5C5] rounded-2xl p-6 flex flex-col items-center justify-center gap-5 w-[429px] h-[318px] ">
      <div className="flex flex-col items-center justify-center gap-5 w-full">
        {/* Icon Container */}
        <Icon className="text-5xl text-primary text-[#0F2E53]" />{" "}
        {/* ✅ Render as JSX */}
        {/* Industry Name */}
        <h3 className="font-dm-sans font-semibold text-32 leading-[1.302] tracking-[1%] text-primary text-center text-[#0F2E53] text-2xl">
          {name}
        </h3>
        {/* Description */}
        <p className="font-poppins font-medium text-16 leading-[1.5] tracking-[1%] text-secondary text-center">
          {description}
        </p>
      </div>
    </div>
  );
}
