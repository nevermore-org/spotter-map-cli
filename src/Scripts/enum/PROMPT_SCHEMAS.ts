import { Schema } from "prompt";
import TYRIA_MAPS from "../../API/enum/TYRIA_MAPS";
import ANSI from "./ANSI";

const PROMPT_SCHEMAS: Record<string, Schema> = {
    'MAP': {
        properties: {
            mapID: {
                description: `${ANSI.CYAN}Which map do you want? ${ANSI.BRIGHT_BLACK}(e.g. 15)${ANSI.RESET}`,
                type: 'number',
                conform: function(mapID: number){
                    return TYRIA_MAPS.find(map => map.id === mapID) !== undefined;
                },
                message: `Invalid map id. For all map ids use the show all mapID - mapName scripts.`,
                required: true                 
            }
        }
    }
}

export default PROMPT_SCHEMAS;