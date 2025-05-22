import images from '@/data/assets'
import Image from 'next/image'
import React from 'react'

const FOTProduct = () => {
    return (
        <section>
            <div className="relative z-20 flex flex-col overflow-hidden gap-8 bg-white px-6 py-12 sm:py-20 lg:py-28">

                <div className="space-y-8 sm:space-y-10 max-w-full sm:max-w-[720px] lg:max-w-[900px]">
                    <h1 className="text-[36px] sm:text-[48px] lg:text-[70px] font-medium leading-tight sm:leading-[1.4] w-full sm:w-3/4">
                        Innovative Technology <br /> Designed for <br />
                        <span className="text-custom-red-light">
                            Food Safety <br /> Professionals
                        </span>
                    </h1>

                    <div className="space-y-6 sm:space-y-[60px] text-[20px] sm:text-[30px] font-inter leading-snug">
                        <p>Ensure compliance with stringent health <br className="hidden sm:block" /> and safety regulations.</p>
                        <p>Conduct on-the-spot oil testing <br className="hidden sm:block" /> with confidence.</p>
                    </div>
                </div>

                <Image
                    src={images.OilTester02}
                    alt='oil-tester'
                    width={1288} height={216}
                    className="absolute rotate-45 w-[40%] lg:w-full lg:rotate-0 z-[15] top-[60%] lg:top-1/2 object-contain object-center custom-translate-center !-left-[19%] lg:!left-[60%] h-full"
                />

                <div className="self-end w-full sm:w-[60%] lg:w-[40%] space-y-4 sm:space-y-6 mt-10 sm:mt-0">
                    <h6 className="text-[24px] sm:text-[40px] font-medium">Insight</h6>
                    <p className="font-normal text-base sm:text-lg leading-relaxed max-w-md">
                        By ensuring optimal oil conditions, this device helps maintain food safety, flavor consistency, and operational efficiency while preventing unnecessary oil waste.
                    </p>
                </div>
            </div>
        </section>

    )
}

export default FOTProduct