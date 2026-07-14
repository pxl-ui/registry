import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_GITHUB_PAGES_URL,
  plugins: [tailwindcss(), react()],
  publicDir: "app/public",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
