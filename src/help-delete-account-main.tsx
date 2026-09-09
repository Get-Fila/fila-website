import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelpDeleteAccount } from "./HelpDeleteAccount";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelpDeleteAccount />
  </StrictMode>,
);
