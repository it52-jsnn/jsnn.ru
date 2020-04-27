const selectors = require('selectors.js');

const getEventData = async (eventId, page = global.page) => {
  const { element, title, date, address, tag } = selectors.mainPage.main.eventItem;

  await page.waitForSelector(element(eventId));

  return page.evaluate((titleSelector, dateSelector, addressSelector, tagSelector) => {

    const title = document.querySelector(titleSelector).innerText;
    const date = document.querySelector(dateSelector).innerText;
    const address = document.querySelector(addressSelector).innerText.slice(2); // To get rid of " / " decoration
    const eventTags = [...document.querySelectorAll(tagSelector)].map(e => e.innerText.slice(1)); // To get rid of "#" in tags

    return {
      title,
      date,
      address,
      eventTags
    };

  }, title(eventId), date(eventId), address(eventId), tag(eventId));
};

module.exports = {
  getEventData
};
