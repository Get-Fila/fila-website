import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { JoinWaitlist } from "./JoinWaitlist";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <JoinWaitlist />
  </StrictMode>,
);
