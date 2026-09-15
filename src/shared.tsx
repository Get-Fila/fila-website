import { useEffect, useState, FormEvent } from "react";
import { IconCheck, IconX, IconLoader2 } from "@tabler/icons-react";

export const JOTFORM_CONTACT = "262367145999171";
export const JOTFORM_WAITLIST = "262367262874163";
export const CONSENT_TEXT =
  "I agree to receive emails about early access and product updates. See our Privacy Policy for more information.";

export async function submitToJotform(
  formId: string,
  fields: Record<string, string>,
) {
  const body = new FormData();
  body.append("formID", formId);
  body.append("website", ""); // honeypot — must stay empty
  for (const [key, value] of Object.entries(fields)) body.append(key, value);
  const res = await fetch(`https://submit.jotform.com/submit/${formId}`, {
    method: "POST",
    mode: "cors",
    body,
  });
  if (!res.ok) throw new Error("Submission failed");
}

export const validEmail = (e: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((e || "").trim());

export const inputBase: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: 14,
  color: "#102a45",
  background: "#fff",
  border: "1px solid #adcce6",
  borderRadius: 10,
  padding: "10px 13px",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

export function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setSent(false);
      setError("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setConsent(false);
    }
  }, [open]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !message.trim()) {
      setError("Please fill out all required fields.");
      return;
    }
    setSending(true);
    setError("");
    try {
      await submitToJotform(JOTFORM_CONTACT, {
        "q3_fullName[first]": firstName.trim(),
        "q3_fullName[last]": lastName.trim(),
        q4_emailAddress: email.trim(),
        q7_message7: message.trim(),
        "q10_consent[]": CONSENT_TEXT,
      });
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(16,42,69,0.55)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: "24px",
          maxWidth: 360,
          width: "100%",
          position: "relative",
          boxShadow: "0 24px 64px rgba(16,42,69,0.2)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
          }}
        >
          <IconX size={20} color="#80add1" stroke={1.8} />
        </button>

        {sent ? (
          <div style={{ textAlign: "center", padding: "8px 0" }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(69,122,171,0.1)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 14,
              }}
            >
              <IconCheck size={24} color="#457aab" stroke={2.2} />
            </div>
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 19,
                color: "#102a45",
                marginBottom: 6,
              }}
            >
              Message sent!
            </div>
            <p
              style={{
                fontWeight: 300,
                fontSize: 14.5,
                color: "#244a73",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              Thanks for reaching out. We'll get back to you soon.
            </p>
          </div>
        ) : (
          <>
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 20,
                color: "#102a45",
                marginBottom: 4,
              }}
            >
              Get in touch
            </div>
            <p
              style={{
                fontWeight: 300,
                fontSize: 14,
                color: "#244a73",
                lineHeight: 1.5,
                margin: "0 0 12px",
              }}
            >
              Questions, feedback, or partnership inquiries? We'd love to hear
              from you.
            </p>

            <form
              onSubmit={submit}
              style={{ display: "flex", flexDirection: "column", gap: 10 }}
            >
              <div style={{ display: "flex", gap: 10 }}>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name*"
                  aria-label="First name"
                  required
                  className="fila-input"
                  style={{ ...inputBase, flex: 1, minWidth: 0 }}
                />
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name*"
                  aria-label="Last name"
                  required
                  className="fila-input"
                  style={{ ...inputBase, flex: 1, minWidth: 0 }}
                />
              </div>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                type="email"
                placeholder="you@email.com*"
                aria-label="Email"
                required
                className="fila-input"
                style={inputBase}
              />
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setError("");
                }}
                placeholder="Your message*"
                aria-label="Message"
                required
                rows={4}
                className="fila-input"
                style={{ ...inputBase, resize: "vertical", minHeight: 80 }}
              />
              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 9,
                  fontSize: 13,
                  fontWeight: 300,
                  color: "#244a73",
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
                    accentColor: "#457aab",
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
                    style={{ color: "#457aab", textDecoration: "underline" }}
                  >
                    Privacy Policy
                  </a>{" "}
                  for more information.
                </span>
              </label>
              {error && (
                <div style={{ fontSize: 13.5, color: "#b04a4a" }}>{error}</div>
              )}
              <button
                type="submit"
                disabled={sending}
                className="fila-btn"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#fff",
                  background:
                    "linear-gradient(135deg, #244a73 0%, #457aab 100%)",
                  border: "none",
                  borderRadius: 10,
                  padding: "12px 24px",
                  cursor: sending ? "wait" : "pointer",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  boxShadow: "0 6px 18px rgba(36,74,115,0.28)",
                  opacity: sending ? 0.7 : 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                {sending ? (
                  <>
                    <IconLoader2
                      size={18}
                      color="#fff"
                      stroke={2}
                      style={{ animation: "spin 1s linear infinite" }}
                    />{" "}
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
