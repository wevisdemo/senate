const fs = require("fs");
const path = require("path");

const FILES = ["/index.html", "/about/index.html"];

FILES.forEach((f) => {
  const filePath = path.join(__dirname, "/dist", f);
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      console.error(`Error reading file: ${filePath}`, err);
      return;
    }
    const result = data.replace(/(?<!\/senate)\/build/g, "/senate/build");
    fs.writeFile(filePath, result, "utf8", function (err) {
      if (err) {
        console.error(`Error writing file: ${filePath}`, err);
      }
    });
  });
});
