export interface ScriptInfo {
    name: string;
    description: string;
    optarg?: string;
    runFunction: (optarg?: string) => Promise<void>;
}