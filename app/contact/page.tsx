"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

/**
 * DESIGN TOKENS (matching your home page):
 * Primary:   #0D0D0D  (near-black)
 * Accent:    #B8E0BA  (sage green)
 * Surface:   #F7F7F5  (warm off-white)
 * Fonts:     DM Sans (body), DM Mono (accents)
 */

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "info@nobstech.co.za",
    href: "mailto:info@nobstech.co.za",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+27 (0) 11 XXX XXXX",
    href: "tel:+27011XXXXXX",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Johannesburg, South Africa",
    href: "#",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Fri, 08:00–17:00 SAST",
    href: "#",
  },
];

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: "", email: "", company: "", service: "", message: "" });
      
      // Reset after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform: translateY(24px); }
          to   { opacity:1; transform: translateY(0);    }
        }
        @keyframes slideIn {
          from { opacity:0; transform: translateX(-12px); }
          to   { opacity:1; transform: translateX(0);    }
        }
        @keyframes checkmark {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .fade-up { opacity:0; }
        .fade-up.ready { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) forwards; }
        .delay-1 { animation-delay: .1s; }
        .delay-2 { animation-delay: .22s; }
        .delay-3 { animation-delay: .34s; }
        .delay-4 { animation-delay: .46s; }
        .delay-5 { animation-delay: .58s; }

        .contact-card {
          border: 1px solid #E2E2E0;
          border-radius: .75rem;
          padding: 2rem;
          background: #fff;
          transition: all .2s;
        }
        .contact-card:hover {
          border-color: #B8E0BA;
          box-shadow: 0 8px 28px rgba(0,0,0,.07);
          transform: translateY(-3px);
        }

        .form-group {
          display: flex; flex-direction: column; gap: .5rem;
        }
        .form-label {
          font-size: .875rem; font-weight: 600; color: #0D0D0D;
          letter-spacing: .01em; font-family: 'DM Sans', sans-serif;
        }
        .form-input,
        .form-textarea,
        .form-select {
          font-family: 'DM Sans', sans-serif;
          font-size: .875rem;
          padding: .75rem 1rem;
          border: 1px solid #E2E2E0;
          border-radius: .5rem;
          background: #fff;
          color: #0D0D0D;
          transition: border-color .2s, box-shadow .2s;
        }
        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
          outline: none;
          border-color: #B8E0BA;
          box-shadow: 0 0 0 3px rgba(184,224,186,.1);
        }
        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          display: inline-flex; align-items: center; gap: .5rem;
          background: #0D0D0D; color: #fff;
          font-family: 'DM Sans', sans-serif; font-size: .875rem; font-weight: 600;
          padding: .8rem 1.6rem; border-radius: .5rem; border: none;
          cursor: pointer; letter-spacing: .01em;
          transition: background .2s, transform .15s;
          width: 100%;
          justify-content: center;
        }
        .submit-btn:hover:not(:disabled) {
          background: #2a2a2a;
          transform: translateY(-1px);
        }
        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .success-message {
          display: flex; align-items: center; gap: .75rem;
          background: rgba(184,224,186,.15);
          border: 1px solid #B8E0BA;
          color: #0D0D0D;
          padding: 1rem 1.25rem;
          border-radius: .5rem;
          font-size: .875rem;
          animation: slideIn 0.4s cubic-bezier(.22,1,.36,1);
          font-family: 'DM Sans', sans-serif;
        }
        .success-icon {
          animation: checkmark 0.6s cubic-bezier(.22,1,.36,1);
        }
      `}</style>
            <Navbar />


      {/* HEADER */}
      <section style={{
        background: "#F7F7F5",
        padding: "5rem 1.5rem 3rem",
        borderBottom: "1px solid #E2E2E0",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", flexDirection: "column", gap: "2rem",
        }}>
          {/* Eyebrow */}
          <div className={`fade-up delay-1${mounted ? " ready" : ""}`}
               style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", width: "fit-content" }}>
            <span style={{
              display: "inline-block", width: 8, height: 8, borderRadius: "50%",
              background: "#B8E0BA",
            }} />
            <span style={{ fontSize: ".75rem", fontFamily: "'DM Mono', monospace", color: "#6B6B6B", letterSpacing: ".1em", textTransform: "uppercase" }}>
              Get in Touch
            </span>
          </div>

          {/* Headline */}
          <h1 className={`fade-up delay-2${mounted ? " ready" : ""}`} style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-.02em",
            color: "#0D0D0D",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Contact Us
          </h1>

          {/* Description */}
          <p className={`fade-up delay-3${mounted ? " ready" : ""}`} style={{
            fontSize: ".975rem", lineHeight: 1.7, color: "#6B6B6B", maxWidth: 600,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Have a question or ready to discuss your network infrastructure needs? We're here to help. Reach out to our team and let's start a conversation.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{
        background: "#F7F7F5",
        padding: "4rem 1.5rem",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
        className="contact-grid"
        >
          <style>{`@media(max-width:900px){.contact-grid{grid-template-columns:1fr!important}}`}</style>

          {/* Left: Contact Info */}
          <div className={`fade-up delay-4${mounted ? " ready" : ""}`}>
            <h2 style={{
              fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem",
              color: "#0D0D0D", fontFamily: "'DM Sans', sans-serif",
            }}>
              Contact Information
            </h2>

            <div style={{
              display: "flex", flexDirection: "column", gap: "1.5rem",
            }}>
              {CONTACT_INFO.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <a
                    key={idx}
                    href={info.href}
                    style={{
                      display: "flex", gap: "1rem",
                      textDecoration: "none",
                      transition: "transform .2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "translateX(4px)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "translateX(0)")}
                  >
                    <div style={{
                      width: 48, height: 48,
                      borderRadius: ".5rem",
                      background: "rgba(184,224,186,.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon size={20} color="#B8E0BA" />
                    </div>
                    <div>
                      <div style={{
                        fontSize: ".875rem", fontWeight: 600, color: "#6B6B6B",
                        letterSpacing: ".05em", textTransform: "uppercase",
                        fontFamily: "'DM Mono', monospace",
                      }}>
                        {info.label}
                      </div>
                      <div style={{
                        fontSize: "1rem", fontWeight: 500, color: "#0D0D0D",
                        marginTop: ".25rem", fontFamily: "'DM Sans', sans-serif",
                      }}>
                        {info.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Additional info box */}
            <div style={{
              marginTop: "3rem",
              padding: "2rem",
              background: "#fff",
              border: "1px solid #E2E2E0",
              borderRadius: ".75rem",
            }}>
              <h3 style={{
                fontSize: ".875rem", fontWeight: 700, color: "#6B6B6B",
                letterSpacing: ".05em", textTransform: "uppercase",
                marginBottom: "1rem", fontFamily: "'DM Mono', monospace",
              }}>
                Response Time
              </h3>
              <p style={{
                fontSize: ".9rem", lineHeight: 1.6, color: "#0D0D0D",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                We typically respond to inquiries within <strong>24 business hours</strong>. For urgent matters, please call our office directly.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className={`fade-up delay-5${mounted ? " ready" : ""}`}>
            <h2 style={{
              fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem",
              color: "#0D0D0D", fontFamily: "'DM Sans', sans-serif",
            }}>
              Send us a Message
            </h2>

            {submitted && (
              <div className="success-message" style={{ marginBottom: "1.5rem" }}>
                <CheckCircle size={20} className="success-icon" />
                <span>Thank you! We'll be in touch shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{
              display: "flex", flexDirection: "column", gap: "1.5rem",
            }}>
              {/* Name */}
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="form-input"
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  className="form-input"
                />
              </div>

              {/* Company */}
              <div className="form-group">
                <label className="form-label">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="form-input"
                />
              </div>

              {/* Service Interest */}
              <div className="form-group">
                <label className="form-label">Service of Interest</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">Select a service...</option>
                  <option value="fiber">Fiber Optic Infrastructure</option>
                  <option value="voip">VoIP & PBX Systems</option>
                  <option value="cabling">Structured Cabling</option>
                  <option value="wireless">Wireless Networks</option>
                  <option value="cctv">CCTV & Security</option>
                  <option value="access">Access Control</option>
                  <option value="microwave">Microwave Radio</option>
                  <option value="it">IT Solutions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  required
                  className="form-textarea"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || submitted}
                className="submit-btn"
              >
                {loading ? (
                  <>
                    <span style={{
                      display: "inline-block",
                      width: "16px", height: "16px",
                      border: "2px solid rgba(255,255,255,.3)",
                      borderTop: "2px solid #fff",
                      borderRadius: "50%",
                      animation: "spin 0.8s linear infinite",
                    }} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>

            {/* Privacy note */}
            <p style={{
              fontSize: ".75rem", color: "#6B6B6B", marginTop: "1.5rem",
              lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif",
            }}>
              We respect your privacy. Your information will only be used to respond to your inquiry and will never be shared with third parties.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{
        background: "#fff",
        padding: "4rem 1.5rem",
        borderTop: "1px solid #E2E2E0",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
        }}>
          <h2 style={{
            fontSize: "1.8rem", fontWeight: 700, marginBottom: "3rem",
            color: "#0D0D0D", textAlign: "center", fontFamily: "'DM Sans', sans-serif",
          }}>
            Frequently Asked Questions
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}>
            {[
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on scope and complexity. We provide detailed estimates during the consultation phase.",
              },
              {
                q: "Do you offer maintenance and support?",
                a: "Yes, we provide comprehensive maintenance packages and 24/7 technical support for all deployed solutions.",
              },
              {
                q: "Can you work with existing infrastructure?",
                a: "Absolutely. We specialize in integrating with and upgrading existing network infrastructure.",
              },
              {
                q: "What certifications do your technicians have?",
                a: "Our team holds industry-standard certifications including CompTIA, Cisco, and manufacturer-specific qualifications.",
              },
              {
                q: "Do you provide training?",
                a: "Yes, we include comprehensive training for your team as part of our project delivery.",
              },
              {
                q: "What is your warranty policy?",
                a: "We provide standard manufacturer warranties plus extended support options tailored to your needs.",
              },
            ].map((faq, idx) => (
              <div key={idx} className={`fade-up delay-${(idx % 3) + 1}${mounted ? " ready" : ""}`}
                   style={{ animationDelay: `${0.1 + idx * 0.1}s` }}>
                <div style={{
                  padding: "1.5rem",
                  background: "#F7F7F5",
                  border: "1px solid #E2E2E0",
                  borderRadius: ".75rem",
                }}>
                  <h3 style={{
                    fontSize: ".95rem", fontWeight: 700, color: "#0D0D0D",
                    marginBottom: ".75rem", fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {faq.q}
                  </h3>
                  <p style={{
                    fontSize: ".875rem", lineHeight: 1.6, color: "#6B6B6B",
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}