import { execSync } from "child_process";
import { removePathOrFile } from "st-rm-rf";
import { start } from "st-start";

(async () => {
  await removePathOrFile('dist');

  try {
    await start({
      outputFileName: "[name].js",
      singleFileOutput: true,
      entryPoint: "src/extension.tsx",
      indexHTMLTemplate: "src/index.html",
    });
  } catch (e) {}

  execSync("cp src/background.js dist/background.js");
  execSync("cp manifest.json dist/manifest.json");
  execSync("cp -r assets dist/assets");
  execSync("rm -r dist/*.br");
  execSync("rm -r dist/*.gz");

  // FIXME: Doesn't work atm
  // await copyPathOrFile("src/background.js", "dist/background.js", true);
  // await copyPathOrFile("manifest.json", "dist/manifest.json", true);
  // await copyPathOrFile("assets", "dist/assets", true);
})();
