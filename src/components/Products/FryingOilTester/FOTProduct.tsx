import images from '@/data/assets'
import Image from 'next/image'
import React from 'react'

const FOTProduct = () => {
    return (
        <section>
            <div className='relative z-20 flex flex-col overflow-hidden gap-8 bg-white'>

                <div className='space-y-10'>
                    <h1 className='text-[70px] font-medium w-3/4 leading-[1.5]'>
                        Innovative Technology <br /> Designed for <span className='text-custom-red-light'>Food Safety <br /> Professionals</span>
                    </h1>

                    <div className='space-y-[60px]'>
                        <p className='font-inter text-[30px]'>Ensure compliance with stringent health <br /> and safety regulations.</p>
                        <p className='font-inter text-[30px]'>Conduct on-the-spot oil testing <br /> with confidence.</p>
                    </div>
                </div>


                <Image
                    src={images.OilTester02}
                    alt='oil-tester'
                    width={1288} height={216}
                    className="absolute z-[15] top-1/2 object-contain object-center custom-translate-center !left-[60%] h-full"
                />

                <div className='self-end w-[40%] space-y-6'>
                    <h6 className='text-[40px] font-medium'>
                        Insight
                    </h6>
                    <p className='font-normal text-lg'>
                        {"By ensuring optimal oil conditions, this device helps maintain food safety, flavor consistency, and operational efficiency while preventing unnecessary oil waste."}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FOTProduct