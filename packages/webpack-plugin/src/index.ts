// import {
//   CodeOptions,
//   RecordInfo,
//   fileURLToPath
// } from 'code-comments-analysis-core';
// import path, {dirname} from 'path';

// let compatibleDirname = '';

// if (typeof __dirname !== 'undefined') {
//   compatibleDirname = __dirname;
// } else {
//   compatibleDirname = dirname(fileURLToPath(import.meta.url));
// }

// let isFirstLoad = true;

// interface LoaderOptions extends CodeOptions {
//   record: RecordInfo,
// }

// const applyLoader = (options: LoaderOptions, compiler: any) => {
//   if (!isFirstLoad) {
//     return;
//   }
//   isFirstLoad = false;
//   // 适配 webpack 各个版本
//   const _compiler = compiler?.compiler || compiler;
//   const module = _compiler?.options?.module;
//   const rules = module?.rules || module?.loaders || [];
//   rules.push(
//     {
//       test: options?.match ?? /\.(vue|jsx|tsx|js|ts|mjs|mts)$/,
//       exclude: /node_modules/,
//       use: [
//         {
//           loader: path.resolve(compatibleDirname, `./loader.js`),
//         },
//       ],
//       ...(options.enforcePre === false ? {} : { enforce: 'pre' }),
//     },
//     {
//       ...(options?.injectTo
//         ? { resource: options?.injectTo }
//         : {
//             test: /\.(jsx|tsx|js|ts|mjs|mts)$/,
//             exclude: /node_modules/,
//           }),
//       use: [
//         {
//           loader: path.resolve(compatibleDirname, `./inject-loader.js`),
//           options,
//         },
//       ],
//       enforce: 'post',
//     }
//   );
// }

// interface Options extends CodeOptions {
//   close?: boolean;
//   time?: number;
// }

// class WebpackCodeCommentsAnalysisPlugin {
//   options: Options;

//   constructor(options?: Options) {
//     this.options = options || {};
//   }

//   apply(compiler) {
//     isFirstLoad = true;

//     if (this.options.close) {
//       return;
//     }

//     // 自定义 dev 环境判断
//     let isDev: boolean;
//     if (typeof this.options?.dev === 'function') {
//       isDev = this.options?.dev();
//     } else {
//       isDev = this.options?.dev;
//     }

//     if (isDev === false) {
//       return;
//     }

//     // 仅在开发环境下使用
//     if (
//       !isDev &&
//       compiler?.options?.mode !== 'development' &&
//       process.env.NODE_ENV !== 'development'
//     ) {
//       return;
//     }

//     if (compiler?.options?.cache?.type === 'filesystem') {
//       compiler.options.cache.version = `code-inspector-${Date.now()}`
//     }

//     const record: RecordInfo = {
//       port: 0,
//       entry: '',
//       nextJsEntry: '',
//       ssrEntry: '',
//     }
    
//     applyLoader({ ...this.options, record }, compiler);
//   }
// }
class WebpackCodeCommentsAnalysisPlugin{
  
}
export default WebpackCodeCommentsAnalysisPlugin;
