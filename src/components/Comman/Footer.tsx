import { navLinks, socialMedia } from '@/data/comman'
import { NavLinksType, SocialMediaLinks } from '@/types'
import Link from 'next/link'

import React from 'react'
import ProductCTA from './ProductCTA'
import images from '@/data/assets'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='h-auto lg:h-[395px] p-c-10'>
            <div className='px-4 py-10 rounded-2xl h-full overflow-hidden custom-linear-gradient-blue flex flex-col justify-between gap-4'>
                {/* top */}
                <div>
                    <nav className="flex flex-col gap-4 lg:flex-row lg:items-center justify-between">
                        {/* logo */}
                        <div className="text-xl font-bold text-white flex flex-row items-center gap-2 flex-1">
                            <Link href="/" className="text-white w-[100px] text-3xl font-semibold font-radjdhani">
                                <Image
                                    src={images.Logo}
                                    alt='al-ghwasa'
                                    width={204}
                                    height={136}
                                    className='w-full h-full object-contain'
                                />
                            </Link>
                        </div>
                        {/* Desktop Navigation Links */}
                        <ul className="rounded-[20px] flex flex-col lg:flex-row gap-2 text-white flex-[2] justify-center">
                            {navLinks.map((navlink: NavLinksType, index: number) => (
                                <Link
                                    href={navlink.navHref || '#'}
                                    key={index}
                                    className={`pr-4 mr-4 ${index !== navLinks.length - 1 ? "lg:border-r-white lg:border-r-[1px]" : ""}`}
                                    passHref
                                >
                                    <li className="hover:text-white cursor-pointer">{navlink.navTitle}</li>
                                </Link>
                            ))}
                        </ul>

                        <ul className="rounded-[20px] flex gap-5 text-white flex-1 lg:justify-end">
                            {socialMedia.map(({ link, icon: Icon }: SocialMediaLinks, index: number) => (
                                <a
                                    href={link}
                                    key={index}
                                >
                                    <Icon size={20} className='text-white' />
                                </a>
                            ))}
                        </ul>
                    </nav>
                </div>
                {/* middle */}
                {/* <div className='w-full flex flex-col lg:flex-row lg:items-center justify-between gap-4 capitalize'>


                    <p className='text-sm font-normal text-white'>For inquiries, email us at <a href={`mailto:${contactUsEmail.toLowerCase()}`} target='_blank' className="mt-2 lowercase font-bold">{contactUsEmail}</a></p>

                    <p className='text-sm font-normal text-white'><a href='https://www.pixelpanda.ae/'>This website is Designed and Developed by The <b>Pixel Panda Technology</b></a></p>

                    <div className='space-y-4 lg:space-x-4'>
                        <span className='text-sm block lg:inline font-normal text-white capitalize'>Privacy policy</span>
                        <span className='text-sm block lg:inline font-normal text-white capitalize'>Terms & conditions</span>
                    </div>
                </div> */}


                {/* products  */}
                <div className='w-full py- flex flex-col lg:flex-row lg:items-center justify-between gap-4 capitalize'>
                    <h2 className='text-4xl lg:text-7xl capitalize text-white font-semibold'>Lot more to Explore</h2>
                    <div className="flex flex-wrap gap-3 font-semibold">
                        <ProductCTA link="/gastec" name="Gastec" imgSrc={images.ProductThumbnail} className="text-custom-green-1" />
                        <ProductCTA link="/mx-3" name="MX3" imgSrc={images.ProductThumbnail} className="text-custom-green-1" />
                        <ProductCTA link="/frying-oil-tester" name="Oil Tester" imgSrc={images.ProductThumbnail1} className="text-custom-red-light" />
                    </div>
                </div>

                {/* bottom */}


            </div>
        </footer>
    )
}

export default Footer