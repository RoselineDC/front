"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "SOLUTIONS", href: "/solutions", hasDropdown: true },
  { label: "PRODUCTS", href: "/products", hasDropdown: true },
  { label: "PROJECTS", href: "/projects" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-gray-100 border-b border-gray-200">
        <div className="container-custom flex items-center justify-between py-2 text-sm text-gray-600">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[#7ac943]" />
              <span>010 023 0378</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#7ac943]" />
              <span>info@nobstechnologies.co.za</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#7ac943]" />
              <span>Pretoria, South Africa</span>
            </div>
          </div>

          <div className="flex gap-4 text-xs">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="N.O.B.S Technologies"
                width={220}
                height={70}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <div
                    key={item.label}
                    className="group relative"
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-300 ${
                        isActive
                          ? "text-[#7ac943]"
                          : "text-gray-800 hover:text-[#7ac943]"
                      }`}
                    >
                      {item.label}

                      {item.hasDropdown && (
                        <ChevronDown size={15} />
                      )}
                    </Link>

                    {/* Active / Hover Underline */}
                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] bg-[#7ac943] transition-all duration-300 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />

                    {/* Dropdown */}
                    {item.hasDropdown && (
                      <div className="absolute top-full left-0 mt-5 w-64 rounded-xl border bg-white shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                        <div className="p-2">
                          {item.label === "SOLUTIONS" && (
                            <>
                              <Link href="/solutions/cctv" className="block px-4 py-3 rounded-lg hover:bg-gray-50">
                                CCTV & Surveillance
                              </Link>

                              <Link href="/solutions/access-control" className="block px-4 py-3 rounded-lg hover:bg-gray-50">
                                Access Control
                              </Link>

                              <Link href="/solutions/networking" className="block px-4 py-3 rounded-lg hover:bg-gray-50">
                                Networking
                              </Link>

                              <Link href="/solutions/wireless" className="block px-4 py-3 rounded-lg hover:bg-gray-50">
                                Wireless Links
                              </Link>

                              <Link href="/solutions/data-centre" className="block px-4 py-3 rounded-lg hover:bg-gray-50">
                                Data Centre & Power
                              </Link>

                              <Link href="/solutions/voip" className="block px-4 py-3 rounded-lg hover:bg-gray-50">
                                VoIP & Communications
                              </Link>

                              <Link href="/solutions/cabling" className="block px-4 py-3 rounded-lg hover:bg-gray-50">
                                Structured Cabling
                              </Link>
                            </>
                          )}

                          {item.label === "PRODUCTS" && (
                            <>
                              <Link href="/products/cctv" className="block px-4 py-3 rounded-lg hover:bg-gray-50">
                                CCTV Cameras
                              </Link>

                              <Link href="/products/access-control" className="block px-4 py-3 rounded-lg hover:bg-gray-50">
                                Access Control Systems
                              </Link>

                              <Link href="/products/networking" className="block px-4 py-3 rounded-lg hover:bg-gray-50">
                                Networking Equipment
                              </Link>

                              <Link href="/products/wireless" className="block px-4 py-3 rounded-lg hover:bg-gray-50">
                                Wireless Devices
                              </Link>

                              <Link href="/products/power" className="block px-4 py-3 rounded-lg hover:bg-gray-50">
                                Power Solutions
                              </Link>

                              <Link href="/products/cabling" className="block px-4 py-3 rounded-lg hover:bg-gray-50">
                                Cabling & Accessories
                              </Link>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden lg:flex btn-primary"
              >
                GET A QUOTE
              </Link>

              <button
                className="lg:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <X size={28} />
                ) : (
                  <Menu size={28} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-[100] transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setMenuOpen(false)}>
            <X size={30} />
          </button>
        </div>

        <div className="flex flex-col px-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`py-4 border-b text-lg font-semibold ${
                pathname === item.href
                  ? "text-[#7ac943]"
                  : "text-gray-800"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="mt-8 bg-[#7ac943] text-white text-center py-4 rounded-lg font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            GET A QUOTE
          </Link>
        </div>
      </div>
    </>
  );
}