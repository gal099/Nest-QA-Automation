import { ICustomWorld } from '../support/custom-world';
import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Then('A list of post should be displayed', async function (this: ICustomWorld) {
  const page = this.page!;
  const resultsList = await page
    .locator('div > div > div:nth-child(2) > div > section > article')
    .count();
  // eslint-disable-next-line no-console
  console.log(resultsList);
  try {
    expect(resultsList).toBeGreaterThan(0);
  } catch (error) {
    throw new Error(`No post found\n${error}`);
  }
});
