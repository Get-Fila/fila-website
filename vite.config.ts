import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.PORT || "5174"),
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        privacyPolicy: resolve(__dirname, "privacy-policy/index.html"),
        help: resolve(__dirname, "help/index.html"),
        helpDeleteAccount: resolve(__dirname, "help/delete-account/index.html"),
        helpDeleteRecords: resolve(__dirname, "help/delete-records/index.html"),
        about: resolve(__dirname, "about/index.html"),
        joinWaitlist: resolve(__dirname, "join-waitlist/index.html"),
      },
    },
  },
});
