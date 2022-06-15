/* eslint-disable no-console */
import { ICustomWorld } from '../support/custom-world';
import { Then } from '@cucumber/cucumber';
import { replace } from 'lodash';

// import { expect } from '@playwright/test';

Then(
  'The user should see the number of pages of the current tag',
  async function (this: ICustomWorld) {
    const page = this.page!;
    const tags = await page.$$(
      '#search > div.Search.u-wrapper > div > div > div.u-wrapper > div > div.Tab',
    );

    for (let i = 1; i <= tags.length; i++) {
      const selector = replace(
        '#search > div.Search.u-wrapper > div > div > div.u-wrapper > div > div:nth-child({})',
        '{}',
        `${i}`,
      );
      await page.locator(selector).click();
      const selectorText = await page.locator('.Tab.is-active >p').textContent();
      const numberOfPages = await page
        .locator('div.SearchTabs-content > div > nav > ul > li > button.page')
        .count();
      console.log(`The tag ${selectorText} have ${numberOfPages} pages`);
    }
  },
);
