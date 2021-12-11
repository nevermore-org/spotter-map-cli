import http from 'http';
import ANSI from './Util/enum/ANSI';
import sharp from 'sharp';
import { cropMap } from './Scripts/cropMap';

// http.createServer(() => {
// }).listen("8080");

console.log(`---- ${ANSI.GREEN}Spotter Map Tool${ANSI.RESET} ----`);

cropMap('Queensdale');