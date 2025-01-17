import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://manage-storage.onrender.com",
      "/uploads/": "https://manage-storage.onrender.com",
    },
  },
});
