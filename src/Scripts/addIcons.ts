import { createCanvas, Image, loadImage, NodeCanvasRenderingContext2D, registerFont } from "canvas";
import imageSize from "image-size";
import prompt, { Schema } from "prompt";
import { getTyrianMapsData } from "../API/GW2API";
import FullMapInfo, { SectorInfo } from "../Model/FullMapInfo";
import PROMPT_SCHEMAS from "../Util/enum/PROMPT_SCHEMAS";
import { MAP_DETAILS } from "./enum/MAP_DETAILS";
import TYRIA_MAPS from "./enum/TYRIA_MAPS";
import fs from 'fs';
import { Coordinates, MapDimensions } from "../Model/MapDimensions";
import { mapDimsFromPoints, pointToCoordinates } from "./cropMap";

registerFont('./public/Candara_Italic.ttf', {family: 'Candara'});

/**
 * Translates coordinates of a point from tyrian-specific (tyria.jpg) to map-specific
 * Could be generalised to be simply coordinates subtraction as that is all this is
 */
const translateCoordinates = (pointCoords: Coordinates, mapDims: MapDimensions) => {
    return <Coordinates> {x: pointCoords.x - mapDims.upper_left.x, y: pointCoords.y - mapDims.upper_left.y};
}

/**
 * Pretty simple - just gets the correct coordinates, then draws the specified icon
 */
function drawIconToMap (
    pointArray: number[],
    mapDims: MapDimensions, 
    context: NodeCanvasRenderingContext2D,
    iconImage: Image
    ){
    const point = pointToCoordinates(pointArray);
    const translatedPoint = translateCoordinates(point, mapDims);
    // we want the image to be centered on the point
    context.drawImage(iconImage, translatedPoint.x - iconImage.width/2, translatedPoint.y - iconImage.height/2);
}

function drawStrokedText(text: string, coords: Coordinates, context: NodeCanvasRenderingContext2D) {
    context.font = 'italic 25px Candara';
    context.textAlign = 'center';
    context.strokeStyle = 'black';
    context.lineWidth = 4;
    context.strokeText(text, coords.x, coords.y);
    context.fillStyle = 'white';
    context.fillText(text, coords.x, coords.y);
}


async function addStuffToMap (map: FullMapInfo) {
    const baseMapPath =  `./src/Data/bmaps/bmap_${map.id}.jpg`;
    const outputPath =  `./src/Data/fmaps/fmap_${map.id}.jpg`;
    
    // check the mapDimensions object first -> then create canvas of the same size as the base map
    const mapDims = mapDimsFromPoints(map.continent_rect);

    const canvas = createCanvas(mapDims.width, mapDims.height);
    const context = canvas.getContext('2d');

    // preload all images
    const icons: Record<string, Image> = {
        'landmark' : await loadImage('./public/poi.png'),
        'waypoint': await loadImage('./public/waypoint.png'),
        'vista': await loadImage('./public/vista.png'),
        'heart': await loadImage('./public/heart.png'),
        'hp': await loadImage('./public/hp.png'),
    }

    // first draws base map as background, then adds all the icons
    // TODO: Refactor this to be more DRY
    loadImage(baseMapPath).then(baseMap => {
        context.drawImage(baseMap, 0, 0);

        // pois + vistas + waypoints
        for (const key in map.points_of_interest){
            const landmark = map.points_of_interest[key];
            const iconImage = icons[landmark.type];

            if (iconImage){
                drawIconToMap(landmark.coord, mapDims, context, iconImage);
            }
        }

        // hero points
        for (const key in map.skill_challenges){
            const hp = map.skill_challenges[key];
            const iconImage = icons['hp'];
            drawIconToMap(hp.coord, mapDims, context, iconImage);
        }

        // renown hearts
        for (const key in map.tasks){
            const task = map.tasks[key];
            const iconImage = icons['heart'];
            drawIconToMap(task.coord, mapDims, context, iconImage);
        }
        
        // draw all sector names
        for (const key in map.sectors){
            const sector = map.sectors[key];

            // console.log(sector.name, sector.coord);

            const point = pointToCoordinates(sector.coord);
            const translatedPoint = translateCoordinates(point, mapDims);
        
            drawStrokedText(sector.name, translatedPoint, context);
        }


        const buffer = canvas.toBuffer('image/jpeg');
        fs.writeFileSync(outputPath, buffer);
    })

    console.log(`Sucessfully created the f(ull)map for ${map.name}...`);
}


export async function runAddScript () {
    prompt.start();
    prompt.message = "";

    const schema: Schema = PROMPT_SCHEMAS['MAP'];

    prompt.get(schema, async function(err, answer){
        if (err){ return };
        const mapID = <number> answer.mapID;
        const mapDetails = MAP_DETAILS[mapID];

        await addStuffToMap(mapDetails);
    })

    
}