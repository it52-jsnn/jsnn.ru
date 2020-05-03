const { globalTimeouts, pageUrls } = require('constants.js');

const gotoMainPage = (page = global.page) => page.goto(pageUrls.main, { waitUntil: 'domcontentloaded'});
const gotoAboutPage = (page = global.page) => page.goto(pageUrls.about, { waitUntil: 'domcontentloaded'});
const gotoEventPage = (eventId, page = global.page) => page.goto(pageUrls.event(eventId), { waitUntil: 'domcontentloaded'});

const click = async (selectorOrHandle, page = global.page) => {
  const handle = typeof selectorOrHandle === 'string' ? await page.waitForSelector(selectorOrHandle) : selectorOrHandle;
  await handle.click();
};

const clickAndWaitForNavigation = async (selectorOrHandle, page = global.page) => {
  await click(selectorOrHandle, page);
  await page.waitForNavigation();
};

const checkLocation = (targetHref, page = global.page) => page.waitForFunction(tHref => {

  return location.href === tHref;

}, { timeout: globalTimeouts.checkValue }, targetHref);

module.exports = {
  gotoMainPage,
  gotoAboutPage,
  gotoEventPage,

  click,
  clickAndWaitForNavigation,

  checkLocation
};
