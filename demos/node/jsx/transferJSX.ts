import vueJsxPlugin from '@vue/babel-plugin-jsx';
// @ts-ignore
import { parse, traverse } from '@babel/core';
// @ts-ignore
import tsPlugin from '@babel/plugin-transform-typescript';
// @ts-ignore
import importMetaPlugin from '@babel/plugin-syntax-import-meta';
// @ts-ignore
import proposalDecorators from '@babel/plugin-proposal-decorators';

 
export function transformJsx(content: string) {

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
      console.log('jsx',node)
      // const nodeName = node?.openingElement?.name?.name || '';
      // const attributes = node?.openingElement?.attributes || [];
      
    },
  });

  
}
 
 

