"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "../../public/assets/images/logo1.png";

const navItems = [
  { name: "HOME", href: "/" },
  {
    name: "ABOUT US",
    href: "/about-us",
    subItems: [
      { name: "About Us", href: "/about" },
      { name: "Management", href: "/about/management" },
      { name: "Factory Profile", href: "/about/factory-profile" },
      { name: "Compliance", href: "/about/compliance" },
    ],
  },
  { name: "FACILITIES", href: "/our-facilities" },
  { name: "CLIENTS", href: "/clients" },
  { name: "SUSTAINABILITY", href: "/sustainability" },
  { name: "COMPLIANCE", href: "/compliance" },
  { name: "GALLERY", href: "/gallery" },
  { name: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname(); // Get the current pathname
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for the dropdown menu

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Image src={logo} width={50} height={50} alt="logo" />
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.subItems ? (
                  <div
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    className="group inline-block"
                  >
                    <Link
                      href={item.href}
                      className={`px-3 py-2 text-sm transition duration-300 ease-in-out ${
                        pathname === item.href
                          ? "text-primary_color"
                          : "text-gray-700 hover:text-green-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                    {isDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm transition duration-300 ease-in-out ${
                              pathname === subItem.href
                                ? "text-primary_color"
                                : "text-gray-700 hover:text-green-600 hover:bg-gray-100"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition duration-300 ease-in-out ${
                      pathname === item.href
                        ? "text-primary_color"
                        : "text-gray-700 hover:text-green-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition duration-300 ease-in-out ${
                    pathname === item.href
                      ? "text-white bg-primary_color rounded-md"
                      : "text-gray-700 hover:bg-gray-50 hover:text-green-600"
                  }`}
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <div className="ml-4">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`block px-3 py-2 text-sm transition duration-300 ease-in-out ${
                          pathname === subItem.href
                            ? "text-primary_color"
                            : "text-gray-700 hover:bg-gray-50 hover:text-green-600"
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
