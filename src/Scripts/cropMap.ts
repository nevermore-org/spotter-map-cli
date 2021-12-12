import prompt, { Schema } from "prompt";
import sharp from "sharp";
import { getMapInfo } from "../API/GW2API";
import { Coordinates, MapDimensions } from "../Model/MapDimensions";
import { GW_MAPS_IDS } from "./enum/GW_MAPS_IDS";


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
 * Input should be tyria.jpg at root of the project
 * Output is stored inside the ./src/Data folder
 */
export async function cropSingleMap(mapName: string, tyriaSharpInstance: sharp.Sharp) {
    const mapID = GW_MAPS_IDS[mapName];
    const mapInfo = await getMapInfo(mapID);
    const mapDims = mapDimsFromPoints(mapInfo.continent_rect);

    // might want to later move this up one layer
    tyriaSharpInstance
    .extract({ left: mapDims.upper_left.x, top: mapDims.upper_left.y, width: mapDims.width, height: mapDims.height })
    .toFile(`./src/Data/${mapName}_map.jpg`, function (err) {
        if (err) console.log(err); else {console.log('Success!')}
    });
}


// basically the controller
export async function runCropScript(mode?: string) {
    // load the tyria map
    const tyriaSharpInstance = sharp('./tyria.jpg', {limitInputPixels: false, sequentialRead: true});

    if (mode === 'single'){
        prompt.start();

        const schema: Schema = {
            properties: {
                mapName: {
                    description: 'Which map do you want? (e.g. Queensdale)',
                    type: 'string',
                    conform: function(mapName: string){
                        return GW_MAPS_IDS[mapName] !== undefined;
                    },
                    message: `Invalid map name.`,
                    required: true                 
                }
            }
        }

        prompt.get(schema, async function(err, result){
            const mapName = <string> result.mapName;

            console.log(`Creating the map of ${mapName}...`);
            await cropSingleMap(mapName, tyriaSharpInstance);
        })

    }
    else if (mode === 'all'){
        console.log('Creating all tyrian maps...');
        // TODO
    }
}