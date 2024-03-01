import {analysizeComments} from "code-comments-analysis";
const fs = require("fs");
const path = require("path");
const url = path.join(__dirname, "test.vue");
const content =fs.readFileSync(url);
 analysizeComments(content.toString(),'vue');
