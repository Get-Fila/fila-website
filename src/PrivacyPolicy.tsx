import filaLogo from "./Fila_Gradient_Transparent.png";

const EFFECTIVE_DATE = "August 17, 2026";

const sectionTitle: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 600,
  fontSize: 21,
  color: "#102a45",
  margin: "40px 0 12px",
};

const body: React.CSSProperties = {
  fontWeight: 300,
  fontSize: 15.5,
  lineHeight: 1.7,
  color: "#244a73",
  margin: "0 0 14px",
};

const list: React.CSSProperties = {
  ...body,
  margin: "0 0 14px",
  paddingLeft: 22,
};

const link: React.CSSProperties = { color: "#457aab" };

export function PrivacyPolicy() {
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
            href="/"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              color: "#244a73",
              textDecoration: "none",
            }}
          >
            &larr; Back to home
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
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem,4vw,2.8rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#102a45",
              margin: "0 0 10px",
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              fontWeight: 300,
              fontSize: 14,
              color: "#80add1",
              margin: "0 0 36px",
            }}
          >
            Effective date: {EFFECTIVE_DATE}
          </p>

          <p style={body}>
            My Fila, Inc. operates the My Fila health intelligence platform,
            including our website, web application, and iOS and Android apps
            (collectively, the "Service"). This policy explains what information
            we collect, how we use it, and the choices you have.
          </p>
          <p style={body}>
            My Fila is designed to help you centralize and understand your own
            health records. Because that involves sensitive health information,
            we've tried to be specific here rather than generic. If anything
            below doesn't match how we actually operate, tell us and we'll fix
            it before this goes live.
          </p>

          <h2 style={sectionTitle}>1. Information We Collect</h2>
          <p style={body}>
            <strong>Account information.</strong> Your name, email address, and
            password (stored as a bcrypt hash).
          </p>
          <p style={body}>
            <strong>Health information you provide.</strong> Records, lab
            results, vitals, appointments, provider information, and health
            history entries you add or upload, including PDF documents you
            upload. This may include medical diagnoses, medications, treatment
            history, and similar sensitive health data.
          </p>
          <p style={body}>
            <strong>Uploaded files.</strong> PDF medical records you upload are
            stored in encrypted cloud storage (AWS S3) and processed to extract
            relevant text and data.
          </p>
          <p style={body}>
            <strong>Usage data.</strong> Standard technical information such as
            IP address, browser type, and how you interact with the Service,
            used for security (e.g., rate limiting) and troubleshooting.
          </p>

          <h2 style={sectionTitle}>2. How We Use Your Information</h2>
          <ul style={list}>
            <li>
              To provide the Service: storing and organizing your health
              records, appointments, labs, and history in one place.
            </li>
            <li>
              To generate AI-powered health insights and pattern analysis. When
              you use this feature, relevant portions of your health data are
              processed through Aptible's LLM Gateway under a signed Business
              Associate Agreement (BAA), which contractually prohibits use of
              your data to train AI models.
            </li>
            <li>
              To power the in-app assistant ("Ask Fila"), which works the same
              way. Your question and relevant health context are processed
              through Aptible's LLM Gateway under the same BAA protections.
            </li>
            <li>
              To maintain the security and integrity of the Service
              (authentication, rate limiting, abuse prevention).
            </li>
          </ul>
          <p style={body}>
            We do not sell your personal or health information. We do not use
            your health data for advertising, and the Service does not display
            ads.
          </p>

          <h2 style={sectionTitle}>3. Who We Share Information With</h2>
          <p style={body}>
            We share information only as necessary to operate the Service:
          </p>
          <ul style={list}>
            <li>
              <strong>Vercel</strong>, which hosts our website and web
              application.
            </li>
            <li>
              <strong>Aptible</strong>, which hosts our database and API, and
              (as described above) powers AI-generated insights and the in-app
              assistant via its LLM Gateway, under a signed BAA.
            </li>
            <li>
              <strong>AWS S3</strong>, which stores your uploaded files,
              encrypted at rest.
            </li>
            <li>
              <strong>Anyone you explicitly choose to share with</strong>, via
              the Service's Share feature, which lets you generate a link to
              share specific records or insights with someone of your choosing
              (e.g., a provider). You control what's included and can revoke
              access.
            </li>
          </ul>
          <p style={body}>
            We do not share your information with third parties for their own
            marketing or advertising purposes.
          </p>

          <h2 style={sectionTitle}>4. Data Security</h2>
          <ul style={list}>
            <li>
              All traffic between your device and our servers is encrypted in
              transit (HTTPS/TLS).
            </li>
            <li>Uploaded files are encrypted at rest.</li>
            <li>Passwords are hashed (bcrypt), never stored in plain text.</li>
            <li>
              Authentication uses httpOnly session cookies, which aren't
              accessible to client-side scripts.
            </li>
          </ul>
          <p style={body}>
            No system is perfectly secure, but we've built the Service with
            these protections as a baseline, not an afterthought.
          </p>

          <h2 style={sectionTitle}>5. Data Retention &amp; Deletion</h2>
          <p style={body}>
            We retain your information for as long as your account is active.
            You may request deletion of your account and all associated data at
            any time by contacting us at{" "}
            <a href="mailto:engineering@getfila.com" style={link}>
              engineering@getfila.com
            </a>
            .
          </p>

          <h2 style={sectionTitle}>6. Your Choices</h2>
          <ul style={list}>
            <li>
              You can access, update, or delete the health information you've
              entered at any time within the app.
            </li>
            <li>
              You can request a copy of your data or its deletion by contacting
              us at{" "}
              <a href="mailto:engineering@getfila.com" style={link}>
                engineering@getfila.com
              </a>
              .
            </li>
          </ul>

          <h2 style={sectionTitle}>7. Children's Privacy</h2>
          <p style={body}>
            The Service is not directed to children under 13 (or under 16, where
            applicable local law sets a higher age), and we do not knowingly
            collect information from children in that age range.
          </p>

          <h2 style={sectionTitle}>8. Changes to This Policy</h2>
          <p style={body}>
            We may update this policy as the Service evolves. We'll update the
            effective date above when we do, and for material changes, we'll
            make a reasonable effort to notify you directly.
          </p>

          <h2 style={sectionTitle}>9. Contact Us</h2>
          <p style={body}>
            Questions about this policy or your data:{" "}
            <a href="mailto:engineering@getfila.com" style={link}>
              engineering@getfila.com
            </a>
          </p>
        </div>
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
            fontWeight: 300,
            fontSize: 12,
            color: "#3d6d8f",
          }}
        >
          &copy; {new Date().getFullYear()} My Fila, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
