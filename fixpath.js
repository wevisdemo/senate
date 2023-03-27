const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "/dist");

function replaceInFile(filePath) {
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
}

function traverseDirectory(directoryPath) {
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      console.error(`Error reading directory: ${directoryPath}`, err);
      return;
    }

    if (directoryPath.includes("imgs")) return;

    files.forEach(function (file) {
      const filePath = path.join(directoryPath, file);
      fs.stat(filePath, function (err, stats) {
        if (err) {
          console.error(`Error getting file stats: ${filePath}`, err);
          return;
        }
        if (stats.isDirectory()) {
          traverseDirectory(filePath);
        } else if (stats.isFile()) {
          replaceInFile(filePath);
        }
      });
    });
  });
}

traverseDirectory(directoryPath);
