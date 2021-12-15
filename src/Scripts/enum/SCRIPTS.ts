import { ScriptInfo } from "../../Model/ScriptInfo";
import { runAddScript } from "../addIcons";
import { runCropScript } from "../cropMap";
import { runPrintMapIds } from "../printMapIDs";

export const SCRIPTS: ScriptInfo[] = [
    {
        name: 'Show all mapIDs',
        description: 'Prints out a list of all Tyrian maps as ID-Name pairs.',
        runFunction: runPrintMapIds
    },
    {
        name: 'Crop Single Map',
        description: 'Crops/creates an .jpg image of a map specified by ID',
        optarg: 'single',
        runFunction: runCropScript
    },
    // {
    //     name: 'Crop All Tyria Maps',
    //     optarg: 'all',
    //     runFunction: runCropScript
    // }
    {
        name: 'Add icons to a given map',
        description: 'Map must have its bmap_<mapID> file in ./src/Data.',
        runFunction: runAddScript
    }
]