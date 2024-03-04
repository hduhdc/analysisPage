// import MagicString from "magic-string";

import { parse, transform } from "@vue/compiler-dom";
import { parse as parseSFC } from "@vue/compiler-sfc";
// import { transformJsx } from "./transformJSX.js";

type StringArr = string[];

export function transformVue(content: string) {
 

  const ast = parse(content, {
    comments: true,
  });
  console.log(ast);

  const domComments: StringArr = [];
  const scriptConten: StringArr = [];
  transform(ast, {
    nodeTransforms: [
      (node) => {
        if (node.type === 3) {
          domComments.push(node.content);
        } else if (node.type === 2) {
          // console.log(node)
          scriptConten.push(node.content);
        }
      },
    ],
  });
  // console.log(domComments);
  // 解析script 部分
  const { descriptor } = parseSFC(content, {
    sourceMap: false,
  });
    if(descriptor.script){
      // console.log(descriptor.script.content)
      // transformJsx(descriptor.script.content);
    }
  
  
}
