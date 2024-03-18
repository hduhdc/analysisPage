import { CodeOptions, fileURLToPath } from "code-comments-analysis-core";
import path, { dirname } from "path";

let compatibleDirname = "";

if (typeof __dirname !== "undefined") {
  compatibleDirname = __dirname;
} else {
  compatibleDirname = dirname(fileURLToPath(import.meta.url));
}

let isFirstLoad = true;

interface LoaderOptions extends CodeOptions {
  enforcePre?: boolean | null | undefined;
}

const applyLoader = (options: LoaderOptions, compiler: any) => {
  if (!isFirstLoad) {
    return;
  }
  isFirstLoad = false;
  // 适配 webpack 各个版本
  const _compiler = compiler?.compiler || compiler;
  const module = _compiler?.options?.module;
  const rules = module?.rules || module?.loaders || [];

  rules.push({
    test: options?.match ?? /\.(vue|jsx|tsx|js|ts|mjs|mts)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: path.resolve(compatibleDirname, `./loader.js`),
      },
    ],
    ...(options.enforcePre === false ? {} : { enforce: "pre" }),
  });
};

interface Options extends CodeOptions {
  close?: boolean;
  time?: number;
  callbackComments?: (arg: Array<string>) => {};
}

class WebpackCodeCommentsAnalysisPlugin {
  options: Options;

  constructor(options?: Options) {
    this.options = options || {};
  }

  apply(compiler) {
  
    (process as any ).commentsValue = [];
    isFirstLoad = true;

    if (this.options.close) {
      return;
    }

    // 自定义 dev 环境判断
    let isDev: boolean;
    if (typeof this.options?.dev === "function") {
      isDev = this.options?.dev();
    } else {
      isDev = this.options?.dev;
    }

    if (isDev === false) {
      return;
    }

    // 仅在开发环境下使用
    if (
      !isDev &&
      compiler?.options?.mode !== "development" &&
      process.env.NODE_ENV !== "development"
    ) {
      return;
    }

    if (compiler?.options?.cache?.type === "filesystem") {
      compiler.options.cache.version = `code-comments-analysis-${Date.now()}`;
    }

    applyLoader({ ...(this.options || {}) }, compiler);

    // 注册 done 钩子，在构建完成时执行
    compiler.hooks.done.tap("webpack-code-comments-analysis-plugin", () => {
      if (this.options.callbackComments) {
        this.options.callbackComments((process as any).commentsValue);
        (process as any).commentsValue = [];
      }
    });


  }
}

export default WebpackCodeCommentsAnalysisPlugin;
