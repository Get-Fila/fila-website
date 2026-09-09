import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelpIndex } from "./HelpIndex";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelpIndex />
  </StrictMode>,
);
