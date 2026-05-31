"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "SOLUTIONS", href: "/solutions", hasDropdown: true },
  { label: "PRODUCTS", href: "/products", hasDropdown: true },
  { label: "PROJECTS", href: "/projects" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT US", href: "/contact" },
];

const MOBILE_MENU_LINKS = [
  { label: "ABOUT US", href: "/about" },
  { label: "PROJECTS", href: "/projects" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="hidden lg:block bg-gray-100 border-b border-gray-200">
        <div className="container-custom flex items-center justify-between py-2 text-sm text-gray-600">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              c
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

      {/* MAIN NAVBAR */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* LOGO */}
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="N.O.B.S Technologies"
                width={140}
                height={50}
                priority
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <div key={item.label} className="group relative">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 text-sm font-semibold transition-colors ${isActive
                          ? "text-[#7ac943]"
                          : "text-gray-800 hover:text-[#7ac943]"
                        }`}
                    >
                      {item.label}
                      {item.hasDropdown && <ChevronDown size={15} />}
                    </Link>

                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] bg-[#7ac943] transition-all ${isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    />

                    {/* DROPDOWNS */}
                    {item.hasDropdown && (
                      <div className="absolute top-full left-0 mt-5 w-64 rounded-xl border bg-white shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
                        <div className="p-2">
                          {item.label === "SOLUTIONS" && (
                            <>
                              <Link href="/solutions/cctv" className="block px-4 py-3 hover:bg-gray-50 rounded-lg">
                                CCTV & Surveillance
                              </Link>
                              <Link href="/solutions/access-control" className="block px-4 py-3 hover:bg-gray-50 rounded-lg">
                                Access Control
                              </Link>
                              <Link href="/solutions/networking" className="block px-4 py-3 hover:bg-gray-50 rounded-lg">
                                Networking
                              </Link>
                              <Link href="/solutions/wireless" className="block px-4 py-3 hover:bg-gray-50 rounded-lg">
                                Wireless Links
                              </Link>
                              <Link href="/solutions/data-centre" className="block px-4 py-3 hover:bg-gray-50 rounded-lg">
                                Data Centre & Power
                              </Link>
                              <Link href="/solutions/voip" className="block px-4 py-3 hover:bg-gray-50 rounded-lg">
                                VoIP & Communications
                              </Link>
                              <Link href="/solutions/cabling" className="block px-4 py-3 hover:bg-gray-50 rounded-lg">
                                Structured Cabling
                              </Link>
                            </>
                          )}

                          {item.label === "PRODUCTS" && (
                            <>
                              <Link href="/products/cctv" className="block px-4 py-3 hover:bg-gray-50 rounded-lg">
                                CCTV Cameras
                              </Link>
                              <Link href="/products/access-control" className="block px-4 py-3 hover:bg-gray-50 rounded-lg">
                                Access Control Systems
                              </Link>
                              <Link href="/products/networking" className="block px-4 py-3 hover:bg-gray-50 rounded-lg">
                                Networking Equipment
                              </Link>
                              <Link href="/products/wireless" className="block px-4 py-3 hover:bg-gray-50 rounded-lg">
                                Wireless Devices
                              </Link>
                              <Link href="/products/power" className="block px-4 py-3 hover:bg-gray-50 rounded-lg">
                                Power Solutions
                              </Link>
                              <Link href="/products/cabling" className="block px-4 py-3 hover:bg-gray-50 rounded-lg">
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

            {/* MOBILE SHORT NAV + MENU */}
            <div className="flex items-center gap-4 lg:hidden">

              <Link
                href="/"
                className={`text-xs font-semibold ${pathname === "/" ? "text-[#7ac943]" : "text-gray-800"
                  }`}
              >
                Home
              </Link>

              <Link
                href="/solutions"
                className={`text-xs font-semibold ${pathname.startsWith("/solutions")
                    ? "text-[#7ac943]"
                    : "text-gray-800"
                  }`}
              >
                Solutions
              </Link>

              <Link
                href="/products"
                className={`text-xs font-semibold ${pathname.startsWith("/products")
                    ? "text-[#7ac943]"
                    : "text-gray-800"
                  }`}
              >
                Products
              </Link>

              <button onClick={() => setMenuOpen(true)}>
                <Menu size={26} />
              </button>
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden lg:flex">
              <Link href="/contact" className="btn-primary">
                GET A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-white z-[100] transition-transform duration-300 lg:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          <button onClick={() => setMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col px-6">
          {MOBILE_MENU_LINKS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`py-5 border-b font-semibold ${isActive ? "text-[#7ac943]" : "text-gray-800"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}