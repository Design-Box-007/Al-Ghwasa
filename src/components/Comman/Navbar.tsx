'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { navLinks } from '@/data/comman';
import { NavLinksType } from '@/types';

const Navbar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState<{ [key: string]: boolean }>({});

    const toggleMobileDropdown = (key: string) => {
        setMobileDropdown(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <nav className="fixed top-[40px] w-full z-50">
            <div className="w-[95%] mx-auto rounded-[40px] backdrop-blur-md bg-black/30 border-b border-white/10">
                <div className="max-w-full flex items-center justify-between mx-auto py-c-10 px-c-20 font-medium">
                    {/* Brand */}
                    <Link href="/" className="text-white text-3xl font-semibold font-radjdhani">
                        AL Ghwasa
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex text-white items-center gap-6">
                        {navLinks.map((navlink, index) => (
                            <li key={index} className="relative group">
                                {navlink.subLinks ? (
                                    <>
                                        <span className="cursor-pointer hover:-translate-y-1 inline-block transition">
                                            {navlink.navTitle}
                                        </span>

                                        {/* First-level dropdown */}
                                        <div className="absolute top-full left-0 mt-2 min-w-[200px] backdrop-blur-md bg-black/30 border-b border-white/10 text-white shadow-lg rounded-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all z-10">
                                            <ul>
                                                {navlink.subLinks.map((sublink, i) => (
                                                    <li key={i} className="relative group/sub">
                                                        {sublink.subLinks ? (
                                                            <>
                                                                <div className="flex justify-between items-center px-4 py-2 cursor-pointer">
                                                                    {sublink.navTitle}
                                                                    <span className="ml-2">{'>'}</span>
                                                                </div>

                                                                {/* Second-level dropdown */}
                                                                <div className="absolute top-0 left-full ml-1 min-w-[200px] backdrop-blur-md bg-black/30 border-b border-white/10 text-white shadow-lg rounded-lg 
                invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100 transition-all z-20">
                                                                    <ul>
                                                                        {sublink.subLinks.map((item, j) => (
                                                                            <li key={j}>
                                                                                <Link
                                                                                    href={item.navHref || '#'}
                                                                                    className="block px-4 py-2"
                                                                                >
                                                                                    {item.navTitle}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <Link
                                                                href={sublink.navHref || '#'}
                                                                className="block px-4 py-2"
                                                            >
                                                                {sublink.navTitle}
                                                            </Link>
                                                        )}
                                                    </li>

                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={navlink.navHref || '#'}
                                        className="hover:-translate-y-1 inline-block transition"
                                    >
                                        {navlink.navTitle}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Contact Button */}
                    <div className="hidden lg:block">
                        <Link href="/contact">
                            <button className="bg-white rounded-4xl p-c-10 flex items-center gap-c-10">
                                <div className="rounded-full bg-custom-green-1 text-white size-[24px] p-0.5 flex items-center justify-center">
                                    <FaPhoneAlt size={16} />
                                </div>
                                <span>Contact Us</span>
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileOpen(prev => !prev)}
                            className="text-white focus:outline-none"
                        >
                            {isMobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileOpen && (
                    <div className="lg:hidden flex flex-col px-6 pb-6 bg-black/50 backdrop-blur-md text-white space-y-4">
                        {navLinks.map((navlink, i) => (
                            <div key={i} className="w-full">
                                {navlink.subLinks ? (
                                    <>
                                        <button
                                            onClick={() => toggleMobileDropdown(String(i))}
                                            className="flex justify-between w-full py-2"
                                        >
                                            {navlink.navTitle}
                                            <span>{mobileDropdown[i] ? '-' : '+'}</span>
                                        </button>
                                        {mobileDropdown[i] && (
                                            <div className="ml-4 mt-2 space-y-2">
                                                {navlink.subLinks.map((sublink, j) => (
                                                    <div key={j}>
                                                        {sublink.subLinks ? (
                                                            <>
                                                                <button
                                                                    onClick={() => toggleMobileDropdown(`${i}-${j}`)}
                                                                    className="flex justify-between w-full py-1"
                                                                >
                                                                    {sublink.navTitle}
                                                                    <span>{mobileDropdown[`${i}-${j}`] ? '-' : '+'}</span>
                                                                </button>
                                                                {mobileDropdown[`${i}-${j}`] && (
                                                                    <div className="ml-4 mt-1">
                                                                        {sublink.subLinks.map((item, k) => (
                                                                            <Link
                                                                                key={k}
                                                                                href={item.navHref || '#'}
                                                                                className="block py-1"
                                                                            >
                                                                                {item.navTitle}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </>
                                                        ) : (
                                                            <Link href={sublink.navHref || '#'} className="block py-1">
                                                                {sublink.navTitle}
                                                            </Link>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link href={navlink.navHref || '#'} className="block py-2">
                                        {navlink.navTitle}
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* Contact in mobile */}
                        <Link href="/contact" className="mt-4">
                            <button className="bg-white text-black rounded-4xl p-c-10 flex items-center gap-c-10">
                                <div className="rounded-full bg-custom-green-1 text-white size-[24px] p-0.5 flex items-center justify-center">
                                    <FaPhoneAlt size={16} />
                                </div>
                                <span>Contact Us</span>
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
