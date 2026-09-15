import { IconBrandInstagram, IconBrandTiktok, IconBrandX } from "@tabler/icons-react";

const badgeStyle: React.CSSProperties = {
  color: "#244a73",
  background: "#d6e6f5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  borderRadius: 10,
  transition: "background 0.2s",
};

export function Footer({ children }: { children?: React.ReactNode }) {
  return (
    <footer
      style={{
        background: "#0c2238",
        padding: "clamp(32px,4vw,48px) clamp(20px,5vw,56px)",
      }}
    >
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            marginBottom: children ? 28 : 0,
          }}
        >
          <a
            href="https://instagram.com/getfila"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fila on Instagram"
            style={badgeStyle}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#d6e6f5")}
          >
            <IconBrandInstagram size={20} stroke={1.75} />
          </a>
          <a
            href="https://tiktok.com/@getfila"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fila on TikTok"
            style={badgeStyle}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#d6e6f5")}
          >
            <IconBrandTiktok size={20} stroke={1.75} />
          </a>
          <a
            href="https://x.com/getmyfila"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fila on X"
            style={badgeStyle}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#d6e6f5")}
          >
            <IconBrandX size={20} stroke={1.75} />
          </a>
        </div>

        {children && (
          <div
            style={{
              borderTop: "1px solid rgba(128,173,209,0.15)",
              paddingTop: 24,
            }}
          >
            {children}
          </div>
        )}

        <div
          style={{
            marginTop: 24,
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
            &copy; {new Date().getFullYear()} My Fila, Inc. All rights
            reserved.
          </span>
          <a
            href="/privacy-policy/"
            className="fila-contact-link"
            style={{ color: "#5a8ab0", transition: "color 0.2s" }}
          >
            Privacy Policy
          </a>
          <a
            href="/help/"
            className="fila-contact-link"
            style={{ color: "#5a8ab0", transition: "color 0.2s" }}
          >
            Help
          </a>
        </div>
      </div>
    </footer>
  );
}
