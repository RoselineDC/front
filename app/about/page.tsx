"use client";

import { useState, useEffect } from "react";
import { Award, Users, Zap, TrendingUp, Menu, X } from "lucide-react";
import Navbar from "@/components/Navbar";

/**
 * DESIGN TOKENS (matching your home page):
 * Primary:   #0D0D0D  (near-black)
 * Accent:    #B8E0BA  (sage green)
 * Surface:   #F7F7F5  (warm off-white)
 * Fonts:     DM Sans (body), DM Mono (accents)
 */

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

const TEAM_STATS = [
  { icon: Users, label: "Team Members", value: "45+" },
  { icon: Award, label: "Industry Certifications", value: "120+" },
  { icon: Zap, label: "Projects Completed", value: "200+" },
  { icon: TrendingUp, label: "Years in Business", value: "15+" },
];

const CORE_VALUES = [
  {
    title: "Excellence",
    description: "We deliver exceptional quality in every project, maintaining the highest standards of technical expertise and professionalism.",
  },
  {
    title: "Innovation",
    description: "We stay ahead of technology trends, continuously adopting new solutions to provide cutting-edge network infrastructure.",
  },
  {
    title: "Reliability",
    description: "Our clients depend on us for mission-critical infrastructure. We ensure 99.99% uptime and dedicated support.",
  },
  {
    title: "Partnership",
    description: "We view our clients as partners, investing time to understand their unique needs and delivering customized solutions.",
  },
];

const TEAM_MEMBERS = [
  {
    name: "John Mthembu",
    role: "Chief Technology Officer",
    expertise: "Network Architecture & Design",
  },
  {
    name: "Sarah Chen",
    role: "Operations Director",
    expertise: "Project Management & Delivery",
  },
  {
    name: "Thabo Nkosi",
    role: "Senior Network Engineer",
    expertise: "Fiber Optics & Infrastructure",
  },
  {
    name: "Emma Rodriguez",
    role: "Solutions Architect",
    expertise: "Enterprise Solutions & Integration",
  },
];

