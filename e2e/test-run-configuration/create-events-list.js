const md2json = require('markdown-to-json');
const fs = require('fs');
const path = require('path');

const eventsFolder = path.resolve(__dirname, '../../src/events');
const fileNames = fs.readdirSync(eventsFolder).map(fName => `${eventsFolder}/${fName}`);

const parsedData = JSON.parse(md2json.parse(fileNames, {}));

global.EVENTS_LIST = parsedData;

fs.writeFile(path.resolve(__dirname, 'events-list.js'), `
'This file is for debugging purpose only! You can access EVENTS_LIST from the global.'

const EVENTS_LIST = ${ JSON.stringify(parsedData, null, 2) }
`);
