import { ICustomWorld } from '../support/custom-world';
import { selector } from '../utils/elements_selector';
import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Then('A list of results should be displayed', async function (this: ICustomWorld) {
  const page = this.page!;
  const resultsList = await page.locator(selector.courseList).count();
  try {
    expect(resultsList).toBeGreaterThan(0);
  } catch (error) {
    throw new Error(`No results found\n${error}`);
  }
});
