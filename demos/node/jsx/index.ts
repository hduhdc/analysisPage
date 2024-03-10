// import { transformJsx } from "./transferJSX";
// import { analysizeComments } from "code-comments-analysis";
// const aa =require('code-comments-analysis-plugin');
import {analysizeCommentsCore} from "code-comments-analysis-plugin";
import {analysizeComments} from "code-comments-analysis-core";



const fs = require("fs");
const path = require("path");

const url = path.join(__dirname, "test.jsx");
 
const content = fs.readFileSync(url).toString();
 
// console.log(analysizeCommentsCore(content,'jsx'))
console.log(analysizeComments(content,'jsx'))

