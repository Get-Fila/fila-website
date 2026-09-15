import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WaitlistSection } from "./WaitlistSection";
import { ContactModal } from "./shared";

export function JoinWaitlist() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .fila-landing ::selection { background: #adcce6; color: #102a45; }
        .fila-landing input::placeholder { color: #80add1; }
        .fila-landing .fila-input:focus { border-color: #457aab; box-shadow: 0 0 0 3px rgba(69,122,171,0.15); }
        .fila-landing .fila-btn:hover { transform: translateY(-1px); box-shadow: 0 9px 24px rgba(36,74,115,0.36); }
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

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <WaitlistSection
            heading={
              <>
                Be among the first to try{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #244a73, #adcce6)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  Fila.
                </span>
              </>
            }
            subtext="Beta access opens to waitlist members first. Reserve your place today."
            variant="light"
          />
        </div>

        <Footer />

        <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </>
  );
}
