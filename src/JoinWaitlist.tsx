import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WaitlistSection } from "./WaitlistSection";
import { ContactModal } from "./shared";
import { GlobalStyles } from "./GlobalStyles";

export function JoinWaitlist() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <GlobalStyles />
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
