import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  splitting: false,
  sourcemap: true,
  outDir: "lib",
  clean: true,
  format: ["cjs", "esm"],
});
