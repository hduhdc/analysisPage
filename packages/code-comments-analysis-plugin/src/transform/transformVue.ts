import MagicString from "magic-string";

import { parse, transform } from "@vue/compiler-dom";
import { parse as parseSFC } from '@vue/compiler-sfc';


type StringArr = string[];


export function transformVue(content: string) {
  const s = new MagicString(content);

  const ast = parse(content, {
    comments: true,
  });
  // console.log(ast);

  const domComments:StringArr = [];
  const scriptConten:StringArr = [];
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

  const { descriptor } = parseSFC(content, {
    sourceMap: false,
  });
  console.log(descriptor.script)
   
}
