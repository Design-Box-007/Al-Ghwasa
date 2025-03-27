'use client'

import React, { useState } from "react";
import { FaBars, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { NavLinksType } from "@/types";
import { navLinks } from "@/data/comman";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full top-[40px] z-50">
            <div className="w-[95%] mx-auto rounded-[40px] backdrop-blur-md bg-black/30 border-b border-white/10">
                <div className="max-w-full flex items-center justify-between mx-auto py-c-10 px-c-20 font-medium">
                    {/* ✅ Logo (Always Visible) */}
                    <Link href="#" className="text-white text-3xl font-semibold font-radjdhani">
                        Al Ghwasa
                    </Link>

                    {/* ✅ NavLinks & Contact Button (Visible on md+ screens) */}

                    <ul className="hidden rounded-[20px] lg:flex text-white">
                        {navLinks.map((navlink: NavLinksType, index: number) => (
                            <Link
                                href={navlink.navHref}
                                passHref
                                key={index}
                                className={`pr-4 mr-4 ${index !== navLinks.length - 1 ? "border-r-primary border-r-[1px]" : ""}`}
                            >
                                <li className="hover:-translate-y-2 transition-all duration-200 ease-in-out cursor-pointer">{navlink.navTitle}</li>
                            </Link>
                        ))}
                    </ul>
                    <div className="hidden lg:block">
                        {/* ✅ Contact Button */}
                        <Link href="/contact">
                            <button className="bg-white rounded-4xl p-c-10 flex items-center gap-c-10">
                                <div className="rounded-full bg-custom-green-1 text-white size-[24px] p-0.5 flex items-center justify-center">
                                    <FaPhoneAlt size={16} />
                                </div>
                                <span>Contact Us</span>
                            </button>
                        </Link>
                    </div>

                    {/* ✅ Hamburger Button (Only on Mobile) */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* ✅ Mobile Menu (Visible when isOpen) */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`md:hidden flex flex-col items-center absolute top-16 left-0 w-full bg-black/50 backdrop-blur-md space-y-4 p-4 transition-all duration-300 ${isOpen ? "flex" : "hidden"
                        }`}
                >
                    {navLinks.map((link: NavLinksType, index: number) => (
                        <Link
                            key={index}
                            href={link.navHref}
                            className="text-white py-2 text-lg px-4 hover:text-gray-300"
                        >
                            {link.navTitle}
                        </Link>
                    ))}

                    {/* ✅ Contact Button (Inside Mobile Menu) */}
                    <Link href="/contact">
                        <button className="bg-white rounded-4xl p-c-10 flex items-center gap-c-10">
                            <div className="rounded-full bg-custom-green-1 text-white size-[24px] p-0.5 flex items-center justify-center">
                                <FaPhoneAlt size={16} />
                            </div>
                            <span>Contact Us</span>
                        </button>
                    </Link>
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;
