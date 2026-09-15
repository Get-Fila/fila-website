import { useState, type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ContactModal } from "./shared";

export const h1: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 700,
  fontSize: "clamp(2rem,4vw,2.8rem)",
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
  color: "#102a45",
  margin: "0 0 10px",
};

export const lede: React.CSSProperties = {
  fontWeight: 300,
  fontSize: 16.5,
  lineHeight: 1.7,
  color: "#244a73",
  margin: "0 0 32px",
};

export const sectionTitle: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 600,
  fontSize: 21,
  color: "#102a45",
  margin: "40px 0 12px",
};

export const body: React.CSSProperties = {
  fontWeight: 300,
  fontSize: 15.5,
  lineHeight: 1.7,
  color: "#244a73",
  margin: "0 0 14px",
};

export const list: React.CSSProperties = {
  ...body,
  margin: "0 0 14px",
  paddingLeft: 22,
};

export const steps: React.CSSProperties = {
  ...body,
  margin: "0 0 18px",
  paddingLeft: 22,
};

export const link: React.CSSProperties = { color: "#457aab" };

export const note: React.CSSProperties = {
  fontWeight: 300,
  fontSize: 14.5,
  lineHeight: 1.7,
  color: "#244a73",
  background: "#e7f1fb",
  border: "1px solid rgba(69,122,171,0.25)",
  borderRadius: 10,
  padding: "14px 18px",
  margin: "0 0 18px",
};

export function HelpLayout({
  children,
  backHref = "/help/",
  backLabel = "← All help articles",
}: {
  children: ReactNode;
  backHref?: string;
  backLabel?: string;
}) {
  const [contactOpen, setContactOpen] = useState(false);

  return (
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

      {/* CONTENT */}
      <main
        style={{
          flex: 1,
          padding: "clamp(48px,6vw,72px) clamp(20px,5vw,56px)",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <a
            href={backHref}
            style={{
              display: "inline-block",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              color: "#457aab",
              textDecoration: "none",
              marginBottom: 20,
            }}
          >
            {backLabel}
          </a>
          {children}
        </div>
      </main>

      <Footer />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
