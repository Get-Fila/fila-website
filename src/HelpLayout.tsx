import type { ReactNode } from "react";
import filaLogo from "./Fila_Gradient_Transparent.png";

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
      {/* HEADER */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(214,230,245,0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(173,204,230,0.4)",
          padding: "0 clamp(20px,5vw,56px)",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          <a href="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={filaLogo} alt="Fila" style={{ height: 44 }} />
          </a>
          <a
            href={backHref}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              color: "#244a73",
              textDecoration: "none",
            }}
          >
            {backLabel}
          </a>
        </div>
      </header>

      {/* CONTENT */}
      <main
        style={{
          flex: 1,
          padding: "clamp(48px,6vw,72px) clamp(20px,5vw,56px)",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>{children}</div>
      </main>

      {/* FOOTER */}
      <footer
        style={{
          background: "#0c2238",
          padding: "clamp(24px,3vw,32px) clamp(20px,5vw,56px)",
        }}
      >
        <div
          style={{
            maxWidth: 1040,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "6px 14px",
            fontWeight: 300,
            fontSize: 12,
            color: "#3d6d8f",
          }}
        >
          <span>
            &copy; {new Date().getFullYear()} My Fila, Inc. All rights reserved.
          </span>
          <a href="/privacy-policy/" style={{ color: "#5a8ab0" }}>
            Privacy Policy
          </a>
          <a href="/help/" style={{ color: "#5a8ab0" }}>
            Help
          </a>
        </div>
      </footer>
    </div>
  );
}
