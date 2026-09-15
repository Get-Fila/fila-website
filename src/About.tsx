import { useState } from "react";
import { IconHeartHandshake, IconShieldCheck, IconUsersGroup } from "@tabler/icons-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ContactModal } from "./shared";

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
      <style>{`
        @keyframes filaUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        .fila-landing ::selection { background: #adcce6; color: #102a45; }
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
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
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
              Healthcare is complicated.
              <br />
              Fila is here to help you navigate it.
            </h1>
            <p
              style={{
                fontWeight: 300,
                fontSize: "clamp(1.05rem,1.6vw,1.25rem)",
                lineHeight: 1.6,
                color: "#244a73",
                margin: 0,
                animation: "filaUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.08s both",
              }}
            >
              We're building an AI companion that consolidates your medical
              history, surfaces the insights that matter, and coaches you to
              advocate for yourself at every visit — because no one should
              have to navigate a broken system alone.
            </p>
          </div>
        </section>

        <section
          style={{
            padding: "0 clamp(20px,5vw,56px) clamp(64px,8vw,100px)",
          }}
        >
          <div
            style={{
              maxWidth: 1040,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
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

        <Footer />

        <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </>
  );
}
