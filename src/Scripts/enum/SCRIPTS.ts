import { ScriptInfo } from "../../Model/ScriptInfo";
import { runCropScript } from "../cropMap";

export const SCRIPTS: ScriptInfo[] = [
    {
        name: 'Crop Single Map',
        optarg: 'single',
        runFunction: runCropScript
    },
    {
        name: 'Crop All Tyria Maps',
        optarg: 'all',
        runFunction: runCropScript
    }
]