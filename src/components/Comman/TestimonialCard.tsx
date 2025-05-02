// components/TestimonialCard.tsx
import { TestimonialCard as TestimonialCardType } from "@/types";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: TestimonialCardType;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <section className="w-full py-5">
      <h2 className="text-[64px] font-medium">
        Client Testimonial
      </h2>
      <div className="flex flex-col md:flex-row bg-white overflow-hidden w-full gap-4">
        {/* Device Image */}
        <div className="w-full md:w-2/3 bg-gray-100 overflow-hidden rounded-xl">
          <Image
            src={testimonial.imageSrc}
            alt="Gas Detection Tool"
            width={1000}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Testimonial Section */}
        <div className="w-full md:w-1/3 p-6 flex bg-[#F9F9F9] flex-col justify-between rounded-2xl">
          <div>
            <p className="text-lg text-gray-800 mb-6">
              {testimonial.testimonial}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-auto">
            <Image
              src={testimonial.userImageSrc}
              alt={testimonial.userName}
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">{testimonial.userName}</p>
              <p className="text-gray-600 text-sm">{testimonial.userRole}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
