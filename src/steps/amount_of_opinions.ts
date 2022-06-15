/* eslint-disable no-console */
import { ICustomWorld } from '../support/custom-world';
import { When, Then } from '@cucumber/cucumber';

When('The user enters to the first topic', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator('.CourseCard-content-title').first().click();
});

Then('The comments amount should be displayed', async function (this: ICustomWorld) {
  const page = this.page!;
  const topicName = await page.locator('.Hero-content-title').innerText();
  const opinionsAmount = await page.locator('p.CourseExtraInfo-content-opinions').innerText();
  console.log(`The "${topicName}" topic has ${opinionsAmount} opinions.`);
});
