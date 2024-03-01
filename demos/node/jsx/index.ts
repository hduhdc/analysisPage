// import { transformJsx } from "./transferJSX";
// import { analysizeComments } from "code-comments-analysis";
const aa =require('code-comments-analysis');
const fs = require("fs");
const path = require("path");

const url = path.join(__dirname, "test.jsx");
 
const content = fs.readFileSync(url).toString();
 
console.log(content);

// try {
//   transformJsx(content);
// } catch (err) {
//   console.log(err);
// }
console.log(aa.analysizeComments(content,'jsx'))