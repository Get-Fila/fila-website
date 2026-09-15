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
        .fila-landing .fila-input-dark:focus { border-color: #adcce6; box-shadow: 0 0 0 3px rgba(173,204,230,0.2); }
        .fila-landing .fila-btn-light:hover { transform: translateY(-1px); background: #c2d9ee; }
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
            heading="Join the waitlist"
            subtext="Private beta launching soon. Waitlist members get first access — be among the first to try Fila."
          />
        </div>

        <Footer />

        <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </>
  );
}
