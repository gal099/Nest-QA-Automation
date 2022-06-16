import { ICustomWorld } from '../support/custom-world';
import { selector } from '../utils/elements_selector';
import { Then } from '@cucumber/cucumber';
import { replace } from 'lodash';

Then(
  'The user should see the number of pages of the current tag',
  async function (this: ICustomWorld) {
    const page = this.page!;
    const tagsAmount = await page.$$(selector.searchTabs);

    for (let i = 1; i <= tagsAmount.length; i++) {
      const tag = replace(selector.tags, '{}', `${i}`);
      await page.locator(tag).click();
      const selectorText = await (await page.locator(selector.activeTag).innerText()).split(' ');
      const numberOfPages = await page.locator(selector.pages).count();
      // eslint-disable-next-line no-console
      console.log(`The tag ${selectorText[0]} have ${numberOfPages} pages`);
    }
  },
);
