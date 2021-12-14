import { ScriptInfo } from "../../Model/ScriptInfo";
import { runCropScript } from "../cropMap";

export const SCRIPTS: ScriptInfo[] = [
    {
        name: 'Crop Single Map',
        description: 'Crops/creates an .jpg image of a map specified by name',
        optarg: 'single',
        runFunction: runCropScript
    },
    // {
    //     name: 'Crop All Tyria Maps',
    //     optarg: 'all',
    //     runFunction: runCropScript
    // }
]