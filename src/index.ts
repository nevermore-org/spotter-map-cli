import http from 'http';
import ANSI from './Util/enum/ANSI';
import sharp from 'sharp';
import prompt, { message, Schema } from 'prompt';
import { SCRIPTS } from './Scripts/enum/SCRIPTS';

// http.createServer(() => {
// }).listen("8080");

//cropMap('Queensdale');

async function main() {
    console.log(`\n${ANSI.BLUE}Spotter Map Tool${ANSI.RESET}\n${'-'.repeat(16)}`);
    
    SCRIPTS.forEach((script, index) => {
        console.log(`[${ANSI.GREEN}${index + 1}${ANSI.RESET}] ${script.name}`);
    })

    prompt.start();

    const schema: Schema = {
        properties: {
            scriptIndex: {
                description: 'Script to run',
                type: 'number',
                conform: function (scriptIndex) {
                    return scriptIndex !== 0 && scriptIndex - 1 < SCRIPTS.length;
                },
                message: `Invalid index. Please use a number between 1 and ${SCRIPTS.length}.`,
                required: true
            }
        }
    }

    prompt.get(schema, function(err, result){
        if (!err){
            const scriptInfo = SCRIPTS[<number> result.scriptIndex - 1];
            scriptInfo.runFunction(scriptInfo.optarg);
        }
    });
}

main();