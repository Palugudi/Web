// Core modules are inbluilt modules with several usefull functionalities
var fs = require('fs');
fs.writeFileSync("corn.txt", "Corn is good and Corn is Corn not a porn");
console.log(fs.readFileSync("corn.txt").toString());

var path = require('path');

var websiteHome = "Desktop/Node.js//Paris/index.html";
var websiteAbout = "Desktop/Node.js/Paris/About.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));

console.log(__dirname);
console.log(__filename);

