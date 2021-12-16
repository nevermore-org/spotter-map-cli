import http from 'http';
import ANSI from './Util/enum/ANSI';
import sharp from 'sharp';
import prompt, { message, Schema } from 'prompt';
import { SCRIPTS } from './Scripts/enum/SCRIPTS';
import { getTyrianMapsData } from './API/GW2API';
import addIconsScript from './Scripts/addIconsScript';

// http.createServer(() => {
// }).listen("8080");

//cropMap('Queensdale');


async function main() {
    console.log(`\n${ANSI.BRIGHT_GREEN}Spotter Map Tool${ANSI.RESET}\n${'-'.repeat(16)}`);
    
    SCRIPTS.forEach((script, index) => {
        console.log(`[${ANSI.GREEN}${index + 1}${ANSI.RESET}] ${script.name}\n${ANSI.BRIGHT_BLACK}${script.description}${ANSI.RESET}`);
    })
    console.log('');

    prompt.start();
    prompt.message = "";

    const schema: Schema = {
        properties: {
            scriptIndex: {
                description: `${ANSI.CYAN}Script to run${ANSI.RESET}`,
                type: 'number',
                conform: function (scriptIndex) {
                    return scriptIndex !== 0 && scriptIndex - 1 < SCRIPTS.length;
                },
                message: `Invalid index. Please use a number between 1 and ${SCRIPTS.length}.`,
                required: true
            }
        }
    }

    prompt.get(schema, async function(err, result){
        if (err){ return };
        
        const scriptInfo = SCRIPTS[<number> result.scriptIndex - 1];

        await scriptInfo.script?.runScript();
    });
}

main();