import imageSize from "image-size";
import prompt, { Schema } from "prompt";
import { getTyrianMapsData } from "../API/GW2API";
import PROMPT_SCHEMAS from "../Util/enum/PROMPT_SCHEMAS";
import { MAP_DETAILS } from "./enum/MAP_DETAILS";
import TYRIA_MAPS from "./enum/TYRIA_MAPS";


function addStuffToMap (mapName: string) {
    const fileName =  `./src/Data/bmap_${mapName}.jpg`;
    const dimensions = imageSize(fileName);
    console.log(dimensions.width, dimensions.height);

}


export async function runAddScript () {
    prompt.start();
    prompt.message = "";

    const schema: Schema = PROMPT_SCHEMAS['MAP'];

    prompt.get(schema, async function(err, answer){
        if (err){ return };
        //add all icons here
        const mapID = <number> answer.mapID;
        // addStuffToMap(<string> answer.mapID);

        const mapDetails = MAP_DETAILS[mapID];

        console.log(mapDetails.points_of_interest);

    })

    
}