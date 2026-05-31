"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link href="/" className="logo-link">
            <div className="logo-circle">
              <Image
                src="/logo.svg"
                alt="NOBS Logo"
                width={160}
                height={44}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <div key={link.label} style={{ position: "relative" }}>
                <Link
                  href={link.href}
                  className={`nav-link ${link.hasDropdown ? "nav-link-dropdown" : ""}`}
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown size={14} style={{ transition: "transform 0.2s" }} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <div className="dropdown-menu">
                    {link.label === "SOLUTIONS" && (
                      <>
                        <a href="/solutions/cctv" className="dropdown-item">
                          CCTV & Surveillance
                        </a>
                        <a href="/solutions/access-control" className="dropdown-item">
                          Access Control
                        </a>
                        <a href="/solutions/networking" className="dropdown-item">
                          Networking
                        </a>
                        <a href="/solutions/wireless" className="dropdown-item">
                          Wireless Links
                        </a>
                        <a href="/solutions/data-centre" className="dropdown-item">
                          Data Centre & Power
                        </a>
                        <a href="/solutions/voip" className="dropdown-item">
                          VoIP & Communications
                        </a>
                        <a href="/solutions/cabling" className="dropdown-item">
                          Structured Cabling
                        </a>
                      </>
                    )}

                    {link.label === "PRODUCTS" && (
                      <>
                        <a href="/products/cctv" className="dropdown-item">
                          CCTV Cameras
                        </a>
                        <a href="/products/access-control" className="dropdown-item">
                          Access Control Systems
                        </a>
                        <a href="/products/networking" className="dropdown-item">
                          Networking Equipment
                        </a>
                        <a href="/products/wireless" className="dropdown-item">
                          Wireless Devices
                        </a>
                        <a href="/products/power" className="dropdown-item">
                          Power Solutions
                        </a>
                        <a href="/products/cabling" className="dropdown-item">
                          Cabling & Accessories
                        </a>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="nav-actions">
            <Link href="/contact" className="btn-primary">
              GET A QUOTE
            </Link>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="burger"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button
          onClick={() => setMenuOpen(false)}
          className="mobile-close"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/contact"
          className="btn-primary"
          onClick={() => setMenuOpen(false)}
        >
          GET A QUOTE
        </Link>
      </div>
    </>
  );
}