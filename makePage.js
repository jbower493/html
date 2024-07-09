const fs = require("fs");

// File path and content
const filePath = "example/index.html";
const fileContent =
    "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<h1>Hello, script did this!</h1>\n</body>\n</html>";

// Write file
fs.writeFile(filePath, fileContent, (err) => {
    if (err) throw err;
    console.log(`File '${filePath}' created successfully.`);
});
