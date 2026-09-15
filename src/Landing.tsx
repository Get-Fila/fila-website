import { useState, useRef, useEffect } from "react";
import {
  IconShieldCheck,
  IconUser,
  IconStethoscope,
  IconSparkles,
  IconHistory,
  IconHeartHandshake,
  IconActivityHeartbeat,
  IconSearch,
  IconHeart,
  IconUsersGroup,
} from "@tabler/icons-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WaitlistSection } from "./WaitlistSection";
import { FAQ } from "./FAQ";
import { ContactModal } from "./shared";

function useCountUp(end: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * end));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, end, duration]);

  return { value, ref };
}

export function Landing() {
  const [contactOpen, setContactOpen] = useState(false);

  const stat1 = useCountUp(23);
  const stat2 = useCountUp(100);
  const stat3 = useCountUp(65);

  return (
    <>
      <style>{`
        @keyframes filaUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .fila-landing ::selection { background: #adcce6; color: #102a45; }
        .fila-landing input::placeholder, .fila-landing textarea::placeholder { color: #80add1; }
        .fila-landing .fila-input:focus { border-color: #457aab; box-shadow: 0 0 0 3px rgba(69,122,171,0.15); }
        .fila-landing .fila-input-dark:focus { border-color: #adcce6; box-shadow: 0 0 0 3px rgba(173,204,230,0.2); }
        .fila-landing .fila-btn:hover { transform: translateY(-1px); box-shadow: 0 9px 24px rgba(36,74,115,0.36); }
        .fila-landing .fila-btn-light:hover { transform: translateY(-1px); background: #c2d9ee; }
        .fila-landing .fila-card:hover { transform: translateY(-6px); box-shadow: 0 16px 36px rgba(16,42,69,0.13); }
        .fila-landing .fila-contact-link:hover { color: #adcce6 !important; }
        @media (max-width: 640px) {
          .fila-landing .fila-hero-badges { flex-direction: column; gap: 10px !important; }
          .fila-landing .fila-stats-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .fila-landing .fila-features-grid { grid-template-columns: 1fr !important; }
          .fila-landing .fila-personas-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .fila-landing .fila-form { flex-direction: column; }
          .fila-landing .fila-form input { flex: 1 1 auto !important; }
          .fila-landing .fila-form button { width: 100%; }
        }
      `}</style>
      <div
        className="fila-landing"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "#102a45",
          background: "#d6e6f5",
        }}
      >
        <Header onContactClick={() => setContactOpen(true)} />

        {/* HERO */}
        <section
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding:
              "clamp(48px,6vw,72px) clamp(20px,5vw,56px) clamp(40px,5vw,56px)",
            overflow: "hidden",
          }}
        >
          <div style={{ maxWidth: 1180, margin: "0 auto", width: "100%" }}>
          <div style={{ position: "relative", zIndex: 2, maxWidth: 1180 }}>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.7rem, 6.4vw, 5.1rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
                margin: "0 0 26px",
                color: "#102a45",
                animation: "filaUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.08s both",
              }}
            >
              Healthcare isn&rsquo;t built for you,{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #244a73, #adcce6)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                but Fila is.
              </span>
            </h1>
            <p
              style={{
                fontWeight: 300,
                fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)",
                lineHeight: 1.6,
                color: "#244a73",
                maxWidth: 900,
                margin: "0 0 22px",
                animation: "filaUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.16s both",
              }}
            >
              Fila is an AI companion that helps you navigate a broken system
              by coaching you to advocate for yourself at every visit.
            </p>

            <div
              className="fila-hero-badges"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginTop: 22,
                animation: "filaUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.38s both",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <IconShieldCheck size={22} color="#457aab" stroke={1.6} />
                <span
                  style={{ fontWeight: 400, fontSize: 14, color: "#244a73" }}
                >
                  Built with HIPAA-grade privacy and security practices
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <IconUser size={22} color="#457aab" stroke={1.6} />
                <span
                  style={{ fontWeight: 400, fontSize: 14, color: "#244a73" }}
                >
                  Built for patients by patients
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <IconStethoscope size={22} color="#457aab" stroke={1.6} />
                <span
                  style={{ fontWeight: 400, fontSize: 14, color: "#244a73" }}
                >
                  Every record and provider in one place
                </span>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section
          style={{
            background: "#102a45",
            padding: "clamp(56px,7vw,88px) clamp(20px,5vw,56px)",
          }}
        >
          <div
            className="fila-stats-grid"
            style={{
              maxWidth: 1040,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "clamp(40px,6vw,72px)",
            }}
          >
            <div ref={stat1.ref} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(3.2rem,5.5vw,4.6rem)",
                  lineHeight: 1,
                  color: "#adcce6",
                  letterSpacing: "-0.02em",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {stat1.value}s
              </div>
              <div
                style={{
                  width: 36,
                  height: 3,
                  background: "#457aab",
                  borderRadius: 2,
                  margin: "20px auto",
                }}
              />
              <div
                style={{
                  fontWeight: 300,
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: "#80add1",
                  maxWidth: 240,
                  margin: "0 auto",
                }}
              >
                is the amount of time patients have to explain their
                concerns with a provider
                <sup style={{ fontSize: "0.75em", opacity: 0.7 }}> 1</sup>
              </div>
            </div>
            <div ref={stat2.ref} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(3.2rem,5.5vw,4.6rem)",
                  lineHeight: 1,
                  color: "#adcce6",
                  letterSpacing: "-0.02em",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {stat2.value.toLocaleString()}k
              </div>
              <div
                style={{
                  width: 36,
                  height: 3,
                  background: "#457aab",
                  borderRadius: 2,
                  margin: "20px auto",
                }}
              />
              <div
                style={{
                  fontWeight: 300,
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: "#80add1",
                  maxWidth: 240,
                  margin: "0 auto",
                }}
              >
                deaths per year could be prevented if patients become more
                involved in their health
                <sup style={{ fontSize: "0.75em", opacity: 0.7 }}> 2</sup>
              </div>
            </div>
            <div ref={stat3.ref} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(3.2rem,5.5vw,4.6rem)",
                  lineHeight: 1,
                  color: "#adcce6",
                  letterSpacing: "-0.02em",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {stat3.value}%
              </div>
              <div
                style={{
                  width: 36,
                  height: 3,
                  background: "#457aab",
                  borderRadius: 2,
                  margin: "20px auto",
                }}
              />
              <div
                style={{
                  fontWeight: 300,
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: "#80add1",
                  maxWidth: 240,
                  margin: "0 auto",
                }}
              >
                of diagnostic errors linked to fragmented patient data
                <sup style={{ fontSize: "0.75em", opacity: 0.7 }}> 3</sup>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          style={{
            background: "#d6e6f5",
            padding: "clamp(72px,9vw,120px) clamp(20px,5vw,56px)",
          }}
        >
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.9rem,3.6vw,2.9rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                color: "#102a45",
                margin: "0 0 54px",
                maxWidth: 640,
              }}
            >
              A patient advocate in your back pocket.
            </h2>
            <div
              className="fila-features-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                gap: 22,
              }}
            >
              {[
                {
                  icon: <IconHistory size={34} color="#adcce6" stroke={1.5} />,
                  title: "Consolidated History",
                  desc: "Pull records from any provider and log symptoms, medications, visits, and test results to build a comprehensive living timeline.",
                },
                {
                  icon: <IconSparkles size={34} color="#adcce6" stroke={1.5} />,
                  title: "Health Intelligence",
                  desc: "AI-powered insights that surface patterns across the longitudinal record.",
                },
                {
                  icon: (
                    <IconHeartHandshake
                      size={34}
                      color="#adcce6"
                      stroke={1.5}
                    />
                  ),
                  title: "Care Navigation",
                  desc: "Guides patients through the complexity of the healthcare system by coaching them to make informed decisions about their health.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  style={{
                    background: "#102a45",
                    borderRadius: 16,
                    padding: "30px 26px 32px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {c.icon}
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      fontSize: 19,
                      color: "#fff",
                      margin: "22px 0 10px",
                    }}
                  >
                    {c.title}
                  </div>
                  <p
                    style={{
                      fontWeight: 300,
                      fontSize: 14.5,
                      lineHeight: 1.6,
                      color: "#80add1",
                      margin: 0,
                    }}
                  >
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section
          style={{
            background:
              "linear-gradient(160deg, rgba(36,74,115,0.07) 0%, rgba(173,204,230,0.18) 100%)",
            padding: "clamp(72px,9vw,120px) clamp(20px,5vw,56px)",
          }}
        >
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.9rem,3.6vw,2.9rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                color: "#102a45",
                margin: "0 0 54px",
                maxWidth: 680,
              }}
            >
              Built for the patients most failed by today's system.
            </h2>
            <div
              className="fila-personas-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                gap: 18,
              }}
            >
              {[
                {
                  icon: (
                    <IconActivityHeartbeat
                      size={24}
                      color="#457aab"
                      stroke={1.7}
                    />
                  ),
                  title: "The Chronic Care Patient",
                  desc: "Juggling a dozen specialists and a tangle of medications across systems that never sync.",
                },
                {
                  icon: <IconSearch size={24} color="#457aab" stroke={1.7} />,
                  title: "The Diagnostic Odyssey Patient",
                  desc: "Still searching for an answer after years of tests and visits because no single provider sees the full picture.",
                },
                {
                  icon: <IconHeart size={24} color="#457aab" stroke={1.7} />,
                  title: "The Health-Conscious Patient",
                  desc: "Tracking wearables, labs, and concierge care, and wanting it all in one clear view.",
                },
                {
                  icon: (
                    <IconUsersGroup size={24} color="#457aab" stroke={1.7} />
                  ),
                  title: "The Family Health Manager",
                  desc: "Carrying medical histories and coordinating care for loved ones, holding every detail in their head.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="fila-card"
                  style={{
                    background: "#fff",
                    borderRadius: 16,
                    padding: "28px 24px",
                    boxShadow: "0 2px 14px rgba(16,42,69,0.05)",
                    border: "1px solid rgba(128,173,209,0.3)",
                    transition: "transform 0.25s, box-shadow 0.25s",
                    cursor: "default",
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 12,
                      background: "rgba(69,122,171,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 18,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      fontSize: 19,
                      color: "#102a45",
                      marginBottom: 10,
                    }}
                  >
                    {c.title}
                  </div>
                  <p
                    style={{
                      fontWeight: 300,
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: "#244a73",
                      margin: 0,
                    }}
                  >
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WaitlistSection />

        <FAQ />

        <Footer>
          <ol
            style={{
              margin: 0,
              padding: "0 0 0 18px",
              listStyleType: "decimal",
              fontWeight: 300,
              fontSize: 12.5,
              lineHeight: 1.7,
              color: "#5a8ab0",
            }}
          >
            <li>
              <em>Time to Talk</em>. PMC, NIH.{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1783704/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#5a8ab0" }}
              >
                pmc.ncbi.nlm.nih.gov/articles/PMC1783704
              </a>
            </li>
            <li>
              Deaths preventable in the U.S. by improvements in use of
              clinical preventive services. <em>PubMed</em>.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/20494236/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#5a8ab0" }}
              >
                pubmed.ncbi.nlm.nih.gov/20494236
              </a>
            </li>
            <li>
              Graber, M. L., Franklin, N., &amp; Gordon, R. (2005).
              Diagnostic error in internal medicine.{" "}
              <em>Archives of Internal Medicine</em>, 165(13), 1493–1499.
            </li>
          </ol>
        </Footer>

        <ContactModal
          open={contactOpen}
          onClose={() => setContactOpen(false)}
        />
      </div>
    </>
  );
}
