import images from '@/data/assets'
import Image from 'next/image'
import React from 'react'

const BlogHero = () => {
    return (
        <header className="w-full bg-white p-c-20 relative">
            <div className="relative overflow-hidden rounded-[20px] h-screen lg:min-h-[700px] lg:h-[800px] px-4 md:px-[5%] py-6 md:py-10 flex flex-col lg:flex-row justify-center lg:justify-start items-end gap-8">
                {/* Background Image */}
                <Image
                    src={images.gastecL}
                    alt="home-hero"
                    width={1360}
                    height={683}
                    className="absolute brightness-75 inset-0 z-10 object-cover object-center w-full h-full rounded-[20px]"
                />

                {/* Content Layer */}
                <div className="relative z-20 w-full text-white space-y-10">
                    {/* Heading + Product */}
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 border-b border-white pb-6 md:pb-10">
                        {/* Text Section */}
                        <div className="w-full lg:w-2/3 flex flex-col gap-4 text-center lg:text-left">
                            <h1 className="text-3xl md:text-5xl lg:text-[64px] font-medium leading-tight tracking-wide">
                                Innovative Solutions for Hospitality, Hydration & Safety
                            </h1>
                            <p className="text-base md:text-xl lg:text-2xl font-normal">
                                Advanced Equipment for Precision, Performance & Protection.
                            </p>
                        </div>



                    </div>


                </div>
            </div>
        </header>
    );
};

export default BlogHero;
