import * as esbuild from "esbuild";
import * as fs from "fs-extra";

await esbuild.build({
  entryPoints: ["src/popup.tsx"],
  bundle: true,
  outdir: "dist",
  minify: true,
  target: "chrome58",
});

await fs.copy("public", "dist");
