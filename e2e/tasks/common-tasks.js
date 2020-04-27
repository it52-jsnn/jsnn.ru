const { pageUrls } = require('constants.js');

const gotoMainPage = (page = global.page) => page.goto(pageUrls.main);
const gotoAboutPage = (page = global.page) => page.goto(pageUrls.about);
const gotoEventPage = (eventId, page = global.page) => page.goto(pageUrls.event(eventId));

module.exports = {
  gotoMainPage,
  gotoAboutPage,
  gotoEventPage
};
