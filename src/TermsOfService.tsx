import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ContactModal } from "./shared";
import { GlobalStyles } from "./GlobalStyles";

const EFFECTIVE_DATE = "November 17, 2026";

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

export function TermsOfService() {
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
            Terms of Service
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
            These Terms of Service ("Terms") govern your use of My Fila (the
            "App"), provided by My Fila, Inc. ("we," "us," or "our").
          </p>

          <h2 style={sectionTitle}>1. Acceptance of These Terms</h2>
          <p style={body}>
            By creating an account or using the App, you agree to these Terms
            and to our{" "}
            <a href="/privacy-policy/" style={link}>
              Privacy Policy
            </a>
            . If you do not agree, do not use the App.
          </p>

          <h2 style={sectionTitle}>2. Eligibility</h2>
          <p style={body}>
            You must be at least 18 years old to use the App. By using it, you
            confirm that you are 18 or older and able to enter a binding
            contract.
          </p>

          <h2 style={sectionTitle}>3. Your Account</h2>
          <p style={body}>
            You are responsible for the information you provide and for keeping
            your login credentials secure. You are responsible for all activity
            under your account. Tell us promptly at{" "}
            <a href="mailto:hello@getfila.com" style={link}>
              hello@getfila.com
            </a>{" "}
            if you believe your account has been accessed without permission.
          </p>
          <p style={body}>
            You may not share your account, create an account for someone else
            without their permission, or impersonate anyone.
          </p>

          <h2 style={sectionTitle}>4. License to Use the App</h2>
          <p style={body}>
            Subject to these Terms, we grant you a personal, limited,
            non-exclusive, non-transferable, revocable license to download and
            use the App for your own non-commercial purposes.
          </p>

          <h2 style={sectionTitle}>5. Acceptable Use</h2>
          <p style={body}>You agree not to:</p>
          <ul style={list}>
            <li>Use the App for anything unlawful, or in violation of these Terms</li>
            <li>Copy, modify, distribute, sell, or lease any part of the App</li>
            <li>
              Reverse engineer or attempt to extract the App's source code,
              except where the law allows it
            </li>
            <li>Interfere with, disrupt, or overload the App or its servers</li>
            <li>
              Access the App through automated means (bots, scrapers) without
              our written permission
            </li>
            <li>
              Attempt to gain unauthorized access to other users' accounts or
              our systems
            </li>
          </ul>

          <h2 style={sectionTitle}>6. Your Data</h2>
          <p style={body}>
            The information you enter into the App ("Your Data") belongs to
            you. Your Data is private to your account and is not shown to other
            users.
          </p>
          <p style={body}>
            You give us a limited license to store, process, and back up Your
            Data solely to operate and improve the App and provide it to you. We
            do not sell Your Data. How we collect and use personal information
            is described in our{" "}
            <a href="/privacy-policy/" style={link}>
              Privacy Policy
            </a>
            .
          </p>
          <p style={body}>
            You are responsible for the accuracy of Your Data and for having the
            right to enter it. We recommend keeping your own copies of anything
            important.
          </p>

          <h2 style={sectionTitle}>7. Our Intellectual Property</h2>
          <p style={body}>
            The App, including its design, software, text, graphics, logos, and
            trademarks, is owned by My Fila, Inc. or its licensors and is
            protected by law. These Terms do not give you any ownership rights
            in the App.
          </p>
          <p style={body}>
            If you send us feedback or suggestions, we may use them without any
            obligation to you.
          </p>

          <h2 style={sectionTitle}>8. Fees</h2>
          <p style={body}>
            The App is currently free. If we introduce paid features, we will
            tell you in advance and you will not be charged unless you agree to
            the applicable pricing and payment terms.
          </p>

          <h2 style={sectionTitle}>9. Changes to the App and These Terms</h2>
          <p style={body}>
            We may add, change, or remove features of the App at any time. We
            may update these Terms from time to time. If a change is material,
            we will notify you through the App or by email before it takes
            effect. Continuing to use the App after the effective date means you
            accept the updated Terms.
          </p>

          <h2 style={sectionTitle}>10. Termination</h2>
          <p style={body}>
            You may stop using the App and delete your account at any time by
            going to Menu &gt; My Account &gt; Delete Account. We may suspend or
            terminate your access if you breach these Terms, if required by law,
            or if we discontinue the App. Where reasonable, we will give you
            notice and a chance to export Your Data.
          </p>
          <p style={body}>
            Sections 6 (license to process Your Data, to the extent needed to
            delete it), 7, 11, 12, 13, and 14 survive termination.
          </p>

          <h2 style={sectionTitle}>11. Disclaimers</h2>
          <p style={body}>
            THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES
            OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT. We do not guarantee that the App will be
            uninterrupted, error-free, or secure, or that Your Data will never
            be lost.
          </p>

          <h2 style={sectionTitle}>12. Limitation of Liability</h2>
          <p style={body}>
            TO THE FULLEST EXTENT PERMITTED BY LAW, MY FILA, INC. WILL NOT BE
            LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            PUNITIVE DAMAGES, OR FOR ANY LOSS OF DATA, PROFITS, OR GOODWILL,
            ARISING FROM YOUR USE OF THE APP. OUR TOTAL LIABILITY FOR ANY CLAIM
            RELATING TO THE APP WILL NOT EXCEED ONE HUNDRED U.S. DOLLARS (US
            $100).
          </p>
          <p style={body}>
            Some jurisdictions do not allow certain of these limits, so they may
            not apply to you.
          </p>

          <h2 style={sectionTitle}>13. Indemnity</h2>
          <p style={body}>
            You agree to indemnify and hold harmless My Fila, Inc. and its
            officers, employees, and agents from claims, losses, and expenses
            (including reasonable legal fees) arising from your misuse of the
            App or your breach of these Terms.
          </p>

          <h2 style={sectionTitle}>14. Governing Law and Disputes</h2>
          <p style={body}>
            These Terms are governed by the laws of the State of Delaware,
            without regard to conflict-of-law rules. Any dispute will be
            resolved in the state or federal courts located in Delaware, unless
            applicable consumer law gives you the right to bring a claim where
            you live.
          </p>

          <h2 style={sectionTitle}>15. General</h2>
          <p style={body}>
            These Terms, together with our{" "}
            <a href="/privacy-policy/" style={link}>
              Privacy Policy
            </a>
            , are the entire agreement between you and us about the App. If any
            part is found unenforceable, the rest remains in effect. Our failure
            to enforce a provision is not a waiver. You may not transfer these
            Terms; we may transfer them in connection with a merger,
            acquisition, or sale of assets.
          </p>
          <p style={body}>
            If you downloaded the App from the Apple App Store or Google Play,
            that store's terms also apply, and the store is not responsible for
            the App.
          </p>

          <h2 style={sectionTitle}>16. Contact</h2>
          <p style={body}>
            Questions about these Terms? Contact us at{" "}
            <a href="mailto:hello@getfila.com" style={link}>
              hello@getfila.com
            </a>
            .
          </p>
        </div>
      </main>

      <Footer />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </>
  );
}
