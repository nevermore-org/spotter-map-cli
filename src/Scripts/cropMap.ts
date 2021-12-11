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
export async function cropMap(mapName: string) {
    const mapID = GW_MAPS_IDS[mapName];
    const mapInfo = await getMapInfo(mapID);
    const mapDims = mapDimsFromPoints(mapInfo.continent_rect);

    // might want to later move this up one layer
    sharp('./tyria.jpg', {limitInputPixels: false, sequentialRead: true})
    .extract({ left: mapDims.upper_left.x, top: mapDims.upper_left.y, width: mapDims.width, height: mapDims.height })
    .toFile(`./src/Data/${mapName}_map.jpg`, function (err) {
        if (err) console.log(err); else {console.log('Success!')}
    });
}