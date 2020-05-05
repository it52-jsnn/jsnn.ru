const md2json = require('markdown-to-json');
const fs = require('fs');
const path = require('path');

const eventsFolder = path.resolve(__dirname, '../src/events');
const fileNames = fs.readdirSync(eventsFolder).map(fName => `${eventsFolder}/${fName}`);

const getEventsList = () => JSON.parse(md2json.parse(fileNames, {}));

const getSpeechesByTags = () => Object.values(getEventsList()).reduce((tagsList, event) => {

  event.speeches.forEach(speech => speech.tags.forEach(tag => {

    const extendedSpeech = {
      ...speech,
      eventId: event.id,
      eventTitle: event.title,
      eventUrl: `/events/${event.id}/`
    };

    if (tagsList[tag]) {
      tagsList[tag].speeches.push(extendedSpeech);
    } else {
      tagsList[tag] = {
        name: tag,
        speeches: [extendedSpeech]
      };
    }

  }));

  return tagsList;

}, {});

module.exports = { getEventsList, getSpeechesByTags };
