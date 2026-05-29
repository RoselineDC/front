"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Shop", href: "/shop" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          <Link href="/" className="logo-link">
            <div className="logo-circle">
              <Image
                src="/logo.svg"
                alt="NOBS Logo"
                width={160}
                height={44}
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>

          <div className="desktop-nav">
            {NAV_LINKS.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions">

            <Link
              href="/contact"
              className="btn-primary"
            >
              Get a Quote
            </Link>

            <button
              onClick={() => setMenuOpen(v => !v)}
              className="burger"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button
          onClick={() => setMenuOpen(false)}
          className="mobile-close"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        {NAV_LINKS.map(link => (
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
          style={{ alignSelf: "flex-start" }}
          onClick={() => setMenuOpen(false)}
        >
          Get a Quote
        </Link>
      </div>
    </>
  );
}