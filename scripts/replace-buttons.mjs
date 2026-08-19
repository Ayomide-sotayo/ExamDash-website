import fs from "fs";
import path from "path";

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith(".jsx")) results.push(file);
    }
  });
  return results;
}

const files = walk("./src");
files.forEach((f) => {
  let content = fs.readFileSync(f, "utf8");

  // Replace the default standard red button
  content = content.replace(
    /className="([^"]*)bg-red-500 hover:bg-red-600([^"]*)"/g,
    'className="$1bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 hover:shadow-lg transition-all border-0$2"',
  );

  // Replace the mobile nav button which is just bg-red-500
  content = content.replace(
    /className="([^"]*)bg-red-500 text-white([^"]*)"/g,
    'className="$1bg-[linear-gradient(180deg,#FF5C3D_0%,#FF2C67_100%)] hover:opacity-90 transition-all border-0 text-white$2"',
  );

  fs.writeFileSync(f, content);
});
console.log("Button gradients applied successfully.");