export default function About() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* ── NAVBAR ── */}
              <Navbar />
     

      {/* Mobile menu */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "#F7F7F5",
        display: "flex", flexDirection: "column",
        padding: "5rem 2rem 2rem",
        gap: "2rem",
        transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform .3s cubic-bezier(.22,1,.36,1)",
      }}>
        <button onClick={() => setMenuOpen(false)} style={{ position:"absolute",top:"1.25rem",right:"1.5rem",background:"none",border:"none",cursor:"pointer" }}>
          <X size={24} />
        </button>
        {NAV_LINKS.map(l => (
          <a key={l} href={navHref(l)} style={{
            fontSize: "1.5rem", fontWeight: 700, color: "#0D0D0D",
            textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
          }}
             onClick={() => setMenuOpen(false)}>{l}</a>
        ))}
        <a href="/contact" style={{
          display: "inline-flex", alignItems: "center", gap: ".5rem",
          background: "#0D0D0D", color: "#fff",
          fontFamily: "'DM Sans', sans-serif", fontSize: ".875rem", fontWeight: 600,
          padding: ".8rem 1.6rem", borderRadius: ".5rem", border: "none",
          cursor: "pointer", letterSpacing: ".01em",
          textDecoration: "none", alignSelf: "flex-start",
        }}>Get a Quote</a>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform: translateY(24px); }
          to   { opacity:1; transform: translateY(0);    }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .fade-up { opacity:0; }
        .fade-up.ready { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) forwards; }
        .delay-1 { animation-delay: .1s; }
        .delay-2 { animation-delay: .22s; }
        .delay-3 { animation-delay: .34s; }
        .delay-4 { animation-delay: .46s; }
        .delay-5 { animation-delay: .58s; }
        .delay-6 { animation-delay: .7s; }

        .stat-card {
          border: 1px solid #E2E2E0;
          border-radius: .75rem;
          padding: 2rem;
          background: #fff;
          text-align: center;
          transition: all .2s;
        }
        .stat-card:hover {
          border-color: #B8E0BA;
          box-shadow: 0 12px 40px rgba(0,0,0,.08);
          transform: translateY(-4px);
        }

        .value-card {
          border: 1px solid #E2E2E0;
          border-radius: .75rem;
          padding: 2rem;
          background: #fff;
          transition: all .2s;
        }
        .value-card:hover {
          border-color: #B8E0BA;
          box-shadow: 0 8px 28px rgba(0,0,0,.07);
          transform: translateY(-3px);
        }

        .team-card {
          border: 1px solid #E2E2E0;
          border-radius: .75rem;
          padding: 1.5rem;
          background: #fff;
          text-align: center;
          transition: all .2s;
        }
        .team-card:hover {
          border-color: #B8E0BA;
          box-shadow: 0 8px 28px rgba(0,0,0,.07);
          transform: translateY(-3px);
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 2rem;
          padding: 2rem 0;
          border-bottom: 1px solid #E2E2E0;
        }
        .timeline-item:last-child {
          border-bottom: none;
        }
        .timeline-year {
          font-size: 1.2rem;
          font-weight: 700;
          color: #B8E0BA;
          font-family: 'DM Mono', monospace;
        }
        .timeline-content h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0D0D0D;
          margin-bottom: .5rem;
          font-family: 'DM Sans', sans-serif;
        }
        .timeline-content p {
          font-size: .9rem;
          color: #6B6B6B;
          line-height: 1.6;
          font-family: 'DM Sans', sans-serif;
        }
      `}</style>

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
              Our Story
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
            About N.O.B.S Technologies
          </h1>

          {/* Description */}
          <p className={`fade-up delay-3${mounted ? " ready" : ""}`} style={{
            fontSize: ".975rem", lineHeight: 1.7, color: "#6B6B6B", maxWidth: 700,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            We are a leading provider of network infrastructure and broadband solutions, dedicated to connecting organizations with reliable, scalable, and innovative technology that drives their success.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section style={{
        background: "#fff",
        padding: "4rem 1.5rem",
        borderBottom: "1px solid #E2E2E0",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
        }}
        className="mission-grid"
        >
          <style>{`@media(max-width:900px){.mission-grid{grid-template-columns:1fr!important}}`}</style>

          {/* Mission */}
          <div className={`fade-up delay-1${mounted ? " ready" : ""}`}>
            <h2 style={{
              fontSize: "1.8rem", fontWeight: 900, marginBottom: "1rem",
              color: "#0D0D0D", fontFamily: "'DM Sans', sans-serif",
            }}>
              Our Mission
            </h2>
            <p style={{
              fontSize: ".95rem", lineHeight: 1.8, color: "#6B6B6B",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              To design, deploy, and maintain world-class network infrastructure that empowers organizations to communicate, collaborate, and compete effectively in an increasingly connected world. We are committed to delivering solutions that are not only technically superior but also tailored to the unique needs of each client.
            </p>
          </div>

          {/* Vision */}
          <div className={`fade-up delay-2${mounted ? " ready" : ""}`}>
            <h2 style={{
              fontSize: "1.8rem", fontWeight: 900, marginBottom: "1rem",
              color: "#0D0D0D", fontFamily: "'DM Sans', sans-serif",
            }}>
              Our Vision
            </h2>
            <p style={{
              fontSize: ".95rem", lineHeight: 1.8, color: "#6B6B6B",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              To be the most trusted and innovative network infrastructure partner in Southern Africa, recognized for our technical excellence, reliability, and commitment to customer success. We envision a future where every organization has access to the connectivity and infrastructure they need to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{
        background: "#F7F7F5",
        padding: "4rem 1.5rem",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}>
            {TEAM_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className={`stat-card fade-up${mounted ? " ready" : ""}`}
                  style={{ animationDelay: `${0.1 + idx * 0.12}s` }}
                >
                  <div style={{
                    display: "flex", justifyContent: "center", marginBottom: "1rem",
                  }}>
                    <Icon size={32} color="#B8E0BA" />
                  </div>
                  <div style={{
                    fontSize: "2.2rem", fontWeight: 900, color: "#B8E0BA",
                    marginBottom: ".5rem", fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: ".875rem", color: "#6B6B6B", fontWeight: 600,
                    letterSpacing: ".05em", textTransform: "uppercase",
                    fontFamily: "'DM Mono', monospace",
                  }}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section style={{
        background: "#fff",
        padding: "4rem 1.5rem",
        borderBottom: "1px solid #E2E2E0",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
        }}>
          <h2 style={{
            fontSize: "2rem", fontWeight: 900, marginBottom: "3rem",
            color: "#0D0D0D", textAlign: "center", fontFamily: "'DM Sans', sans-serif",
          }}>
            Core Values
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}>
            {CORE_VALUES.map((value, idx) => (
              <div
                key={idx}
                className={`value-card fade-up${mounted ? " ready" : ""}`}
                style={{ animationDelay: `${0.1 + idx * 0.12}s` }}
              >
                <h3 style={{
                  fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem",
                  color: "#0D0D0D", fontFamily: "'DM Sans', sans-serif",
                }}>
                  {value.title}
                </h3>
                <p style={{
                  fontSize: ".9rem", lineHeight: 1.6, color: "#6B6B6B",
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{
        background: "#F7F7F5",
        padding: "4rem 1.5rem",
        borderBottom: "1px solid #E2E2E0",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
        }}>
          <h2 style={{
            fontSize: "2rem", fontWeight: 900, marginBottom: "3rem",
            color: "#0D0D0D", fontFamily: "'DM Sans', sans-serif",
          }}>
            Our Journey
          </h2>

          <div className={`fade-up delay-1${mounted ? " ready" : ""}`}>
            {[
              {
                year: "2009",
                title: "Founded",
                description: "N.O.B.S Technologies established with a vision to revolutionize network infrastructure in Southern Africa.",
              },
              {
                year: "2012",
                title: "First Major Contract",
                description: "Secured enterprise-level contract with leading financial institution, establishing our reputation for excellence.",
              },
              {
                year: "2015",
                title: "Expansion",
                description: "Expanded team and capabilities, adding fiber optic and advanced security solutions to our portfolio.",
              },
              {
                year: "2018",
                title: "ISO Certification",
                description: "Achieved ISO 9001 certification, demonstrating our commitment to quality and continuous improvement.",
              },
              {
                year: "2021",
                title: "Digital Transformation",
                description: "Launched advanced monitoring and management platforms for real-time infrastructure visibility.",
              },
              {
                year: "2024",
                title: "Present Day",
                description: "Serving 200+ clients across various sectors with cutting-edge network infrastructure solutions.",
              },
            ].map((item, idx) => (
              <div key={idx} className="timeline-item" style={{
                animation: `fadeUp 0.7s cubic-bezier(.22,1,.36,1) forwards`,
                animationDelay: `${0.1 + idx * 0.1}s`,
                opacity: mounted ? 1 : 0,
              }}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{
        background: "#fff",
        padding: "4rem 1.5rem",
        borderBottom: "1px solid #E2E2E0",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
        }}>
          <h2 style={{
            fontSize: "2rem", fontWeight: 900, marginBottom: "1rem",
            color: "#0D0D0D", textAlign: "center", fontFamily: "'DM Sans', sans-serif",
          }}>
            Leadership Team
          </h2>
          <p style={{
            fontSize: ".95rem", lineHeight: 1.6, color: "#6B6B6B",
            textAlign: "center", marginBottom: "3rem", maxWidth: 600, margin: "0 auto 3rem",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Our experienced leadership team brings decades of combined expertise in network infrastructure and enterprise solutions.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}>
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className={`team-card fade-up${mounted ? " ready" : ""}`}
                style={{ animationDelay: `${0.1 + idx * 0.12}s` }}
              >
                <div style={{
                  width: 80, height: 80,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #B8E0BA, #0D0D0D)",
                  margin: "0 auto 1rem",
                }} />
                <h3 style={{
                  fontSize: "1.1rem", fontWeight: 700, marginBottom: ".25rem",
                  color: "#0D0D0D", fontFamily: "'DM Sans', sans-serif",
                }}>
                  {member.name}
                </h3>
                <p style={{
                  fontSize: ".8rem", color: "#B8E0BA", fontWeight: 600,
                  letterSpacing: ".05em", textTransform: "uppercase",
                  marginBottom: ".75rem", fontFamily: "'DM Mono', monospace",
                }}>
                  {member.role}
                </p>
                <p style={{
                  fontSize: ".85rem", color: "#6B6B6B", lineHeight: 1.5,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {member.expertise}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "#0D0D0D",
        padding: "5rem 1.5rem",
        color: "#fff",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          textAlign: "center",
          display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center",
        }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 900, lineHeight: 1.2,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Ready to Partner With Us?
          </h2>
          <p style={{
            fontSize: ".975rem", lineHeight: 1.7, color: "rgba(255,255,255,.7)",
            maxWidth: 600, fontFamily: "'DM Sans', sans-serif",
          }}>
            Let's discuss how N.O.B.S Technologies can help transform your network infrastructure and drive your organization's success.
          </p>
          <a href="/contact" style={{
            display: "inline-flex", alignItems: "center", gap: ".5rem",
            background: "#B8E0BA", color: "#0D0D0D",
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: ".875rem",
            padding: ".8rem 1.6rem", borderRadius: ".5rem",
            textDecoration: "none", transition: "opacity .2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = ".85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}