import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/EncuentroApicola/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@assets": path.resolve(__dirname, "./attached_assets"),
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "./client/index-github.html",
    },
  },
  server: {
    port: 5000,
    host: "0.0.0.0",
  },
});