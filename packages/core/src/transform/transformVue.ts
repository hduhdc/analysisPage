// import MagicString from "magic-string";

import { parse, transform } from "@vue/compiler-dom";
import { parse as parseSFC } from "@vue/compiler-sfc";
import { transformJsx } from "./transformJSX.js";

type StringArr = string[];

export function transformVue(content: string) {
  const ast = parse(content, {
    comments: true,
  });

  const domComments: StringArr = [];
  let scriptComments: StringArr = [];
  transform(ast, {
    nodeTransforms: [
      (node) => {
        if (node.type === 3) {
          domComments.push(node.content);
        } else if (node.type === 2) {
          // console.log(node)
          // scriptComments.push(node.content);
        }
      },
    ],
  });
  // console.log('vueDom',domComments);
  // 解析script 部分
  const { descriptor } = parseSFC(content, {
    sourceMap: false,
  });
  if (descriptor.script && descriptor.script.content) {
    // console.log(descriptor.script.content)
    scriptComments = transformJsx(descriptor.script.content);
  }
  if (descriptor.scriptSetup?.content) {
    scriptComments = scriptComments.concat(
      transformJsx(descriptor.scriptSetup.content)
    );
  }
  return scriptComments.concat(domComments)
}
