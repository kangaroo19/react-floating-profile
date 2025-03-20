import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@context": path.resolve(__dirname, "src/lib/react-floating-profile/context"),
      "@api": path.resolve(__dirname, "src/lib/react-floating-profile/api"),
      "@types": path.resolve(__dirname, "src/lib/react-floating-profile/types"),
      "@util": path.resolve(__dirname, "src/lib/react-floating-profile/util"),
      "@components": path.resolve(__dirname, "src/lib/react-floating-profile/components"),
    },
  },
  build: {
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
