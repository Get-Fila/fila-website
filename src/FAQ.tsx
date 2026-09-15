import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

const faqs = [
  {
    q: "Does Fila replace my healthcare provider?",
    a: "No. Fila is designed to work alongside your providers and care team, not replace them. It helps you stay organized and prepared for appointments. Medical decisions still happen with your provider.",
  },
  {
    q: "Can I automatically connect my medical records?",
    a: "Right now, Fila supports manual record uploads. We're actively working on direct integrations with electronic health record (EHR) systems so your records can sync automatically in the future.",
  },
  {
    q: "Can I connect my wearable?",
    a: "Not yet, but wearable integration is on our roadmap. We want Fila to eventually bring together everything from lab results to daily activity data in one place.",
  },
  {
    q: "How is Fila different from using AI assistants?",
    a: "General AI assistants don't retain your health history between conversations. Fila builds and stores a comprehensive record of your health information so it's there whenever you need it. Your data stays secure and is never used to train the underlying AI model, unlike many other apps.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Fila is built with HIPAA-grade privacy and security practices, your data is encrypted, and everyone on the My Fila team is HIPAA-certified.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        background: "#d6e6f5",
        padding: "clamp(64px,8vw,100px) clamp(20px,5vw,56px)",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
            lineHeight: 1.12,
            letterSpacing: "-0.015em",
            color: "#102a45",
            textAlign: "left",
            margin: "0 0 40px",
          }}
        >
          Frequently asked questions
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map(({ q, a }, i) => {
            const open = openIndex === i;
            return (
              <div
                key={q}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(173,204,230,0.6)",
                  borderRadius: 14,
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "18px 22px",
                    textAlign: "left",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: 15.5,
                    color: "#102a45",
                  }}
                >
                  {q}
                  <IconChevronDown
                    size={19}
                    stroke={2}
                    color="#457aab"
                    style={{
                      flex: "none",
                      transition: "transform 0.2s",
                      transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                {open && (
                  <p
                    style={{
                      margin: 0,
                      padding: "0 22px 20px",
                      fontWeight: 300,
                      fontSize: 14.5,
                      lineHeight: 1.65,
                      color: "#244a73",
                    }}
                  >
                    {a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
