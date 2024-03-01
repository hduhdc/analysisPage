

import { transformVue } from "../transform/transformVue";
 
// const fs = require("fs");
// const path = require("path");
// const url = path.join(__dirname, "test.vue");





export async function analysizeComments(content:string) {
    transformVue(content);
}
  