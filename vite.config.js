import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "dist",
        rollupOptions: {
            input: {
                background: "src/background.tsx",
                main: resolve(__dirname, "popup.html"),
            },
            output: {
                entryFileNames: "[name].js",
                chunkFileNames: "chunks/[name].[hash].js",
                format: "esm",
                dir: "dist",
            },
        },
    },
});
