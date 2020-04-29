const { gotoMainPage } = require('all-tasks.js');
const { mainPage: mainPageSelectors } = require('selectors.js');

beforeAll(() => gotoMainPage());

describe('User should be able to use event tags', () => {

  test('Tags should change color on hover', async () => {

    const allTags = await page.$$(mainPageSelectors.main.tag);

    for (const tag of allTags) {

      await tag.hover(); await page.waitFor(100); // due to transition on opacity

      const tagHasOpacity = await tag.evaluate(e => getComputedStyle(e).opacity !== '1');

      expect(tagHasOpacity).toBe(true);

    }

  });

});
