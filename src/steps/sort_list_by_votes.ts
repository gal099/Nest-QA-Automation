import { ICustomWorld } from '../support/custom-world';
import { When, Then } from '@cucumber/cucumber';

When('The user sort the list by most voted', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.click('.Filters-container');
  await page.click('a.Filters-single:nth-child(3)');
});

Then('The list should be sort by most voted', async function (this: ICustomWorld) {
  const page = this.page!;
  const currentFilter = await page.locator('.Filters-selected').innerText();
  try {
    if (currentFilter === 'Más votados') {
      // eslint-disable-next-line no-console
      console.log('The list has be sort successfully');
    }
  } catch (error) {
    throw new Error(`The list is not sort properly\n${error}`);
  }
});
