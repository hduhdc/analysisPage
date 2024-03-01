"use strict";
exports.__esModule = true;
var code_comments_analysis_1 = require("code-comments-analysis");
var fs = require("fs");
var path = require("path");
var url = path.join(__dirname, "test.vue");
var content = fs.readFileSync(url);
code_comments_analysis_1.analysizeComments(content.toString(), 'vue');
