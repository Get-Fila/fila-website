import {
  HelpLayout,
  h1,
  lede,
  sectionTitle,
  body,
  list,
  steps,
} from "./HelpLayout";

export function HelpDeleteAccount() {
  return (
    <HelpLayout>
      <h1 style={h1}>Delete Your Fila Account</h1>
      <p style={lede}>
        You can permanently delete your Fila account and associated data from
        within the Fila app.
      </p>

      <h2 style={sectionTitle}>To delete your account</h2>
      <ol style={steps}>
        <li>Open Fila and sign in.</li>
        <li>
          Open the account menu:
          <ul style={{ ...list, margin: "8px 0 0" }}>
            <li>
              On a phone: tap the menu icon (☰) in the top bar, then tap{" "}
              <strong>Account</strong>.
            </li>
            <li>
              On desktop: in the left sidebar, click <strong>Account</strong>{" "}
              (just below your name).
            </li>
          </ul>
        </li>
        <li>
          Select <strong>Delete account</strong>.
        </li>
        <li>In the confirmation dialog, enter your current password.</li>
        <li>
          Tap <strong>Delete my account</strong>.
        </li>
      </ol>

      <h2 style={sectionTitle}>What gets deleted</h2>
      <p style={body}>
        When you delete your account, Fila immediately and permanently deletes
        your account and associated data, including your medical records and
        associated health information stored by Fila. There is no waiting
        period, and deleted data cannot be recovered. This includes:
      </p>
      <ul style={list}>
        <li>Your login and profile information</li>
        <li>
          Every health record document you uploaded (the original PDF files)
        </li>
        <li>
          Health information extracted from those records — lab results, vitals,
          imaging studies, conditions, medications, and family history
        </li>
        <li>Appointments and providers</li>
        <li>AI‑generated health reports and insights</li>
        <li>Any share links you created</li>
      </ul>
      <p style={body}>
        After deletion you are signed out and returned to the login screen. To
        use Fila again you would need to create a new account.
      </p>
    </HelpLayout>
  );
}
