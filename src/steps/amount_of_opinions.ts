import { ICustomWorld } from '../support/custom-world';
import { selector } from '../utils/elements_selector';
import { When, Then } from '@cucumber/cucumber';

When('The user enters to the first topic', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator(selector.courseCardTitle).first().click();
});

Then('The comments amount should be displayed', async function (this: ICustomWorld) {
  const page = this.page!;
  const topicName = await page.locator(selector.courseTitle).innerText();
  const opinionsAmount = await page.locator(selector.opinions).innerText();
  // eslint-disable-next-line no-console
  console.log(`The "${topicName}" topic has ${opinionsAmount} opinions.`);
});
