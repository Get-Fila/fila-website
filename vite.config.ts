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
      },
    },
  },
});
