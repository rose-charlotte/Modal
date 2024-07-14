import { resolve } from "node:path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import * as packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tsConfigPaths(),
        dts({
            include: ["src/"],
        }),
    ],
    build: {
        lib: {
            entry: resolve("src", "index.ts"),
            name: "@rose-charlotte/modal",
            formats: ["es"],
            fileName: "index",
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies)],
        },
    },
});
