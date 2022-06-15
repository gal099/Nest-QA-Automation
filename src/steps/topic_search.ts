import { ICustomWorld } from '../support/custom-world';
import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When('The user searchs a topic', async function (this: ICustomWorld) {
  const page = this.page!;
  const searchInput = page.locator('.NewSearch.NewSearch--noLogged > form > div > input');
  const searchButton = page.locator('.NewSearch-button > svg');
  await searchInput.fill('typescript');
  await searchButton.click();
  await page.waitForTimeout(3000);
});

Then('A list of results should be displayed', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.waitForTimeout(3000);
  const resultsList = await page.locator('.CourseList > article').count();
  try {
    expect(resultsList).toBeGreaterThan(0);
  } catch (error) {
    throw new Error(`No results found\n${error}`);
  }
});
