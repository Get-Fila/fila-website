import {
  HelpLayout,
  h1,
  lede,
  sectionTitle,
  body,
  list,
  steps,
  note,
} from "./HelpLayout";

const th: React.CSSProperties = {
  textAlign: "left",
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 600,
  fontSize: 13,
  color: "#102a45",
  padding: "10px 14px",
  borderBottom: "2px solid rgba(69,122,171,0.35)",
};

const td: React.CSSProperties = {
  fontWeight: 300,
  fontSize: 14.5,
  lineHeight: 1.6,
  color: "#244a73",
  padding: "12px 14px",
  borderBottom: "1px solid rgba(69,122,171,0.18)",
  verticalAlign: "top",
};

const tdLabel: React.CSSProperties = {
  ...td,
  fontWeight: 400,
  color: "#102a45",
  whiteSpace: "nowrap",
};

const ROWS: { data: string; where: React.ReactNode }[] = [
  {
    data: "Conditions",
    where: (
      <>
        Health History → Conditions tab. Tap the entry&rsquo;s trash icon and
        confirm.
      </>
    ),
  },
  {
    data: "Family history",
    where: <>Health History → Family History tab. Tap the trash icon and confirm.</>,
  },
  {
    data: "Medications & supplements",
    where: <>Health History → Medications tab. Tap the trash icon on the entry.</>,
  },
  {
    data: "Vitals",
    where: <>Health History → Test Results. Tap the trash icon next to the reading.</>,
  },
  {
    data: "Imaging studies",
    where: <>Health History → Test Results. Tap the trash icon on the study.</>,
  },
  {
    data: "Lab results",
    where: (
      <>
        Health History → Test Results. Only labs you added manually have a trash
        icon. A lab result that was extracted from an uploaded record cannot be
        deleted on its own — remove it by deleting its source record (above)
        with &ldquo;Also delete extracted data&rdquo; checked.
      </>
    ),
  },
  {
    data: "Appointments",
    where: <>Appointments. Open the appointment or tap its trash icon, then confirm.</>,
  },
  {
    data: "Providers",
    where: (
      <>
        Provider Directory. Select the provider and tap <strong>Remove</strong>.
        A provider that Fila created automatically from a record is deleted when
        you remove the last record linked to it with &ldquo;Also delete
        extracted data&rdquo; checked; a provider you added yourself stays until
        you remove it here.
      </>
    ),
  },
  {
    data: "AI health reports",
    where: (
      <>
        Health Intelligence. Open the report, tap the trash icon, and confirm.
        This is permanent.
      </>
    ),
  },
  {
    data: "Share links",
    where: (
      <>
        Records → Share. Tap <strong>Revoke</strong> next to a link. Anyone
        holding that link loses access immediately.
      </>
    ),
  },
];

export function HelpDeleteRecords() {
  return (
    <HelpLayout>
      <h1 style={h1}>Delete Individual Records and Data in Fila</h1>
      <p style={lede}>
        You don&rsquo;t have to delete your whole account to remove information
        from Fila. You can delete an individual health record, and you can
        delete individual pieces of health data (a single lab result,
        medication, condition, appointment, and so on). Deletions are permanent.
      </p>

      <h2 style={sectionTitle}>Delete a health record</h2>
      <p style={body}>
        A record is a document you uploaded, such as a lab report or visit
        summary. When you upload a record, Fila also extracts structured data
        from it — lab results, vitals, imaging studies, conditions, medications,
        and providers.
      </p>

      <p style={{ ...body, fontWeight: 400, margin: "0 0 8px" }}>
        To delete one record:
      </p>
      <ol style={steps}>
        <li>
          Open Fila and go to <strong>Records</strong>.
        </li>
        <li>Find the record and tap the trash icon on its row.</li>
        <li>
          In the confirmation dialog, decide what to remove using the &ldquo;Also
          delete extracted data&rdquo; checkbox:
          <ul style={{ ...list, margin: "8px 0 0" }}>
            <li>
              <strong>Checked</strong> — deletes the document and the labs,
              conditions, medications, imaging, vitals, and auto‑created
              providers that came from it.
            </li>
            <li>
              <strong>Unchecked</strong> — deletes only the document. Anything
              already extracted from it stays in your health history.
            </li>
          </ul>
        </li>
        <li>
          Tap <strong>Delete</strong>.
        </li>
      </ol>
      <p style={note}>
        A &ldquo;Record deleted&rdquo; message with an <strong>Undo</strong>{" "}
        button appears for about 5 seconds. The record is not actually removed
        until that window passes — tap <strong>Undo</strong> to cancel.
      </p>

      <p style={{ ...body, fontWeight: 400, margin: "0 0 8px" }}>
        To delete several records at once:
      </p>
      <ol style={steps}>
        <li>
          On the Records page, tap the checkbox icon on each record you want to
          remove (or use <strong>Select all</strong>).
        </li>
        <li>In the action bar that appears, tap the trash icon.</li>
        <li>
          Choose whether to also delete extracted data, then tap{" "}
          <strong>Delete all</strong>.
        </li>
      </ol>

      <h2 style={sectionTitle}>Delete an individual piece of health data</h2>
      <p style={body}>
        Each type of data is managed on its own screen. Deleting an entry here
        removes only that entry — related entries and the source record are left
        in place.
      </p>

      <div style={{ overflowX: "auto", margin: "0 0 18px" }}>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            minWidth: 460,
          }}
        >
          <thead>
            <tr>
              <th style={th}>Data</th>
              <th style={th}>Where to delete it</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.data}>
                <td style={tdLabel}>{r.data}</td>
                <td style={td}>{r.where}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={note}>
        Apart from deleting records on the Records page, single‑entry deletions
        take effect immediately and have no undo, so make sure you have the
        right entry selected before you confirm.
      </p>
    </HelpLayout>
  );
}
