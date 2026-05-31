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
      <style>{`
        /* ── Navbar Styles ── */
        .navbar {
          background: #FFFFFF;
          border-bottom: 1px solid #E5E5E5;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
          gap: 2rem;
        }

        .logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
          transition: opacity 0.2s;
        }

        .logo-link:hover {
          opacity: 0.8;
        }

        .logo-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 160px;
          height: 44px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
          justify-content: center;
        }

        .nav-link {
          position: relative;
          font-size: 0.85rem;
          font-weight: 600;
          color: #0D0D0D;
          text-decoration: none;
          padding: 0.75rem 1rem;
          border-radius: 0.4rem;
          transition: color 0.2s, background-color 0.2s;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .nav-link:hover {
          color: #7AC943;
          background-color: rgba(122, 201, 67, 0.08);
        }

        .nav-link.active {
          color: #7AC943;
          font-weight: 700;
        }

        .nav-link-dropdown {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: #FFFFFF;
          border: 1px solid #E5E5E5;
          border-radius: 0.5rem;
          min-width: 200px;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: opacity 0.2s, visibility 0.2s, transform 0.2s;
          margin-top: 0.5rem;
          z-index: 1000;
        }

        .nav-link:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-item {
          display: block;
          padding: 0.75rem 1.25rem;
          color: #0D0D0D;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 500;
          transition: background-color 0.2s, color 0.2s;
          text-transform: none;
          letter-spacing: 0;
        }

        .dropdown-item:first-child {
          border-radius: 0.4rem 0.4rem 0 0;
        }

        .dropdown-item:last-child {
          border-radius: 0 0 0.4rem 0.4rem;
        }

        .dropdown-item:hover {
          background-color: rgba(122, 201, 67, 0.1);
          color: #7AC943;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background-color: #7AC943;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.75rem 1.5rem;
          border-radius: 0.4rem;
          border: none;
          cursor: pointer;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          transition: background-color 0.2s, transform 0.15s;
          text-decoration: none;
          white-space: nowrap;
        }

        .btn-primary:hover {
          background-color: #6ba835;
          transform: translateY(-2px);
        }

        .btn-primary:active {
          transform: translateY(0);
        }

        .burger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #0D0D0D;
          padding: 0.5rem;
          transition: color 0.2s;
        }

        .burger:hover {
          color: #7AC943;
        }

        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: #FFFFFF;
          display: none;
          flex-direction: column;
          padding: 5rem 1.5rem 2rem;
          gap: 1.5rem;
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          overflow-y: auto;
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-menu .nav-link {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0D0D0D;
          padding: 0.75rem 0;
          border-radius: 0;
          background: none;
        }

        .mobile-menu .nav-link:hover {
          background: none;
          color: #7AC943;
        }

        .mobile-close {
          position: absolute;
          top: 1rem;
          right: 1.5rem;
          background: none;
          border: none;
          cursor: pointer;
          color: #0D0D0D;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-close:hover {
          color: #7AC943;
        }

        .mobile-menu .btn-primary {
          align-self: flex-start;
          margin-top: 1rem;
        }

        /* ── Responsive Design ── */
        @media (max-width: 1024px) {
          .navbar-container {
            height: 70px;
            gap: 1rem;
          }

          .desktop-nav {
            gap: 0.25rem;
          }

          .nav-link {
            padding: 0.6rem 0.75rem;
            font-size: 0.75rem;
          }
        }

        @media (max-width: 768px) {
          .navbar-container {
            height: 60px;
            padding: 0 1rem;
          }

          .logo-circle {
            width: 120px;
            height: 36px;
          }

          .desktop-nav {
            display: none;
          }

          .burger {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mobile-menu {
            display: flex;
          }

          .nav-actions {
            gap: 0.5rem;
          }

          .btn-primary {
            padding: 0.65rem 1.2rem;
            font-size: 0.75rem;
          }
        }

        @media (max-width: 640px) {
          .navbar-container {
            height: 56px;
          }

          .logo-circle {
            width: 100px;
            height: 30px;
          }

          .btn-primary {
            padding: 0.6rem 1rem;
            font-size: 0.7rem;
          }

          .mobile-menu {
            padding: 4rem 1rem 2rem;
          }
        }
      `}</style>

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