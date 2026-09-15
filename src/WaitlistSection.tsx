import { useState, FormEvent } from "react";
import { IconCheck } from "@tabler/icons-react";
import { JOTFORM_WAITLIST, CONSENT_TEXT, submitToJotform, validEmail } from "./shared";

export function WaitlistSection({
  heading = "Join the waitlist",
  subtext = "Beta access opens to waitlist members first. Reserve your place today.",
}: {
  heading?: string;
  subtext?: string;
}) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [err, setErr] = useState("");
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validEmail(email)) {
      setErr("Please enter a valid email address.");
      return;
    }
    setSending(true);
    setErr("");
    try {
      await submitToJotform(JOTFORM_WAITLIST, {
        q4_emailAddress: email.trim(),
        "q15_consent[]": CONSENT_TEXT,
      });
      setDone(true);
    } catch {
      setErr("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #102a45 0%, #244a73 100%)",
        padding: "clamp(72px,9vw,116px) clamp(20px,5vw,56px)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 640,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2rem,4vw,3.1rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.015em",
            color: "#fff",
            margin: "0 0 18px",
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            fontWeight: 300,
            fontSize: "clamp(1rem,1.5vw,1.18rem)",
            lineHeight: 1.55,
            color: "#adcce6",
            margin: "0 0 36px",
          }}
        >
          {subtext}
        </p>

        {done ? (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 13,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(173,204,230,0.4)",
              borderRadius: 12,
              padding: "18px 24px",
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              style={{
                flex: "none",
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "#457aab",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconCheck size={19} color="#fff" stroke={2.4} />
            </div>
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#fff",
                }}
              >
                You're on the list.
              </div>
              <div
                style={{
                  fontWeight: 300,
                  fontSize: 14,
                  color: "#adcce6",
                  marginTop: 2,
                }}
              >
                Watch your inbox for beta access.
              </div>
            </div>
          </div>
        ) : (
          <>
            <form
              onSubmit={submit}
              className="fila-form"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                maxWidth: 520,
                margin: "0 auto",
              }}
            >
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErr("");
                }}
                type="email"
                placeholder="you@email.com"
                aria-label="Email address"
                className="fila-input-dark"
                style={{
                  flex: "1 1 240px",
                  minWidth: 0,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 16,
                  color: "#fff",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(173,204,230,0.45)",
                  borderRadius: 10,
                  padding: "15px 18px",
                  outline: "none",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
              />
              <button
                type="submit"
                disabled={sending}
                className="fila-btn-light"
                style={{
                  flex: "0 0 auto",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#102a45",
                  background: "#adcce6",
                  border: "none",
                  borderRadius: 10,
                  padding: "15px 26px",
                  cursor: sending ? "wait" : "pointer",
                  transition: "transform 0.2s, background 0.2s",
                  opacity: sending ? 0.7 : 1,
                }}
              >
                {sending ? "Submitting..." : "Submit"}
              </button>
              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 9,
                  width: "100%",
                  marginTop: 10,
                  textAlign: "left",
                  fontSize: 13,
                  fontWeight: 300,
                  color: "#adcce6",
                  lineHeight: 1.5,
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  style={{
                    marginTop: 2,
                    width: 15,
                    height: 15,
                    flex: "none",
                    accentColor: "#adcce6",
                    cursor: "pointer",
                  }}
                />
                <span>
                  I agree to receive emails about early access and product
                  updates. See our{" "}
                  <a
                    href="https://www.getfila.com/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fff", textDecoration: "underline" }}
                  >
                    Privacy Policy
                  </a>{" "}
                  for more information.
                </span>
              </label>
            </form>
            {err && (
              <div style={{ fontSize: 13.5, color: "#f0b4b4", marginTop: 11 }}>
                {err}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
