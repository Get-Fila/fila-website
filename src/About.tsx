import { useState } from "react";
import { IconHeartHandshake, IconShieldCheck, IconUsersGroup } from "@tabler/icons-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ContactModal } from "./shared";
import { GlobalStyles } from "./GlobalStyles";
import rachelPhoto from "./rachel-bertler.png";
import sylvanaPhoto from "./sylvana-santos.png";

const team = [
  {
    photo: rachelPhoto,
    name: "Rachel Bertler",
    title: "Founder & CEO",
    story: [
      "At 19, Rachel was diagnosed with PCOS. Surgery to remove cysts didn't fix the pain, but when she told her provider, the provider suggested she was drug-seeking.",
      "7 years later, another surgery revealed endometriosis, which had been there the whole time, but her provider dismissed her.",
      "That wasn't the only time the system let her down. For over a decade, she was chasing answers for chronic fatigue and inflammation while every provider told her she was the picture of health, but she knew something was missed, so she built the first version of Fila for herself. It surfaced patterns that led to her obstructive sleep apnea diagnosis.",
    ],
  },
  {
    photo: sylvanaPhoto,
    name: "Sylvana Santos",
    title: "Founder & CTO",
    story: [
      "Sylvana has spent most of her career building technology in education, making complicated things easier to understand and navigate.",
      "But healthcare is one place where being informed can feel almost impossible. She watched both of her parents spend years trying to get answers about their health. They put in the time, asked questions, saw different providers, and tried to understand what was happening. And yet, they were often left with more questions, anxiety, and uncertainty.",
      "People shouldn't need to become healthcare experts to advocate for themselves. They need tools that can help them understand their own health and walk into the room feeling informed, prepared, and capable.",
      "That's why Sylvana joined Rachel to build Fila.",
    ],
  },
];

const values = [
  {
    icon: IconHeartHandshake,
    title: "Built for patients by patients",
    desc: "Fila started from a simple frustration: healthcare moves fast, and patients are left to keep up on their own. We're building the companion we wished we had.",
  },
  {
    icon: IconShieldCheck,
    title: "Privacy first",
    desc: "Your health data is yours. Fila is built with HIPAA-grade privacy and security practices from the ground up, not bolted on afterward.",
  },
  {
    icon: IconUsersGroup,
    title: "A team that's been there",
    desc: "We've navigated fragmented records, rushed appointments, and unanswered questions ourselves. That's the problem we're here to solve.",
  },
];

export function About() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <GlobalStyles />
      <style>{`
        .fila-values-grid { grid-template-columns: 1fr; }
        @media (min-width: 720px) { .fila-values-grid { grid-template-columns: repeat(3, 1fr); } }
        .fila-team-row { flex-direction: column; }
        @media (min-width: 640px) {
          .fila-team-row { flex-direction: row; }
          .fila-team-bio { margin-top: 45px; }
        }
      `}</style>
      <div
        className="fila-landing"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "#102a45",
          background: "#d6e6f5",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header onContactClick={() => setContactOpen(true)} />

        <section
          style={{
            padding: "clamp(56px,8vw,96px) clamp(20px,5vw,56px) clamp(40px,6vw,64px)",
          }}
        >
          <div style={{ maxWidth: 1040, margin: "0 auto" }}>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.2rem,5vw,3.4rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#102a45",
                margin: "0 0 20px",
                animation: "filaUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
              }}
            >
              We know firsthand how complicated healthcare can be, so we
              built Fila to change that.
            </h1>
            <p
              style={{
                fontWeight: 300,
                fontSize: "clamp(1.05rem,1.6vw,1.25rem)",
                lineHeight: 1.6,
                color: "#244a73",
                maxWidth: 760,
                margin: "0 0 20px",
                animation: "filaUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.08s both",
              }}
            >
              Patients should be at the center of healthcare, but they rarely
              are. Instead, they're expected to repeat their own histories,
              chase down records, and coordinate care across a system that
              was never built for them. Over time, that exhaustion leads
              patients to disengage from their own health, leading to
              outcomes that preventive care could have avoided.
            </p>
            <p
              style={{
                fontWeight: 300,
                fontSize: "clamp(1.05rem,1.6vw,1.25rem)",
                lineHeight: 1.6,
                color: "#244a73",
                maxWidth: 760,
                margin: 0,
                animation: "filaUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.12s both",
              }}
            >
              Fila puts patients back at the center, giving them the tools to
              own their health history and take control of their care.
            </p>
          </div>
        </section>

        <section
          style={{
            background: "#102a45",
            padding: "clamp(56px,7vw,88px) clamp(20px,5vw,56px)",
          }}
        >
          <div
            className="fila-values-grid"
            style={{
              maxWidth: 1040,
              margin: "0 auto",
              display: "grid",
              gap: 24,
            }}
          >
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="fila-card"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(173,204,230,0.5)",
                  borderRadius: 16,
                  padding: "28px 26px",
                  transition: "transform 0.25s, box-shadow 0.25s",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "rgba(69,122,171,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  <Icon size={24} color="#457aab" stroke={1.7} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: 18,
                    color: "#102a45",
                    margin: "0 0 8px",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    color: "#244a73",
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            padding: "clamp(64px,8vw,100px) clamp(20px,5vw,56px)",
          }}
        >
          <div style={{ maxWidth: 1040, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
                lineHeight: 1.12,
                letterSpacing: "-0.015em",
                color: "#102a45",
                margin: "0 0 12px",
              }}
            >
              Meet the team
            </h2>
            <p
              style={{
                fontWeight: 300,
                fontSize: 16,
                lineHeight: 1.6,
                color: "#244a73",
                margin: "0 0 48px",
              }}
            >
              The people building Fila are the same people who once needed it.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
              {team.map(({ photo, name, title, story }) => (
                <div
                  key={name}
                  className="fila-team-row"
                  style={{ display: "flex", gap: 36, alignItems: "flex-start" }}
                >
                  <div style={{ flex: "none", width: 260, maxWidth: "100%" }}>
                    <img
                      src={photo}
                      alt={name}
                      style={{
                        display: "block",
                        width: "100%",
                        aspectRatio: "1 / 1",
                        objectFit: "cover",
                        marginBottom: 14,
                      }}
                    />
                    <div
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        fontSize: 19,
                        color: "#102a45",
                      }}
                    >
                      {name}
                    </div>
                    <div
                      style={{
                        fontWeight: 400,
                        fontSize: 14,
                        color: "#457aab",
                      }}
                    >
                      {title}
                    </div>
                  </div>
                  <div className="fila-team-bio" style={{ flex: 1, minWidth: 0 }}>
                    {story.map((p, i) => (
                      <p
                        key={i}
                        style={{
                          fontWeight: 300,
                          fontSize: 15,
                          lineHeight: 1.65,
                          color: "#244a73",
                          margin: i === story.length - 1 ? 0 : "0 0 14px",
                        }}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />

        <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </>
  );
}
