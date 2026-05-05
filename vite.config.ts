import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import sitemap from "vite-plugin-sitemap";

export default defineConfig(({ isSsrBuild }) => ({
  server: { host: "::", port: 8080, hmr: { overlay: false } },
  plugins: [
    react(),
    sitemap({
      hostname: "https://mebelumontaza.lv",
      generateRobotsTxt: false,
      // NB: plugin auto-adds "/" — neuzskaitām to dynamicRoutes lai izvairītos no dublikāta
      dynamicRoutes: [
        "/koka-majinas",
        "/parvaksanas-serviss",
        "/portfolio",
        "/kontakti",
      ],
    }),
  ],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: isSsrBuild
        ? {}
        : {
            manualChunks: {
              "react-vendor": ["react", "react-dom", "react-router-dom"],
              "framer-motion": ["framer-motion"],
              lenis: ["lenis"],
              form: ["react-hook-form", "@hookform/resolvers", "zod"],
              icons: ["lucide-react"],
            },
          },
    },
  },
}));
