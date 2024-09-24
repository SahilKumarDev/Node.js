// console.log("Hello node js start"); // To check that the node is working correctly

const fs = require("fs");

fs.writeFile("output.txt", "writing.txt", (error) => {
  if (error) {
    console.log("Data not written", error);
  } else {
    console.log("File write successfully");
  }
})

