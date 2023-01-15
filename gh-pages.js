const execSync = require("child_process").execSync;
const path = require("path");

const root = path.resolve(__dirname, "..");
const build = path.resolve(root, "build");

execSync("git add -A", { cwd: build });
execSync("git commit -m \"Build for GitHub Pages\"", { cwd: build });
execSync("git subtree push --prefix build origin gh-pages", { cwd: root });