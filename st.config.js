module.exports = [{
    entryPoint: "src/extension.tsx",
    indexHTMLTemplate: "index.html",
}, {
    entryPoint: "src/background.ts",
    outputFileNamePattern: "background-[name].js",
    serverMode: true,
}];