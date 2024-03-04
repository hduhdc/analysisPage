

import { transformVue } from "../transform/transformVue";
import { transformJsx } from "../transform/transformJSX";

// const fs = require("fs");
// const path = require("path");
// const url = path.join(__dirname, "test.vue");

 
// export async function analysizeComments(content:string,type:string) {
 
//     if(type==='vue'){
//         transformVue(content);
//     }else if(type==='jsx'){
//         transformJsx(content)
//     }
   
   
    
   
// }

export async function analysizeComments(content:string,type:string) {
 
    if(type==='vue'){
        transformVue(content);
    }else if(type==='jsx'){
        transformJsx(content)
    }
   
   
    
   
}
  