"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { navLinks } from "@/data/comman";
import { NavLinksType } from "@/types";
import formatToHyphenated from "@/utils/formatPathName";
// import Image from "next/image";
// import images from "@/data/assets";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<{
    [key: string]: boolean;
  }>({});
  const pathname = usePathname();
  // const [open, setOpen] = useState<string | null>(null);
  const isHome = pathname === "/";
  const isBlog = pathname === "/blogs";
  const toggleMobileDropdown = (key: string) => {
    setMobileDropdown((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <nav className={`absolute top-[40px] w-full z-[9999]`}>
      <div className="w-[95%] mx-auto rounded-[40px]">
        <div className="max-w-full flex items-center justify-between mx-auto py-c-10 px-c-20 font-medium">
          {/* Brand */}
          <Link
            href="/"
            className=" text-black text-3xl font-semibold font-radjdhani"
          >
            {/* <Image
              src={images.Logo}
              alt="al-ghwasa"
              width={204}
              height={136}
              className="w-full h-full object-contain"
            /> */}

            <h1
              className={`text-[#0F2E53] text-4xl font-sans ${
                isHome || isBlog ? "text-white" : "text-[#0F2E53]"
              }`}
            >
              Al Ghwasa
            </h1>
          </Link>

          {/* Desktop Menu */}
          <ul
            className={`hidden lg:flex items-center gap-6 ${
              isHome || isBlog ? "text-white" : "text-[#0F2E53]"
            }`}
          >
            {navLinks.map((navlink: NavLinksType, index: number) => (
              <li key={index} className="relative group">
                {navlink.subLinks ? (
                  <>
                    <span className="cursor-pointer hover:-translate-y-1 inline-block transition">
                      {navlink.navTitle}
                    </span>

                    {/* Mega Menu only for Our Products */}
                    {navlink.navTitle === "Our Products" ? (
                      <div className="absolute top-full left-1/2 -translate-x-1/4 mt-4 w-[950px] bg-white text-black shadow-lg rounded-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all z-10 p-6">
                        <div className="grid grid-cols-3 gap-8">
                          {navlink.subLinks.map((sublink, i) => (
                            <div key={i}>
                              <h4 className="font-semibold text-[#0a2c61] mb-3">
                                {sublink.navTitle}
                              </h4>
                              <ul className="space-y-2">
                                {sublink.subLinks?.map((item, j) => (
                                  <li key={j}>
                                    <Link
                                      href={
                                        item.navHref ||
                                        `/categories/${formatToHyphenated(
                                          item.navTitle
                                        )}`
                                      }
                                      className="text-gray-800 hover:text-[#0a2c61] transition"
                                    >
                                      {item.navTitle}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* Normal small dropdown */
                      <div className="absolute top-full left-0 mt-2 min-w-[200px] bg-black/70 text-white shadow-lg rounded-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all z-10">
                        <ul>
                          {navlink.subLinks.map((sublink, i) => (
                            <li key={i}>
                              <Link
                                href={sublink.navHref || "#"}
                                className="block px-4 py-2 hover:bg-white/10"
                              >
                                {sublink.navTitle}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={navlink.navHref || "#"}
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
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="text-black focus:outline-none"
            >
              {isMobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="lg:hidden flex flex-col px-6 pb-6 bg-black/50 backdrop-blur-md text-white space-y-4">
            {navLinks.map((navlink: NavLinksType, i: number) => (
              <div key={i} className="w-full">
                {navlink.subLinks ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(String(i))}
                      className="flex justify-between w-full py-2"
                    >
                      {navlink.navTitle}
                      <span>{mobileDropdown[i] ? "-" : "+"}</span>
                    </button>
                    {mobileDropdown[i] && (
                      <div className="ml-4 mt-2 space-y-2">
                        {navlink.subLinks.map(
                          (sublink: NavLinksType, j: number) => (
                            <div key={j}>
                              {sublink.subLinks ? (
                                <>
                                  <button
                                    onClick={() =>
                                      toggleMobileDropdown(`${i}-${j}`)
                                    }
                                    className="flex justify-between w-full py-1"
                                  >
                                    {sublink.navTitle}
                                    <span>
                                      {mobileDropdown[`${i}-${j}`] ? "-" : "+"}
                                    </span>
                                  </button>
                                  {mobileDropdown[`${i}-${j}`] && (
                                    <div className="ml-4 mt-1">
                                      {sublink.subLinks.map(
                                        (item: NavLinksType, k: number) => (
                                          <Link
                                            key={k}
                                            href={item.navHref || "#"}
                                            className="block py-1"
                                            onClick={() =>
                                              setIsMobileOpen(false)
                                            }
                                          >
                                            {item.navTitle}
                                          </Link>
                                        )
                                      )}
                                    </div>
                                  )}
                                </>
                              ) : (
                                <Link
                                  href={sublink.navHref || "#"}
                                  className="block py-1"
                                  onClick={() => setIsMobileOpen(false)}
                                >
                                  {sublink.navTitle}
                                </Link>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={navlink.navHref || "#"}
                    className="block py-2"
                    onClick={() => setIsMobileOpen(false)}
                  >
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
