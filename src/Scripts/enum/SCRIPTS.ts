import { ScriptInfo } from "../../Model/ScriptInfo";
import addIconsScript from "../addIconsScript";
import createBaseImagePoC from "../createBaseImagePoC";
import cropMapScript from "../cropMapScript";
import printAllMapsScript from "../printAllMapsScript";

export const SCRIPTS: ScriptInfo[] = [
    {
        name: 'Show all mapIDs',
        description: 'Prints out a list of all Tyrian maps as ID-Name pairs.',
        script: new printAllMapsScript()
    },
    {
        name: 'Crop Single Map',
        description: 'Crops/creates an .jpg image of a map specified by ID',
        script: new cropMapScript()
    },
    // {
    //     name: 'Crop All Tyria Maps',
    //     optarg: 'all',
    //     runFunction: runCropScript
    // }
    {
        name: 'Add icons to a given map',
        description: 'Map must have its bmap_<mapID> file in ./output/bmaps.',
        script: new addIconsScript()
    },
    {
        name: 'Create bmap from tiles PoC',
        description: 'Imagine vivid description here: -> _ <-',
        script: new createBaseImagePoC()
    }
]