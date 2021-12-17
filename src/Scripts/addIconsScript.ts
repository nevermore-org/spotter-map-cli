import { Canvas, createCanvas, Image, loadImage, NodeCanvasRenderingContext2D } from "canvas";
import prompt, { Schema } from "prompt";
import FullMapInfo from "../Model/FullMapInfo";
import { MapDimensions } from "../Model/MapDimensions";
import ScriptDefault from "../Model/ScriptDefault";
import PROMPT_SCHEMAS from "./enum/PROMPT_SCHEMAS";
import { mapDimensionsFromPoints, translatePointArray } from "../Util/mapUtil";
import { MAP_DETAILS } from "../API/enum/MAP_DETAILS";
import fs from 'fs';
import ANSI from "./enum/ANSI";


export default class addIconsScript implements ScriptDefault {
    context: NodeCanvasRenderingContext2D;
    canvas: Canvas;
    mapDimensions: MapDimensions;
    fontStyles: Record<string, string> = {
        'default': 'italic 25px Candara',
        'sectorName': 'italic 25px Candara'
    }
    wantLabels: boolean = false; // default; user can decide in prompt

    constructor () {
        // just some default values, will be overriden later
        this.canvas = createCanvas(0, 0);
        this.context = this.canvas.getContext('2d');
        this.mapDimensions = {upper_left: {x: 0, y: 0}, lower_right: {x: 0, y: 0}, width: 0, height: 0};
    }

    /**
     * Pretty simple - first it translates the coordinates into the map-specific system, then just  draws the image (centered on point)
     * @param point
     */
    private drawIconOnMap (
        pointArray: number[],
        image: Image
        ){
        const point = translatePointArray(pointArray, this.mapDimensions);

        // we want the image to be centered on the point
        this.context.drawImage(image, point.x - image.width/2, point.y - image.height/2);
    }

    private drawStrokedText(text: string, pointArr: number[], fontStyle: string = 'default') {
        const point = translatePointArray(pointArr, this.mapDimensions);

        this.context.font = this.fontStyles[fontStyle];
        this.context.textAlign = 'center';
        this.context.strokeStyle = 'black';
        this.context.lineWidth = 4;
        this.context.strokeText(text, point.x, point.y);
        this.context.fillStyle = 'white'; // #DBB975
        this.context.fillText(text, point.x, point.y);
    }

    private addIconsToMap = async (map: FullMapInfo) => {
        const inputMapPath =  `./output/bmaps/bmap_${map.id}.jpg`;
        const outputPath =  `./output/fmaps/${this.wantLabels ? 'with_labels/fmap+labels_': 'icons_only/fmap_'}${map.id}.jpg`;
        
        // check the mapDimensions object first -> then create canvas of the same size as the base map
        this.mapDimensions = mapDimensionsFromPoints(map.continent_rect);
    
        this.canvas = createCanvas(this.mapDimensions.width, this.mapDimensions.height);
        this.context = this.canvas.getContext('2d');
    
        // preload all images
        const icons: Record<string, Image> = {
            'landmark' : await loadImage('./public/poi.png'),
            'waypoint': await loadImage('./public/waypoint.png'),
            'vista': await loadImage('./public/vista.png'),
            'heart': await loadImage('./public/heart.png'),
            'hp': await loadImage('./public/hp.png'),
        }

        // TODO: Refactor this to be more DRY    
        // first draws base map as background, then adds all the icons
        loadImage(inputMapPath).then((baseMap: Image) => {
            this.context.drawImage(baseMap, 0, 0);

            // pois + vistas + waypoints
            for (const key in map.points_of_interest){
                const landmark = map.points_of_interest[key];
                const iconImage = icons[landmark.type];
    
                if (iconImage){
                    this.drawIconOnMap(landmark.coord, icons[landmark.type]);
                }
                else {
                    // it is the 'unlock' type -> should have the url for image listed
                }
            }
    
            // hero points
            for (const challenge of map.skill_challenges){         
                this.drawIconOnMap(challenge.coord, icons['hp']);
            }
    
            // renown hearts
            for (const key in map.tasks){
                this.drawIconOnMap(map.tasks[key].coord, icons['heart']);
            }

            if (this.wantLabels) {
                // draw all sector names
                for (const key in map.sectors){
                    const sector = map.sectors[key];

                    this.drawStrokedText(sector.name, sector.coord, 'sectorName');
                }
            }
    
            const buffer = this.canvas.toBuffer('image/jpeg');
            fs.writeFileSync(outputPath, buffer);
        })
    
        console.log(`Sucessfully created full map ${this.wantLabels ? '(with labels)': '(icons only)'} of ${map.name}...`);
    }


    public runScript = async (optarg?: string | undefined) => {
        prompt.start();
        prompt.message = "";

        // base Schema is map, then its extended with wantLabels
        const schema: Schema = PROMPT_SCHEMAS['MAP'];
        
        schema.properties['wantLabels'] = {
            description: `${ANSI.CYAN}Do you want sector labels? ${ANSI.BRIGHT_BLACK}(y/n)${ANSI.RESET}`,
            type: 'string',
            required: false
        }
    
        prompt.get(schema, async (err, answer) => {
            if (err){ return };
            const mapID = <number> answer.mapID;
            const map = MAP_DETAILS[mapID];
            this.wantLabels = ['y', 'yes', 'aye'].includes(<string> answer.wantLabels);
            
            if (!map){
                console.error('There are unfortunately no data for this map in GW2 API.');
                return;
            }

            await this.addIconsToMap(map);
        })
        
    };
}