"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "../../public/assets/images/logo.jpg";

const navItems = [
  { name: "HOME", href: "/" },
  {
    name: "ABOUT US",
    href: "/about-us",
    subItems: [
      { name: "About Us", href: "/about-us" },
      { name: "Management", href: "/about-us/management" },
      { name: "Factory Profile", href: "/about-us/factory-profile" },
      { name: "LIST OF MACHINERIES", href: "/about-us/list-of-machineries" },
    ],
  },
  { name: "FACILITIES", href: "/our-facilities" },
  { name: "CLIENTS", href: "/clients" },
  { name: "SUSTAINABILITY", href: "/sustainability" },
  { name: "COMPLIANCE", href: "/compliance" },
  {
    name: "GALLERY",
    href: "/product-gallery",
    subItems: [{ name: "Product Gallery", href: "/product-gallery" }],
  },
  { name: "CONTACT US", href: "/contact-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownOpen = (itemName: string) => {
    setOpenDropdown((prev) => (prev === itemName ? null : itemName));
  };

  const handleSubItemClick = () => {
    setOpenDropdown(null); // Close the dropdown when a submenu item is clicked
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logo || "/placeholder.svg"}
                width={50}
                height={50}
                alt="logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:ml-6 lg:flex items-center lg:space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => handleDropdownOpen(item.name)}
                      className={`flex items-center px-3 py-2 text-sm font-medium transition duration-300 ${
                        pathname === item.href
                          ? "text-primary_color"
                          : "text-gray-700 hover:text-primary_color"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-20">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={handleSubItemClick}
                            className={`block px-4 py-2 text-sm transition duration-300 ${
                              pathname === subItem.href
                                ? "text-primary_color"
                                : "text-gray-700 hover:text-white hover:bg-primary_color"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition duration-300 ${
                      pathname === item.href
                        ? "text-primary_color"
                        : "text-gray-700 hover:text-primary_color"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            {" "}
            {/* Show on sm and md */}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          {" "}
          {/* Ensure mobile menu is hidden on md and larger */}
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition duration-300 ${
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
                        className={`block px-3 py-2 text-sm transition duration-300 ${
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
