const { gotoEventPage, eventPageTasks } = require('all-tasks.js');
const { ruDateConverter } = require('../../../utils/filters');

describe('Event page should render speeches list based on data from .md files', () => {

  test('All speeches should be rendered on the event page and display Title, Description and Speakers', async () => {

    for (const event of Object.values(EVENTS_LIST)) {

      await gotoEventPage(event.id);

      for (const speech of event.speeches) {

        const { title, speakers, description } = await eventPageTasks.getSpeechData(speech);

        expectToBe(title, speech.title);
        expectToBe(description, speech.description || null); // description is not present in event 1

        const targetSpeakers = getTargetSpeakers(speech);

        targetSpeakers.forEach(([targetSpeakerName, targetSpeakerCompany], index) => {
          const [ speakerName, speakerCompany ] = speakers[index];

          expectToBe(speakerName, targetSpeakerName);
          expectToBe(speakerCompany, targetSpeakerCompany || null); // quite often company is not present
        });

      }

    };

  });

  test('The "Place and time" tab should display Date, Time and Place of event', async () => {

    for (const event of Object.values(EVENTS_LIST)) {

      await gotoEventPage(event.id);
      await eventPageTasks.clickNavLink('place and time');

      const { date, time, address } = await eventPageTasks.getTimeAndPlaceData();

      expectToBe(date, ruDateConverter(new Date(event.date)));
      expectToBe(time, event.time);
      expectToBe(address, event.address);

    };

  });

});

function expectToBe(a, b) {
  expect(normalize(a)).toBe(normalize(b));
}

function normalize(s) {
  return typeof s === 'string' ? s.replace(/\s/g, '').replace(/(\/)/g, '') : null;
}

function getTargetSpeakers(speech) {
  return speech.speakers
    ? speech.speakers.map(({ name, company }) => [name, company])
    : [[speech.speaker, speech.company]];
}
