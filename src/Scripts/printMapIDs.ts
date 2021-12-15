import MapInfo from "../Model/MapInfo";
import RegionInfo from "../Model/RegionInfo";
import ANSI from "../Util/enum/ANSI";
import { groupBy } from "../Util/util";
import TYRIA_MAPS from "./enum/TYRIA_MAPS";

export async function runPrintMapIds () {
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