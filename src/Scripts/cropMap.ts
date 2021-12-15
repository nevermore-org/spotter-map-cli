import { unlinkSync } from "fs";
import prompt, { Schema } from "prompt";
import sharp from "sharp";
import { Coordinates, MapDimensions } from "../Model/MapDimensions";
import MapInfo from "../Model/MapInfo";
import ANSI from "../Util/enum/ANSI";
import PROMPT_SCHEMAS from "../Util/enum/PROMPT_SCHEMAS";
import TYRIA_MAPS from "./enum/TYRIA_MAPS";


const pointToCoordinates = (pointArray: number[]) => {
    return <Coordinates> {x: pointArray[0], y: pointArray[1]};
}

const mapDimsFromPoints = (cornerPoints: number[][]) => {
    const upperLeft = pointToCoordinates(cornerPoints[0]);
    const lowerRight = pointToCoordinates(cornerPoints[1]);
    const width = lowerRight.x - upperLeft.x;
    const height = lowerRight.y - upperLeft.y;
    return <MapDimensions> {upper_left: upperLeft, lower_right: lowerRight, width: width, height: height};
}


/**
 * Crops a single map from the Tyria continent
 * Input sharp instance should be of the tyria.jpg at the root of the project
 * Output is stored inside the ./src/Data folder
 */
export async function cropSingleMap(map: MapInfo, tyriaSharpInstance: sharp.Sharp) {
    console.log(`Working on the map of ${map.name}...`);
    const mapDims = mapDimsFromPoints(map.continent_rect);
    
    tyriaSharpInstance
        .extract({ left: mapDims.upper_left.x, top: mapDims.upper_left.y, width: mapDims.width, height: mapDims.height })
        .toFile(`./src/Data/bmap_${map.id}.jpg`, function (err) {
            if (err) console.log(err); else {console.log('Success!')}
    });
}


// basically the controller
export async function runCropScript(mode?: string) {
    // load the tyria map
    const tyriaSharpInstance = sharp('./tyria.jpg', {limitInputPixels: false, sequentialRead: true});

    if (mode === 'single'){
        prompt.start();
        prompt.message = "";

        const schema: Schema = PROMPT_SCHEMAS['MAP'];

        prompt.get(schema, async function(err, result){
            if (err){ return };
            const mapID = <number> result.mapID;
            
            const mapInfo = <MapInfo> TYRIA_MAPS.find( map => map.id === mapID);
            await cropSingleMap(mapInfo, tyriaSharpInstance);
        })
    }
}