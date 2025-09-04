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
  const whitePages = [
    "/",
    "/blog",
    "/contact",
    "/product-page",
    "/gastec-2",
    "/induvial-product",
    "/product-overview",
    "/product-page",
    "/blogs",
    "/gastec/product-data",
    "/categories",
    "/polytec-tubes",
  ];

  const isWhite = whitePages.includes(pathname);

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
              className={`text-heading text-4xl font-sans ${
                isWhite ? "lg:text-white text-heading" : "text-heading"
              }`}
            >
              Al Ghwasa
            </h1>
          </Link>

          {/* Desktop Menu */}
          <ul
            className={`hidden lg:flex items-center gap-6 ${
              isWhite ? "text-white" : "text-[#0F2E53]"
            }`}
          >
            {navLinks.map((navlink: NavLinksType, index: number) => (
              <li key={index} className="relative group" id="navbar">
                {navlink.subLinks ? (
                  <>
                    <span className="cursor-pointer hover:-translate-y-1 inline-block transition">
                      {navlink.navTitle}
                    </span>

                    {/* Mega Menu only for Our Products */}
                    {navlink.navTitle === "Solutions" ? (
                      <div className="absolute top-full left-[-30] -translate-x-1/3 mt-3 w-screen max-w-[1150px] bg-white text-black shadow-lg rounded-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all z-10 p-6 overflow-hidden">
                        <div className="grid lg:grid-cols-3 gap-5">
                          {navlink.subLinks.map((sublink, i) => (
                            <div key={i}>
                              <Link href={sublink.navHref || `/categories`}>
                                <h4 className="font-semibold text-custom-blue-1 mb-3 md:text-[18px]">
                                  {sublink.navTitle}
                                </h4>
                              </Link>
                              <ul className="space-y-2">
                                {sublink.subLinks?.map((item, j) => (
                                  <li key={j} className="transition-all duration-200 hover:scale-[1.03]">
                                    <Link
                                      href={
                                        item.navHref ||
                                        `/categories/${formatToHyphenated(
                                          item.navTitle
                                        )}`
                                      }
                                      className="text-text-color hover:text-custom-blue-1 md:text-[16px] font-normal"
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
              <button
                className={`${
                  isWhite
                    ? "bg-white text-custom-blue-1"
                    : "bg-custom-blue-1 text-white"
                } rounded-4xl p-c-10 flex items-center gap-c-10`}
              >
                <div
                  className={`rounded-full ${
                    isWhite
                      ? "bg-custom-blue-1 text-white"
                      : "bg-white text-custom-blue-1"
                  } size-[24px] p-0.5 flex items-center justify-center`}
                >
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
                    {/* Parent link + toggle */}
                    <div className="flex justify-between items-center w-full py-2">
                      <Link
                        href={navlink.navHref || "#"}
                        className="flex-1"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {navlink.navTitle}
                      </Link>
                      <button
                        onClick={() => toggleMobileDropdown(String(i))}
                        className="ml-2"
                      >
                        {mobileDropdown[i] ? "-" : "+"}
                      </button>
                    </div>

                    {mobileDropdown[i] && (
                      <div className="ml-4 mt-2 space-y-2">
                        {navlink.subLinks.map(
                          (sublink: NavLinksType, j: number) => (
                            <div key={j}>
                              {sublink.subLinks ? (
                                <>
                                  {/* Second-level parent link + toggle */}
                                  <div className="flex justify-between items-center w-full py-1">
                                    <Link
                                      href={sublink.navHref || `/categories/`}
                                      className="flex-1"
                                      onClick={() => setIsMobileOpen(false)}
                                    >
                                      {sublink.navTitle}
                                    </Link>
                                    <button
                                      onClick={() =>
                                        toggleMobileDropdown(`${i}-${j}`)
                                      }
                                      className="ml-2"
                                    >
                                      {mobileDropdown[`${i}-${j}`] ? "-" : "+"}
                                    </button>
                                  </div>

                                  {mobileDropdown[`${i}-${j}`] && (
                                    <div className="ml-4 mt-1">
                                      {sublink.subLinks.map(
                                        (item: NavLinksType, k: number) => (
                                          <Link
                                            key={k}
                                            href={
                                              item.navHref ||
                                              `/categories/${formatToHyphenated(
                                                item.navTitle
                                              )}`
                                            }
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
