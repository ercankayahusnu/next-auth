/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // tarayıcı ortamını taklit etsin
    globals: true, // describe, it, expect global gelsin
    setupFiles: "./vitest.setup.ts", // setup dosyamızı çağır
  },
});
