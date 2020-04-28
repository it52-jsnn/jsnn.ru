const { gotoMainPage, mainPageTasks } = require('all-tasks.js');
// const { ruDateConverter } = require('../../../utils/filters');

beforeAll(() => gotoMainPage());

describe('Main page should render event list based on data from .md files', () => {

  test('All events should be rendered on the main page and display Title, Date, Adress and Tags', async () => {

    // for (const event of Object.values(EVENTS_LIST)) {

    //   const { title, date, address, eventTags } = await mainPageTasks.getEventData(event.id);

    //   expect(title).toBe(event.title);
    //   expect(date).toBe(ruDateConverter(new Date(event.date)));
    //   expect(address).toBe(event.address);

    //   const allTagsAreDisplayed = event.eventTags.every(requiredTag => eventTags.includes(requiredTag));
    //   expect(allTagsAreDisplayed).toBe(true);

    // };

  });

});
