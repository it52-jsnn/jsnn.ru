const { pageUrls } = require('constants.js');

const gotoMainPage = async (page = global.page) => {
  // WIP!
  await page.waitFor(30000);
  await page.goto(pageUrls.main);
};
const gotoAboutPage = (page = global.page) => page.goto(pageUrls.about);
const gotoEventPage = (eventId, page = global.page) => page.goto(pageUrls.event(eventId));

module.exports = {
  gotoMainPage,
  gotoAboutPage,
  gotoEventPage
};
