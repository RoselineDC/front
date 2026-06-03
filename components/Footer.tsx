"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Fiber Optic", href: "/services" },
  { label: "VoIP & PBX", href: "/services" },
  { label: "Structured Cabling", href: "/services" },
  { label: "Wireless Links", href: "/services" },
  { label: "CCTV & Surveillance", href: "/services" },
  { label: "Access Control", href: "/services" },
  { label: "Networking", href: "/services" },
  { label: "Managed IT Services", href: "/services" },
];

const socials = [
  { icon: FaFacebook, label: "Facebook", href: "https://facebook.com" },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">



      {/* ── Main Footer Grid ── */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Col 1 — Brand ── */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-40">
                <Image
                  src="/logo.svg"
                  alt="N.O.B.S Technologies"
                  width={140}
                  height={50}
                  priority
                />
              </div>
            </Link>

            <p className="text-xs text-white/50 leading-relaxed">
              N.O.B.S Technologies — Network Operations &amp; Broadband Solutions.
              Professional technology solutions designed to connect, protect and
              power your world.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              <Link
                href="mailto:info@nobstechnologies.co.za"
                className="flex items-center gap-3 group"
              >
                <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#7ac943] transition-colors flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-[#7ac943]" strokeWidth={1.5} />
                </span>
                <span className="text-xs text-white/60 group-hover:text-white transition-colors">
                  info@nobstechnologies.co.za
                </span>
              </Link>

              <Link
                href="https://wa.me/27791475592"
                target="_blank"
                className="flex items-center gap-3 group"
              >
                <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#7ac943] transition-colors flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-[#7ac943]" strokeWidth={1.5} />
                </span>
                <span className="text-xs text-white/60 group-hover:text-white transition-colors">
                  +27 (0) 791 475 592
                </span>
              </Link>

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[#7ac943]" strokeWidth={1.5} />
                </span>
                <span className="text-xs text-white/60">
                  Johannesburg, South Africa
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2 mt-1">
              {socials.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#7ac943] hover:text-[#7ac943] transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>

          {/* ── Col 2 — Quick Links ── */}
          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#7ac943] rounded-full inline-block" />
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-xs text-white/50 hover:text-[#7ac943] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-[#7ac943]"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3 — Services ── */}
          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#7ac943] rounded-full inline-block" />
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-xs text-white/50 hover:text-[#7ac943] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-[#7ac943]"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4 — Working Hours ── */}
          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#7ac943] rounded-full inline-block" />
              Working Hours
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { day: "Monday – Friday", time: "08:00 – 17:00", open: true },
                { day: "Saturday", time: "09:00 – 13:00", open: true },
                { day: "Sunday", time: "Closed", open: false },
                { day: "Public Holidays", time: "Closed", open: false },
              ].map(({ day, time, open }) => (
                <div
                  key={day}
                  className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0"
                >
                  <span className="text-xs text-white/50">{day}</span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wide ${open ? "text-[#7ac943]" : "text-red-400/80"
                      }`}
                  >
                    {time}
                  </span>
                </div>
              ))}
            </div>

            {/* Emergency support note */}
            <div className="mt-5 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <p className="text-[10px] text-white/40 leading-relaxed">
                <span className="text-[#7ac943] font-bold">24/7 Technical Support</span>{" "}
                available for managed service clients. Contact us for details.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/30">
            © {new Date().getFullYear()} N.O.B.S Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-[11px] text-white/30 hover:text-[#7ac943] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/10">|</span>
            <Link href="/terms" className="text-[11px] text-white/30 hover:text-[#7ac943] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}