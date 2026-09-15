import { HelpLayout, h1, lede, body } from "./HelpLayout";

const ARTICLES = [
  {
    href: "/help/delete-account/",
    title: "Delete Your Fila Account",
    summary:
      "Permanently delete your Fila account and all associated data from within the app.",
  },
  {
    href: "/help/delete-records/",
    title: "Delete Individual Records and Data in Fila",
    summary:
      "Remove a single health record, or individual pieces of health data, without deleting your whole account.",
  },
];

const card: React.CSSProperties = {
  display: "block",
  textDecoration: "none",
  background: "#eef5fc",
  border: "1px solid rgba(69,122,171,0.22)",
  borderRadius: 12,
  padding: "20px 22px",
  margin: "0 0 16px",
};

export function HelpIndex() {
  return (
    <HelpLayout showBack={false}>
      <h1 style={h1}>Help Center</h1>
      <p style={lede}>
        Guides for managing your account and your health data in Fila.
      </p>

      {ARTICLES.map((a) => (
        <a key={a.href} href={a.href} style={card}>
          <span
            style={{
              display: "block",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: 17,
              color: "#102a45",
              margin: "0 0 6px",
            }}
          >
            {a.title}
          </span>
          <span style={{ ...body, margin: 0 }}>{a.summary}</span>
        </a>
      ))}
    </HelpLayout>
  );
}
