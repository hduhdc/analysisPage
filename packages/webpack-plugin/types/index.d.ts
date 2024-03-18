import { CodeOptions } from "code-comments-analysis-core";
interface Options extends CodeOptions {
    close?: boolean;
    time?: number;
    callbackComments?: (arg: Array<string>) => {};
}
declare class WebpackCodeCommentsAnalysisPlugin {
    options: Options;
    constructor(options?: Options);
    apply(compiler: any): void;
}
export default WebpackCodeCommentsAnalysisPlugin;
