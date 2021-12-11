import axios from "axios"
import MapInfo from "../Model/MapInfo";
import { GW_API_URL } from "./enum/GW_API_URL"


export const getMapInfo = async (mapID: number) => {
    const mapResponse = await axios.get(`${GW_API_URL.MAPS}/${mapID}`);
    return <MapInfo> mapResponse.data;
}