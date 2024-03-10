import vueJsxPlugin from '@vue/babel-plugin-jsx';
// @ts-ignore
import { parse, traverse } from '@babel/core';
// @ts-ignore
import tsPlugin from '@babel/plugin-transform-typescript';
// @ts-ignore
import importMetaPlugin from '@babel/plugin-syntax-import-meta';
// @ts-ignore
import proposalDecorators from '@babel/plugin-proposal-decorators';

import { StringArr ,jsxComments} from "./type";

export function transformJsx(content: string) {
  const comments: StringArr = [];
  console.log(11212)
  try{
    const ast = parse(content, {
      babelrc: false,
      comments: true,
      configFile: false,
      plugins: [
        importMetaPlugin,
        [vueJsxPlugin, {}],
        [tsPlugin, { isTSX: true, allowExtensions: true }],
        [proposalDecorators, { legacy: true }],
      ],
    });
  
    traverse(ast, {
      enter({ node }: any) {
         if(node.trailingComments){
          node.trailingComments.forEach((content:jsxComments) => {
            if(content.value){
              comments.push(content.value);
            }
          });
          
         }
        
      },
    });
  }catch(err){
    console.log(err)
  }
 
  // console.log('jsx',comments)
  return comments;

  
}
 
 

