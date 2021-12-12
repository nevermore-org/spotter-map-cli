export interface ScriptInfo {
    name: string;
    optarg?: string;
    runFunction: (optarg?: string) => Promise<void>;
}