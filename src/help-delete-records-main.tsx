import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelpDeleteRecords } from "./HelpDeleteRecords";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelpDeleteRecords />
  </StrictMode>,
);
