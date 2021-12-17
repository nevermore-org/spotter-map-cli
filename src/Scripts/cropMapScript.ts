import prompt, { Schema } from "prompt";
import sharp from "sharp";
import MapInfo from "../Model/MapInfo";
import ScriptDefault from "../Model/ScriptDefault";
import PROMPT_SCHEMAS from "./enum/PROMPT_SCHEMAS";
import { mapDimensionsFromPoints } from "../Util/mapUtil";
import TYRIA_MAPS from "../API/enum/TYRIA_MAPS";
const gm = require('gm').subClass({imageMagick: true});

export default class cropMapScript implements ScriptDefault {
    sharpInstance: sharp.Sharp;
    inputPath: string = './tyria.jpg';

    constructor() {
        // load the tyria map
        this.sharpInstance = sharp(this.inputPath, {limitInputPixels: false, sequentialRead: true});
    }

    /**
     * Crops a single map from the Tyria continent
     * Input sharp instance should be of the tyria.jpg at the root of the project
     * Output is stored inside the ./src/Data/bmaps folder
     */
    private async cropSingleMap(map: MapInfo) {
        console.log(`Creating the base map of ${map.name}...`);
        const mapDims = mapDimensionsFromPoints(map.continent_rect);
        
        // could've been done with node-canvas as well, but it doesn't support as big an image as we need
        this.sharpInstance
            .extract({ left: mapDims.upper_left.x, top: mapDims.upper_left.y, width: mapDims.width, height: mapDims.height })
            .toFile(`./output/bmaps/bmap_${map.id}.jpg`, function (err) {
                if (err) console.log(err); else {console.log('Success!')
            }
        });
    }    
    
    public async runScript() {
        prompt.start();
        prompt.message = "";

        const schema: Schema = PROMPT_SCHEMAS['MAP'];

        prompt.get(schema, async (err, result) => {
            if (err){ return };
            const mapID = <number> result.mapID;
            
            const mapInfo = <MapInfo> TYRIA_MAPS.find( map => map.id === mapID);
            await this.cropSingleMap(mapInfo);
        })
    }
}