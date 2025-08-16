import Image from "next/image";
import { ArrowRight } from "react-feather";

export default function GastecHero() {
  return (
    <section className="pt-40 flex items-center justify-center md:px-15 px-5">
      <div className="w-full border border-gray-400 rounded-2xl p-4 flex flex-col gap-4 bg-gray-200">
        <div className="relative w-full rounded-3xl overflow-hidden">
          <Image
            src="/images/Gastec3/gas-generator-solutions/PD_1C_1.jpg"
            alt="Al Ghwasa Gastec Industries Background"
            width={3000}
            height={100}
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col md:flex-col gap-2.5 lg:flex-row lg:justify-between items-center">
          <div className="flex flex-col gap-6 ">
            <h1 className="font-dm-sans font-semibold md:text-5xl text-3xl leading-[1.302] tracking-[0.01em]">
              Permeater PD-1C
            </h1>
            <p>Precision Callibration Gas Generation</p>
          </div>

          <div className="flex flex-col justify-between h-full gap-6">
            <p className="font-poppins font-semibold text-base leading-[1.5] tracking-[0.01em] max-w-md">
              Achieve highly accurate and stable calibration gas production for
              extended periods. The PD-1C is engineered for laboratories,
              industrial plants, and field applications requiring absolute
              precision.
            </p>
            <button className="flex items-center justify-between gap-3 px-6 py-2 border border-gray-300 rounded-full bg-white hover:shadow-md transition w-[250px]">
              <span className="text-gray-900 font-medium">Request a Quote</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
