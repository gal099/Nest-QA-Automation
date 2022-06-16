import { ICustomWorld } from '../support/custom-world';
import { selector } from '../utils/elements_selector';
import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Then('A list of post should be displayed', async function (this: ICustomWorld) {
  const page = this.page!;
  const resultsList = await page.locator(selector.postList).count();
  try {
    expect(resultsList).toBeGreaterThan(0);
  } catch (error) {
    throw new Error(`No post found\n${error}`);
  }
});
