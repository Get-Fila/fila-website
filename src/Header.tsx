import filaLogo from "./Fila_Gradient_Transparent.png";

const navLinkStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 500,
  fontSize: 14.5,
  color: "#244a73",
  textDecoration: "none",
  transition: "color 0.2s",
};

function NavLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      style={navLinkStyle}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#457aab")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#244a73")}
    >
      {children}
    </a>
  );
}

export function Header({ onContactClick }: { onContactClick?: () => void }) {
  return (
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
          gap: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", flex: "none" }}>
          <img src={filaLogo} alt="Fila" style={{ height: 44 }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px 28px",
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about/">About</NavLink>
          <NavLink href="/join-waitlist/">Join the Waitlist</NavLink>
          {onContactClick && (
            <button
              onClick={onContactClick}
              style={{
                ...navLinkStyle,
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#457aab")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#244a73")}
            >
              Contact
            </button>
          )}
          <a
            href="https://app.getfila.com/login"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: 14,
              color: "#fff",
              textDecoration: "none",
              background: "linear-gradient(135deg, #244a73 0%, #457aab 100%)",
              padding: "9px 18px",
              borderRadius: 9,
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 14px rgba(36,74,115,0.24)",
            }}
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
