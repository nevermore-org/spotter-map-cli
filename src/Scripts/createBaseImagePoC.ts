import { Canvas, createCanvas, loadImage, NodeCanvasRenderingContext2D } from "canvas";
import { GW_API_URL } from "../API/enum/GW_API_URL";
import TYRIA_MAPS from "../API/enum/TYRIA_MAPS";
import MapInfo from "../Model/MapInfo";
import ScriptDefault from "../Model/ScriptDefault";
import fs from 'fs';
import { mapDimensionsFromPoints } from "../Util/mapUtil";
import { MapDimensions } from "../Model/MapDimensions";

export default class createBaseImagePoC implements ScriptDefault {
    mapID: number = 15;
    mapInfo: MapInfo;
    mapDims: MapDimensions;
    canvas: Canvas;
    context: NodeCanvasRenderingContext2D;
    tileSize = 256;

    constructor () {
        this.mapInfo = <MapInfo> TYRIA_MAPS.find( map => map.id === this.mapID);
        this.mapDims = mapDimensionsFromPoints(this.mapInfo.continent_rect);
        this.canvas = createCanvas(this.mapDims.width, this.mapDims.height);
        this.context = this.canvas.getContext('2d');

    }

    private getTile = async (x: number, y: number) => {
        console.log(`Getting the tile with coors: X: ${x} Y: ${y}`);
        return loadImage(`${GW_API_URL.TILES}/${x}/${y}.jpg`);
    }


    private createBmap = async () => {
        // relative up-left tile x
        const relULTileX = Math.floor(this.mapDims.upper_left.x / this.tileSize);
        const relULTileY = Math.floor(this.mapDims.upper_left.y / this.tileSize);

        // first tile that collides with the map-rect ^^^

        // ACR == horizontal
        const tileCountACR = Math.floor(this.mapDims.width / this.tileSize);
        const tileCountVERT = Math.floor(this.mapDims.height / this.tileSize);

        for (let offsetX = 0; offsetX < tileCountACR; offsetX++){
            for (let offsetY = 0; offsetY < tileCountVERT; offsetY++){
                const tile = await this.getTile(relULTileX + offsetX, relULTileY + offsetY);
                this.context.drawImage(tile, offsetX * this.tileSize, offsetY * this.tileSize);
            }
        }

        const buffer = this.canvas.toBuffer('image/jpeg');
        fs.writeFileSync(`./output/tiles/${this.mapID}.jpg`, buffer); // ${offsetX + tileCountACR * offsetY}


    }



    public async runScript() {
        await this.createBmap();
    }

}