"use client";

import { Mail, Phone, ArrowRight } from "lucide-react";

const NAV_LINKS = ["Services", "Solutions", "Projects", "About Us", "Contact"];

function navHref(label: string): string {
  const routes: Record<string, string> = {
    "Services": "/services",
    "Solutions": "/solutions",
    "Projects": "/projects",
    "About Us": "/about",
    "Contact": "/contact",
  };
  return routes[label] || "/";
}

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;0,9..40,900;1,9..40,300&family=DM+Mono:wght@400;500&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --bg:      #F7F7F5;
          --ink:     #0D0D0D;
          --sage:    #B8E0BA;
          --panel:   #111111;
          --muted:   #6B6B6B;
          --border:  #E2E2E0;
          --font-sans: 'DM Sans', sans-serif;
          --font-mono: 'DM Mono', monospace;
        }

        .footer-link {
          display: block;
          font-size: .8rem;
          color: rgba(255,255,255,.6);
          margin-bottom: .5rem;
          text-decoration: none;
          transition: color .15s;
          font-family: var(--font-sans);
        }
        .footer-link:hover {
          color: #fff;
        }

        .footer-cta {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          background: var(--sage);
          color: var(--ink);
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: .8rem;
          padding: .65rem 1.3rem;
          border-radius: .45rem;
          text-decoration: none;
          transition: opacity .15s;
        }
        .footer-cta:hover {
          opacity: .85;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: .5rem;
          font-size: .75rem;
          color: rgba(255,255,255,.6);
          margin-bottom: .6rem;
          font-family: var(--font-sans);
        }
        .contact-item svg {
          color: var(--sage);
          flex-shrink: 0;
        }
      `}</style>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "#0D0D0D",
        color: "#fff",
        padding: "4rem 1.5rem 2rem",
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}>
          {/* Main footer content */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}>
            {/* Brand */}
            <div>
              <div style={{
                fontWeight: 900,
                fontSize: "1.05rem",
                letterSpacing: ".06em",
                marginBottom: "1rem",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                N.O.B.S Technologies
              </div>
              <div style={{
                fontSize: ".7rem",
                color: "rgba(255,255,255,.5)",
                fontFamily: "'DM Mono', monospace",
                marginBottom: "1.2rem",
              }}>
                Network Operations & Broadband Solutions
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: ".6rem",
              }}>
                <a href="mailto:info@nobstech.co.za" style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".5rem",
                  fontSize: ".75rem",
                  color: "rgba(255,255,255,.6)",
                  textDecoration: "none",
                  transition: "color .15s",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,1)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.6)")}
                >
                  <Mail size={12} color="#B8E0BA" />
                  info@nobstech.co.za
                </a>
                <a href="tel:+27011XXXXXX" style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".5rem",
                  fontSize: ".75rem",
                  color: "rgba(255,255,255,.6)",
                  textDecoration: "none",
                  transition: "color .15s",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,1)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.6)")}
                >
                  <Phone size={12} color="#B8E0BA" />
                  +27 (0) 11 XXX XXXX
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div style={{
                fontWeight: 700,
                fontSize: ".8rem",
                letterSpacing: ".06em",
                textTransform: "uppercase",
                marginBottom: "1rem",
                fontFamily: "'DM Mono', monospace",
              }}>
                Quick Links
              </div>
              {NAV_LINKS.map(l => (
                <a
                  key={l}
                  href={navHref(l)}
                  className="footer-link"
                >
                  {l}
                </a>
              ))}
            </div>

            {/* Services */}
            <div>
              <div style={{
                fontWeight: 700,
                fontSize: ".8rem",
                letterSpacing: ".06em",
                textTransform: "uppercase",
                marginBottom: "1rem",
                fontFamily: "'DM Mono', monospace",
              }}>
                Services
              </div>
              {[
                "Fiber Optic",
                "VoIP & PBX",
                "Structured Cabling",
                "Wireless",
                "CCTV",
                "Access Control",
              ].map(service => (
                <a
                  key={service}
                  href="/services"
                  className="footer-link"
                >
                  {service}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div>
              <div style={{
                fontWeight: 700,
                fontSize: ".8rem",
                letterSpacing: ".06em",
                textTransform: "uppercase",
                marginBottom: "1rem",
                fontFamily: "'DM Mono', monospace",
              }}>
                Get Started
              </div>
              <p style={{
                fontSize: ".8rem",
                color: "rgba(255,255,255,.6)",
                lineHeight: 1.6,
                marginBottom: "1.25rem",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                Ready to transform your network infrastructure?
              </p>
              <a href="/contact" className="footer-cta">
                Request a Quote <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* Footer bottom */}
          <div style={{
            borderTop: "1px solid rgba(255,255,255,.1)",
            paddingTop: "1.5rem",
            marginTop: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: ".75rem",
          }}>
            <span style={{
              fontSize: ".7rem",
              color: "rgba(255,255,255,.35)",
              fontFamily: "'DM Mono', monospace",
            }}>
              © 2026 N.O.B.S Technologies. All rights reserved.
            </span>
            <span style={{
              fontSize: ".7rem",
              color: "rgba(255,255,255,.25)",
              fontFamily: "'DM Mono', monospace",
            }}>
              Real Networks · Real Solutions
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}