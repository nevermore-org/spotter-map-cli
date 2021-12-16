import axios from "axios"
import FullMapInfo from "../Model/FullMapInfo";
import MapInfo from "../Model/MapInfo";
import RegionInfo from "../Model/RegionInfo";
import { chunkify } from "../Util/util";
import { GW_API_URL } from "./enum/GW_API_URL"
import stringify from "json-stringify-pretty-compact";
import TYRIA_MAPS from "./enum/TYRIA_MAPS";


export const getMapInfo = async (mapID: number) => {
    const mapResponse = await axios.get(`${GW_API_URL.MAPS}/${mapID}`);
    return <MapInfo> mapResponse.data;
}

/**
 * Gets a list of all the mapIds, then gets all the Tyrian mapInfos in chunks
 * Its not used in the main script itself, since I've cached all the (tyrian) maps inside TYRIA_MAPS
 */
export const getAllTyrianMaps = async () => {
    const mapsResponse = await axios.get(`${GW_API_URL.MAPS}`);
    const allMapsIds: number[] = mapsResponse.data;

    // we need to chunkify the requests so the GW_API can happily chomp on it
    // there are 859 maps (as of Dec 2021), X-Rate-Limit-Limit is 600 requests per minute
    // the ?ids= also has its own limit of 200 ids per request
    const chunkedMaps = chunkify(allMapsIds, 200);

    const mapInfos = await Promise.all(chunkedMaps.map(async mapsChunk => {
        const chunkResponse = await axios.get(`${GW_API_URL.MAPS}?ids=${mapsChunk}`);
        const maps: MapInfo[] = chunkResponse.data;
        
        // Tyria's cont_id === 1; 'Public' discards stuff like instances; if a map has different def_floor than 1, it is a special map
        return maps.filter(map => map.continent_id === 1 && map.type === 'Public' && map.default_floor === 1);    
    }));

    return mapInfos.flat();
}

export const getTyrianMapsData = async () => {
    const regionsResponse = await axios.get(`${GW_API_URL.REGIONS}`);
    const regions: RegionInfo[] = regionsResponse.data;

    // for (const region of regions){
    //     const jsonObj: Record<string, FullMapInfo> = JSON.parse(stringify(region.maps));

    //     for (const key in jsonObj) {
    //         if (TYRIA_MAPS.find(map => map.id == jsonObj[key].id)){
    //             console.log(`${key}: ${stringify(jsonObj[key])},`);
    //         }
    //     }
    // }
    
    return regions;    
}