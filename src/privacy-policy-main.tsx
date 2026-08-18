import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrivacyPolicy } from "./PrivacyPolicy";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrivacyPolicy />
  </StrictMode>,
);
