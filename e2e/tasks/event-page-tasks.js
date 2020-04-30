const selectors = require('selectors.js');

const { navigation, placeAndTimeTab } = selectors.eventPage.main;
const { element: speechWrapper, title, speaker, description } = selectors.eventPage.main.agendaTab.speech;

const getSpeechData = async (speech, page = global.page) => {
  const speechHandle = await findSpeechByTitle(speech.title, page);

  return speechHandle.evaluate((element, [titleSelector, speakerNameSelector, speakerCompanySelector, descriptionSelector]) => {

    const allNames = [...element.querySelectorAll(speakerNameSelector)].map(e => e.innerText);
    const allCompanies = [...element.querySelectorAll(speakerCompanySelector)].map(e => e.innerText);

    const title = element.querySelector(titleSelector).innerText;
    const speakers = allNames.map((name, index) => [name, allCompanies[index]]);
    const descriptionElem = element.querySelector(descriptionSelector);
    const description = descriptionElem && descriptionElem.innerText;

    return {
      title,
      speakers,
      description
    };

  }, [title, speaker.name, speaker.company, description]);
};

const findSpeechByTitle = (targetValue, page = global.page) => page.evaluateHandle(([targetValue, titleSelector, speechWrapperSelector]) => {

  const targetTitleElement = [...document.querySelectorAll(titleSelector)].find(elem => elem.innerText === targetValue);
  return targetTitleElement.closest(speechWrapperSelector);

}, [targetValue, title, speechWrapper]);

const getTimeAndPlaceData = (page = global.page) => page.evaluate(([dateSelector, timeSelector, addressSelector]) => {

  const date = document.querySelector(dateSelector).innerText;
  const time = document.querySelector(timeSelector).innerText;
  const address = document.querySelector(addressSelector).innerText;

  return {
    date,
    time,
    address
  };

}, [placeAndTimeTab.date, placeAndTimeTab.time, placeAndTimeTab.address]);

const clickNavLink = async (linkName, page = global.page) => {

  await page.evaluate((linkName, [linkSelector]) => {
    const allLinks = document.querySelectorAll(linkSelector);

    switch (linkName) {
      case 'registration':
        allLinks[2].click();
        break;

      case 'place and time':
        allLinks[1].click();
        break;

      case 'agenda':
      default:
        allLinks[0].click();
        break;
    }

  }, linkName, [navigation.link]);


  await page.waitForNavigation();

};

module.exports = {
  getSpeechData,
  getTimeAndPlaceData,
  clickNavLink
};
