 //https://nodejs.org/api/fs.html
 //https://nodejs.org/api/fs.html#fsreadfilesyncpath-options

const fs = require("fs");

let contents = fs.readFileSync("test.txt");
console.log("Contents:");
console.log(contents.toString());


// using a callBack

console.log("------------------------");
fs.readFileSync("test.txt", (err, data) => {
    console,log(data.toString());
});
