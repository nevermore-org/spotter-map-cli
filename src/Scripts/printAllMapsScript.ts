import ScriptDefault from "../Model/ScriptDefault";
import ANSI from "./enum/ANSI";
import { groupBy } from "../Util/util";
import TYRIA_MAPS from "../API/enum/TYRIA_MAPS";

export default class printAllMapsScript implements ScriptDefault {
    
    public async runScript () {
        console.log(`${ANSI.BLUE}Region\n${ANSI.YELLOW}ID${ANSI.RESET} - Name\n-------------`);
    
        const regions = groupBy(TYRIA_MAPS, ['region_name']);
    
        for (const key in regions){
            console.log(`${ANSI.BLUE}${key}${ANSI.RESET}`);
            for (const map of regions[key]){
                console.log(`${ANSI.YELLOW}${map.id}${ANSI.RESET} - ${map.name}`);
            }
            console.log()
        }
    }
}