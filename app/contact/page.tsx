"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Navbar from "@/components/Navbar";


const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@nobstechnologies.co.za",
    href: "mailto:info@nobstechnologies.co.za",
    description: "We aim to respond within 24 hours on business days.",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+27 (0) 791 475 592",
    href: "tel:+27791475592",
    description: "Available Monday to Friday, 08:00 – 17:00.",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+27 (0) 791 475 592",
    href: "https://wa.me/27791475592",
    description: "Prefer to chat? Send us a WhatsApp message anytime.",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pretoria, Gauteng",
    href: null,
    description: "Serving clients across South Africa and the region.",
  },
];

const hours = [
  { day: "Monday – Friday", time: "08:00 – 17:00" },
  { day: "Saturday", time: "09:00 – 13:00" },
  { day: "Sunday & Public Holidays", time: "Closed" },
];

const socials = [
  { icon: FaFacebook, label: "Facebook", href: "https://facebook.com" },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

const INITIAL_FORM = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Full name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email address";
    }
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    if (!form.message.trim()) errs.message = "Message is required";
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validate()) return;

    setLoading(true);

    // /api/contact only has name/email/company/service/message fields,
    // so fold the phone number into the message body.
    const message = [`Phone: ${form.phone}`, "", form.message].join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          service: form.service || "Not specified",
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      setForm(INITIAL_FORM);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#f5f6f7] min-h-screen">

      {/* ── Hero Banner ── */}
      <section className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('/images/contact/contact-banner.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#7ac943]/10 blur-3xl pointer-events-none z-10" />

        <div className="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/50 uppercase tracking-widest font-semibold mb-6">
            <Link href="/" className="hover:text-[#7ac943] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#7ac943]">Contact</span>
          </div>

          <h1 className="text-white font-black leading-none tracking-tight">
            <span className="text-3xl sm:text-4xl lg:text-5xl">Let&apos;s</span>
            <span className="block text-[#7ac943] text-4xl sm:text-5xl lg:text-6xl mt-1">
              Work Together
            </span>
          </h1>

          <p className="mt-5 text-sm md:text-base text-white/70 max-w-xl">
            Whether you need a quote, technical advice or want to discuss a project — our team is ready to help.
          </p>
        </div>
      </section>

      {/* ── Contact Cards Row ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 uppercase tracking-tight mb-3">
              Contact <span className="text-[#7ac943]">Information</span>
            </h2>
            <div className="flex justify-center mb-4">
              <span className="h-[3px] w-14 bg-[#7ac943] rounded-full" />
            </div>
            <p className="text-gray-500 text-sm">Multiple ways to reach the N.O.B.S Technologies team.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactDetails.map(({ icon: Icon, label, value, href, description }) => (
              <div
                key={label}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-start gap-4 group hover:border-[#7ac943]/40 transition-colors duration-300"
              >
                <span className="w-12 h-12 rounded-full border-2 border-[#7ac943] flex items-center justify-center bg-white flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#7ac943]" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    {label}
                  </p>
                  {href ? (
                    <Link
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      className="text-sm font-extrabold text-gray-900 hover:text-[#7ac943] transition-colors duration-200 block mb-2"
                    >
                      {value}
                    </Link>
                  ) : (
                    <p className="text-sm font-extrabold text-gray-900 mb-2">{value}</p>
                  )}
                  <p className="text-xs text-gray-400 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Main Two Column ── */}
          <div className="grid lg:grid-cols-2 gap-6">

            {/* ── LEFT — Full Form ── */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-5"
            >
              <div>
                <h3 className="text-xl font-extrabold text-gray-900 uppercase tracking-wide mb-1">
                  Send Us A <span className="text-[#7ac943]">Message</span>
                </h3>
                <p className="text-xs text-gray-400">Fill in the form and we will get back to you shortly.</p>
              </div>

              {submitted && (
                <div className="flex items-center gap-2 bg-[#7ac943]/10 border border-[#7ac943]/40 text-gray-900 text-sm rounded-md px-4 py-3">
                  <CheckCircle size={18} className="text-[#7ac943] flex-shrink-0" />
                  <span>Thank you! We&apos;ll be in touch shortly.</span>
                </div>
              )}

              {error && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-md px-4 py-3">
                  <AlertCircle size={18} className="flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Full Name <span className="text-[#7ac943]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    disabled={loading}
                    className="border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-[#7ac943] transition-colors"
                  />
                  {fieldErrors.name && (
                    <span className="text-xs text-red-600">{fieldErrors.name}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    disabled={loading}
                    className="border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-[#7ac943] transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Email Address <span className="text-[#7ac943]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.co.za"
                    disabled={loading}
                    className="border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-[#7ac943] transition-colors"
                  />
                  {fieldErrors.email && (
                    <span className="text-xs text-red-600">{fieldErrors.email}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Phone Number <span className="text-[#7ac943]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+27 000 000 000"
                    disabled={loading}
                    className="border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-[#7ac943] transition-colors"
                  />
                  {fieldErrors.phone && (
                    <span className="text-xs text-red-600">{fieldErrors.phone}</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Service of Interest
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  disabled={loading}
                  className="border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#7ac943] transition-colors bg-white appearance-none"
                >
                  <option value="">Select a service...</option>
                  <option>CCTV & Surveillance</option>
                  <option>Access Control</option>
                  <option>Networking</option>
                  <option>Wireless Links</option>
                  <option>Data Centre & Power</option>
                  <option>VoIP & Communications</option>
                  <option>Structured Cabling</option>
                  <option>Managed IT Services</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Message <span className="text-[#7ac943]">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project, requirement or question..."
                  disabled={loading}
                  className="border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-[#7ac943] transition-colors resize-none"
                />
                {fieldErrors.message && (
                  <span className="text-xs text-red-600">{fieldErrors.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 bg-[#7ac943] hover:bg-[#6ab535] disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-white text-sm font-bold tracking-wide uppercase px-7 py-4 rounded-md"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>

            {/* ── RIGHT — Hours + Map + Socials ── */}
            <div className="flex flex-col gap-5">

              {/* Business Hours */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-11 h-11 rounded-full border-2 border-[#7ac943] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#7ac943]" strokeWidth={1.5} />
                  </span>
                  <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">
                    Business <span className="text-[#7ac943]">Hours</span>
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  {hours.map(({ day, time }) => (
                    <div key={day} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                      <span className="text-xs font-semibold text-gray-600">{day}</span>
                      <span className={`text-xs font-bold uppercase tracking-wide ${time === "Closed" ? "text-red-400" : "text-[#7ac943]"}`}>
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex-1 min-h-[220px]">
                <iframe
                  src="https://www.google.com/maps?q=NOBS+TECHNOLOGIES,+565+Servaas+St,+Pretoria+West,+Pretoria,+0183&output=embed" 
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "220px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="N.O.B.S Technologies Location"
                />
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-wide mb-4">
                  Follow <span className="text-[#7ac943]">Us</span>
                </h3>
                <div className="flex items-center gap-3">
                  {socials.map(({ icon: Icon, label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      aria-label={label}
                      className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#7ac943] hover:text-[#7ac943] transition-colors duration-200"
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}