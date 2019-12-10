const resolve = require('path').resolve;

module.exports = [{
    entryPoint: "src/plugin-page.tsx",
    outputPath: resolve(process.cwd(), "dist", "plugin-page"),
    outputFileNamePattern: "plugin-page-[name].js",
    indexHTMLTemplate: "index.html",
}, {
    entryPoint: "src/browser-action.ts",
    outputPath: resolve(process.cwd(), "dist", "browser-action"),
    outputFileNamePattern: "browser-action-[name].js",
    indexHTMLTemplate: "index.html"
}];