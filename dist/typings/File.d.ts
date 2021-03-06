import { PluginChain } from './PluginChain';
import { ModuleCollection } from "./ModuleCollection";
import { FileAnalysis } from "./FileAnalysis";
import { WorkFlowContext } from "./WorkflowContext";
import { IPathInformation } from "./PathMaster";
export declare class File {
    context: WorkFlowContext;
    info: IPathInformation;
    isFuseBoxBundle: boolean;
    alternativeContent: string;
    notFound: boolean;
    params: Map<string, string>;
    absPath: string;
    contents: string;
    isLoaded: boolean;
    isNodeModuleEntry: boolean;
    collection: ModuleCollection;
    headerContent: string[];
    isTypeScript: boolean;
    sourceMap: any;
    analysis: FileAnalysis;
    resolving: Promise<any>[];
    constructor(context: WorkFlowContext, info: IPathInformation);
    getCrossPlatormPath(): string;
    createChain(name: string, file: File, opts?: any): PluginChain;
    asyncResolve(promise: Promise<any>): void;
    tryPlugins(_ast?: any): void;
    addHeaderContent(str: string): void;
    loadContents(): void;
    makeAnalysis(): void;
    consume(): void;
    private handleTypescript();
    private chainPlugins(start, chain);
}
