import Image from "next/image";
import { motion } from "framer-motion";

export default function IndustryHero() {
  return (
    <section className="pt-35 flex items-center justify-center md:px-15 px-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="w-full border lg:h-[600px] border-gray-300 rounded-2xl p-4 flex flex-col gap-4 bg-neutral">
          <div className="relative w-full rounded-3xl overflow-hidden">
            <Image
              src="/images/industry-hero.jpg"
              alt="Al Ghwasa Gastec Industries Background"
              width={3000}
              height={100}
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col md:flex-col gap-2.5 lg:flex-row lg:justify-between lg:items-center">
            <div className="flex flex-col gap-6 ">
              <h1 className="font-dm-sans font-semibold md:text-5xl text-2xl leading-[1.302] tracking-[0.01em]">
                Industries We Serve
              </h1>
            </div>

            <div className="flex flex-col justify-between h-full gap-6">
              <p className="font-poppins font-semibold md:text-base text-[10px] leading-[1.5] tracking-[0.01em] max-w-md">
                Delivering trusted gas detection and safety solutions across
                diverse sectors worldwide.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
