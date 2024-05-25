const fs = require('fs');

fs.writeFile("output.txt", "writing file", (error) => {
  if (error) {
    console.log("Error occurred");
  } else {
    console.log("File written code successfully");
  }
})


// // This is for test that node.js working correctly
// console.log("Villan is the hero");