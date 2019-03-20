#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
var exec = require("child_process").exec;

console.log("watching ~/Screenshots/*");
fs.watch("/Users/cgenco/Screenshots/", (event, filename) => {
  if (filename[0] !== ".") {
    console.log(`${new Date().toISOString()} uploading ${filename}`);
    exec(
      `imgur "/Users/cgenco/Screenshots/${filename}" && osascript -e 'display notification "uploaded ${filename}"'`,
      function(err, stdout, stderr) {
        // if (err) {
        // should have err.code here?
        // }
        // console.log(stdout);
      }
    );
  }

  // imgur ${filename}
  // osascript -e 'display notification "hello world!"'
});
