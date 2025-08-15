import Image from 'next/image'

export default function IndustryHero() {
  return (
    <section className="pt-40 flex items-center justify-center md:px-15">
      
      <div className="w-full border border-gray-400 rounded-2xl p-4 flex flex-col gap-4 bg-gray-200">
        
    
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

     
        <div className="flex justify-between items-center">
      
          <div className="flex flex-col gap-6">
            <h1 className="font-dm-sans font-semibold text-5xl leading-[1.302] tracking-[0.01em]">
              Industries We Serve
            </h1>
          </div>

       
          <div className="flex flex-col justify-between h-full gap-6">
            <p className="font-poppins font-semibold text-base leading-[1.5] tracking-[0.01em] max-w-md">
              Delivering trusted gas detection and safety solutions across diverse sectors worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
