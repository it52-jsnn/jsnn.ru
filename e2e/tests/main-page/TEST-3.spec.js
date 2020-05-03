const { gotoMainPage, clickAndWaitForNavigation, checkLocation } = require('all-tasks.js');
const { mainPage: mainPageSelectors } = require('selectors.js');
const { pageUrls } = require('constants.js');

describe('Main page event titles', () => {

  test('User should be redirected to event page by clicking on event title', async () => {

    for (const eventId of Object.keys(EVENTS_LIST)) {

      await gotoMainPage();

      const titleHandle = await page.$(mainPageSelectors.main.eventItem.title(eventId));

      const eventIdFromTitle = await titleHandle.evaluate(e => e.innerText.slice('JSNN #'.length));

      await clickAndWaitForNavigation(titleHandle);

      await checkLocation(pageUrls.event(eventIdFromTitle));

    }

  });

});
