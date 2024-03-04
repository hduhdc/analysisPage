import {analysizeCommentsCore} from "code-comments-analysis-plugin";
const fs = require("fs");
const path = require("path");
const url = path.join(__dirname, "test.vue");
const content =fs.readFileSync(url);
analysizeCommentsCore(content.toString(),'vue');
