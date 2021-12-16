export default interface ScriptDefault {
    runScript: (optarg?: string) => Promise<void>;
}