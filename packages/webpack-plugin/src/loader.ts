import {
  // parseSFC,
  isJsTypeFile,
  normalizePath,
  analysizeComments,
} from "code-comments-analysis-core";

const jsxParamList = ["isJsx", "isTsx", "lang.jsx", "lang.tsx"];

export default async function WebpackCodeCommentsLoader(content: string) {
  this.cacheable && this.cacheable(true);
  const filePath = normalizePath(this.resourcePath); // 当前文件的绝对路径
  let params = new URLSearchParams(this.resource);
  let result = [];
  // jsx 语法
  const isJSX =
    isJsTypeFile(filePath) ||
    (filePath.endsWith(".vue") &&
      jsxParamList.some((param) => params.get(param) !== null));
      
  if (isJSX) {
    result = await analysizeComments(content, "jsx");
  }

  // console.log('isJSX',isJSX)
  // vue jsx
  // const isJsxWithScript =
  //   filePath.endsWith(".vue") &&
  //   (params.get("lang") === "tsx" || params.get("lang") === "jsx");
  // if (isJsxWithScript) {
  //   const { descriptor } = parseSFC(content, {
  //     sourceMap: false,
  //   });
  //   // 处理 <script> 标签内容
  //   // 注意：.vue 允许同时存在 <script> 和 <script setup>
  //   const scripts = [
  //     descriptor.script?.content,
  //     descriptor.scriptSetup?.content,
  //   ];
  //   let comments = [];
  //   for (const script of scripts) {
  //     if (!script) continue;

  //     comments = comments.concat ( analysizeComments(script,'jsx'));
  //   }
  //   return comments;
  // }

  // vue
  const isVue =
    filePath.endsWith(".vue") &&
    params.get("type") !== "style" &&
    params.get("type") !== "script" &&
    params.get("raw") === null;
  if (isVue) {
    result = await analysizeComments(content, "vue");
  }
  // console.log('isVue',isVue)

  // svelte
  const isSvelte = filePath.endsWith(".svelte");
  if (isSvelte) {
    result = await analysizeComments(content, "svelte");
  }
  // console.log(result);
  if((process as any ).commentsValue ){
    (process as any ).commentsValue =(process as any ).commentsValue.concat(result);
  }else{
    (process as any ).commentsValue = result;
  }
 

  return content;
}
