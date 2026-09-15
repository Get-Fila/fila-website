import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
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
  onClick,
  style,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  return (
    <a
      href={href}
      style={{ ...navLinkStyle, ...style }}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#457aab")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#244a73")}
    >
      {children}
    </a>
  );
}

export function Header({ onContactClick }: { onContactClick?: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

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
      <style>{`
        .fila-header-nav { display: flex; }
        .fila-header-toggle { display: none; }
        .fila-header-dropdown { display: none; }
        @media (max-width: 719px) {
          .fila-header-nav { display: none; }
          .fila-header-toggle { display: flex; }
          .fila-header-dropdown.fila-open { display: flex; }
        }
      `}</style>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", flex: "none" }}>
          <img src={filaLogo} alt="Fila" style={{ height: 44 }} />
        </div>

        <div
          className="fila-header-nav"
          style={{
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
        </div>

        <button
          className="fila-header-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          style={{
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            border: "none",
            padding: 4,
            cursor: "pointer",
            color: "#244a73",
          }}
        >
          {menuOpen ? (
            <IconX size={24} stroke={1.8} />
          ) : (
            <IconMenu2 size={24} stroke={1.8} />
          )}
        </button>
      </div>

      <div
        className={`fila-header-dropdown${menuOpen ? " fila-open" : ""}`}
        style={{
          flexDirection: "column",
          gap: 4,
          padding: "4px 0 16px",
          borderTop: "1px solid rgba(173,204,230,0.4)",
        }}
      >
        <NavLink href="/" onClick={closeMenu} style={{ padding: "12px 0" }}>
          Home
        </NavLink>
        <NavLink href="/about/" onClick={closeMenu} style={{ padding: "12px 0" }}>
          About
        </NavLink>
        <NavLink
          href="/join-waitlist/"
          onClick={closeMenu}
          style={{ padding: "12px 0" }}
        >
          Join the Waitlist
        </NavLink>
        {onContactClick && (
          <button
            onClick={() => {
              closeMenu();
              onContactClick();
            }}
            style={{
              ...navLinkStyle,
              textAlign: "left",
              background: "transparent",
              border: "none",
              padding: "12px 0",
              cursor: "pointer",
            }}
          >
            Contact
          </button>
        )}
      </div>
    </header>
  );
}
