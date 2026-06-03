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
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "SOLUTIONS", href: "/solutions", hasDropdown: true },
  { label: "PRODUCTS", href: "/products", hasDropdown: true },
  { label: "PROJECTS", href: "/projects" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT US", href: "/contact" },
];

const SOLUTIONS_LINKS = [
  { label: "CCTV & Surveillance", href: "/solutions/cctv-surveillance" },
  { label: "Access Control", href: "/solutions/access-control" },
  { label: "Networking", href: "/solutions/networking" },
  { label: "Wireless Links", href: "/solutions/wireless-links" },
  { label: "Data Centre & Power", href: "/solutions/data-centre-power" },
  { label: "VoIP & Communications", href: "/solutions/voip-communications" },
  { label: "Structured Cabling", href: "/solutions/structured-cabling" },
  { label: "Managed IT Services", href: "/solutions/managed-it-services" },
];

const PRODUCTS_LINKS = [
  { label: "CCTV Cameras", href: "/products/cctv" },
  { label: "Access Control Systems", href: "/products/access-control" },
  { label: "Networking Equipment", href: "/products/networking" },
  { label: "Wireless Devices", href: "/products/wireless" },
  { label: "Power Solutions", href: "/products/power" },
  { label: "Cabling & Accessories", href: "/products/cabling" },
];

const SOCIALS = [
  { icon: FaFacebook, label: "Facebook", href: "https://facebook.com" },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const toggleMobile = (label: string) =>
    setMobileExpanded((prev) => (prev === label ? null : label));

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="hidden lg:block bg-gray-100 border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">

          {/* Left — contact info */}
          <div className="flex items-center gap-6">
            <Link
              href="https://wa.me/27791475592"
              target="_blank"
              className="flex items-center gap-2 group"
            >
              <span className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#7ac943] transition-colors flex-shrink-0">
                <Phone className="w-3 h-3 text-[#7ac943]" strokeWidth={1.5} />
              </span>
              <span className="text-xs text-gray-600 group-hover:text-[#7ac943] transition-colors">
                +27 (0) 791 475 592
              </span>
            </Link>

            <Link
              href="mailto:info@nobstechnologies.co.za"
              className="flex items-center gap-2 group"
            >
              <span className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#7ac943] transition-colors flex-shrink-0">
                <Mail className="w-3 h-3 text-[#7ac943]" strokeWidth={1.5} />
              </span>
              <span className="text-xs text-gray-600 group-hover:text-[#7ac943] transition-colors">
                info@nobstechnologies.co.za
              </span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-3 h-3 text-[#7ac943]" strokeWidth={1.5} />
              </span>
              <span className="text-xs text-gray-600">Pretoria, South Africa</span>
            </div>
          </div>

          {/* Right — socials */}
          <div className="flex items-center gap-2">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-[#7ac943] hover:text-[#7ac943] transition-colors duration-200"
              >
                <Icon className="w-3 h-3" strokeWidth={1.5} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
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

                const dropdownLinks =
                  item.label === "SOLUTIONS"
                    ? SOLUTIONS_LINKS
                    : item.label === "PRODUCTS"
                    ? PRODUCTS_LINKS
                    : [];

                return (
                  <div key={item.label} className="group relative">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                        isActive
                          ? "text-[#7ac943]"
                          : "text-gray-800 hover:text-[#7ac943]"
                      }`}
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronDown
                          size={14}
                          className="transition-transform group-hover:rotate-180 duration-200"
                        />
                      )}
                    </Link>

                    {/* Active / hover underline */}
                    <span
                      className={`absolute left-0 -bottom-[21px] h-[2px] bg-[#7ac943] transition-all duration-200 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />

                    {/* DROPDOWN */}
                    {item.hasDropdown && (
                      <div className="absolute top-full left-0 mt-5 w-64 rounded-xl border border-gray-100 bg-white shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
                        <div className="p-2">
                          {dropdownLinks.map(({ label, href }) => (
                            <Link
                              key={label}
                              href={href}
                              className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#7ac943] rounded-lg transition-colors group/item"
                            >
                              <span className="w-1 h-1 rounded-full bg-[#7ac943] opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0" />
                              {label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* DESKTOP CTA */}
            <div className="hidden lg:flex">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#7ac943] hover:bg-[#6ab535] transition-colors text-white text-sm font-bold tracking-wide uppercase px-6 py-3 rounded-md"
              >
                Get a Quote
              </Link>
            </div>

            {/* MOBILE — short links + hamburger */}
            <div className="flex items-center gap-4 lg:hidden">
              <Link
                href="/"
                className={`text-xs font-semibold ${
                  pathname === "/" ? "text-[#7ac943]" : "text-gray-800"
                }`}
              >
                Home
              </Link>
              <Link
                href="/solutions"
                className={`text-xs font-semibold ${
                  pathname.startsWith("/solutions")
                    ? "text-[#7ac943]"
                    : "text-gray-800"
                }`}
              >
                Solutions
              </Link>
              <Link
                href="/products"
                className={`text-xs font-semibold ${
                  pathname.startsWith("/products")
                    ? "text-[#7ac943]"
                    : "text-gray-800"
                }`}
              >
                Products
              </Link>
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={26} className="text-gray-800" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      <div
        className={`fixed inset-0 bg-white z-[100] transition-transform duration-300 lg:hidden flex flex-col ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image src="/logo.svg" alt="Logo" width={120} height={40} priority />
          </Link>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={28} className="text-gray-800" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col px-6 overflow-y-auto flex-1">

          {/* All nav links with accordion for dropdowns */}
          {NAV_LINKS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            const dropdownLinks =
              item.label === "SOLUTIONS"
                ? SOLUTIONS_LINKS
                : item.label === "PRODUCTS"
                ? PRODUCTS_LINKS
                : [];

            if (item.hasDropdown) {
              const isOpen = mobileExpanded === item.label;
              return (
                <div key={item.label} className="border-b border-gray-100">
                  <button
                    onClick={() => toggleMobile(item.label)}
                    className={`w-full flex items-center justify-between py-5 font-semibold text-sm ${
                      isActive ? "text-[#7ac943]" : "text-gray-800"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 text-[#7ac943] ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="flex flex-col gap-1 pb-4 pl-2">
                      {dropdownLinks.map(({ label, href }) => (
                        <Link
                          key={label}
                          href={href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-[#7ac943] rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7ac943] flex-shrink-0" />
                          {label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`py-5 border-b border-gray-100 font-semibold text-sm ${
                  isActive ? "text-[#7ac943]" : "text-gray-800"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Mobile contact info */}
          <div className="mt-6 flex flex-col gap-3 pb-6">
            <Link
              href="https://wa.me/27791475592"
              target="_blank"
              className="flex items-center gap-3"
            >
              <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0">
                <Phone className="w-3.5 h-3.5 text-[#7ac943]" strokeWidth={1.5} />
              </span>
              <span className="text-xs text-gray-600">+27 (0) 791 475 592</span>
            </Link>

            <Link
              href="mailto:info@nobstechnologies.co.za"
              className="flex items-center gap-3"
            >
              <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0">
                <Mail className="w-3.5 h-3.5 text-[#7ac943]" strokeWidth={1.5} />
              </span>
              <span className="text-xs text-gray-600">info@nobstechnologies.co.za</span>
            </Link>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="px-6 py-5 border-t border-gray-100">
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#7ac943] hover:bg-[#6ab535] transition-colors text-white text-sm font-bold tracking-wide uppercase px-6 py-4 rounded-md w-full"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}