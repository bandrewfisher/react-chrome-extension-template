const chokidar = require("chokidar");
const { spawn } = require("child_process");

console.log("Watching for file changes...");
const watcher = chokidar.watch(["public/**/*", "src/**/*"], {
  ignoreInitial: true,
});

watcher.on("all", (event, path) => {
  console.log(`File ${path} changed. Rebuilding...`);
  spawn("yarn", ["run", "build"], { stdio: "inherit" });
});
