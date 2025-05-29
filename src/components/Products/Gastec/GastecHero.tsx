'use client';
import images from '@/data/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import RevealComponent from '@/components/Comman/RevealComponent';
import { useWindowWidth } from '@/hooks/useWindowSize';

// GastecText: Reveal → Fade Out
const GastecText = () => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 2500); // Wait for RevealComponent duration

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='hidden lg:block absolute w-fit top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <RevealComponent direction='left' outerClass='w-fit h-fit'>
                <motion.h2
                    className='w-fit uppercase text-9xl font-medium text-custom-blue-1'
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: fadeOut ? 0 : 1, y: fadeOut ? 100 : 0 }}
                    transition={{ duration: 1 }}

                >
                    GASTEC
                </motion.h2>
            </RevealComponent>
        </div>
    );
};

// TubeImageComponent: Reveal → Rotate
const TubeImageComponent = () => {
    const [startRotate, setStartRotate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartRotate(true);
        }, 2600); // Wait for RevealComponent duration

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="hidden lg:block absolute z-[20] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div
                initial={{ rotate: 270 }}
                animate={{ rotate: startRotate ? 405 : 270 }} // 270 → 405 = +135° clockwise
                transition={{ duration: 1 }}

            >
                <RevealComponent direction='left' outerClass="origin-center w-fit h-fit">
                    <Image
                        src={images.Gastec2A}
                        alt="gastec-hero-obj"
                        width={1000}
                        height={238}
                        className="object-contain w-[170px] h-fit"
                    />
                </RevealComponent>
            </motion.div>
        </div>
    );
};

// GlideText (already okay)
const GlideText = () => (
    <RevealComponent outerClass="relative overflow-hidden w-full z-[14]">
        <motion.div
            className="whitespace-nowrap text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-custom-blue-1"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
            <span className="mr-10">Fast, Reliable, & Precise On-Site Gas Analysis</span>
            <span className="mr-10">Fast, Reliable, & Precise On-Site Gas Analysis</span>
        </motion.div>
    </RevealComponent>
);

// Final Hero Section
const GastecHero = () => {
    const [milestone, setMilestone] = useState(0);
    const width = useWindowWidth();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;
        const timings = [2.5, 1, 2.5, 1, 2.5];
        let index = 0;

        const advance = () => {
            if (index >= timings.length) return;
            setTimeout(() => {
                setMilestone(prev => prev + 1);
                index++;
                advance();
            }, timings[index] * 1000);
        };

        advance();
    }, [isClient]);

    // 🔐 Prevent rendering anything width-dependent until we're on the client
    if (!isClient) return null;

    const renderContent = width < 768 || (milestone >= 4 && width >= 768);
    return (
        <header className={`relative rounded-3xl lg:h-[750px] custom-linear-gradient-white transition-all duration-500 ease-linear px-4 sm:px-6 overflow-hidden md:px-10 pt-[20px] md:pt-11 md:pt-1`}>

            {/* ✅ Step 0: Reveal GASTEC */}
            {milestone >= 0 && width > 768 && <GastecText />}

            {/* ✅ Step 2: Reveal Tube Image */}
            {milestone >= 2 && width > 768 && <TubeImageComponent />}

            {/* ✅ Step 4: Show final content */}

            {renderContent && (
                // your content for small screen
                <div className={`relative ${milestone >= 5 ? 'z-[21]' : 'z-[19]'} flex flex-col overflow-hidden gap-6 md:gap-8 mt-16`}>

                    <RevealComponent direction="bottom" outerClass="w-full md:w-3/4 lg:w-1/2">
                        <h1 className="text-4xl sm:text-6xl font-semibold leading-tight md:leading-[1.4] lg:leading-[1.5] w-full">
                            Gastec Gas <br /> Detector Tubes
                        </h1>
                    </RevealComponent>

                    <GlideText />

                    <RevealComponent outerClass="self-start md:self-end w-full md:w-[70%] lg:w-[40%] space-y-6">
                        <p className="text-base md:text-lg font-normal">
                            {"Designed for industrial safety, environmental monitoring, and compliance testing, Gastec's advanced gas detection tubes offer quick and accurate measurements with no need for complex equipment."}
                        </p>
                    </RevealComponent>

                    <RevealComponent>
                        <Image
                            src={images.Gastec2}
                            alt="gastec-mobile-tube"
                            width={1000}
                            height={238}
                            className="block lg:hidden z-[15] rotate-180 w-full object-contain object-center"
                        />
                    </RevealComponent>
                </div>
            )}
        </header>
    );
};


export default GastecHero;
