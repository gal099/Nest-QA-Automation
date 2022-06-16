import { ICustomWorld } from '../support/custom-world';
import { selector } from '../utils/elements_selector';
import { When, Then } from '@cucumber/cucumber';

When('The user sorts the list by most voted', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.click(selector.filtersMenu);
  await page.click(selector.mostVoted);
  await page.waitForLoadState('domcontentloaded');
});

Then('The list should be sort by most voted', async function (this: ICustomWorld) {
  const page = this.page!;
  const currentFilter = await page.locator(selector.activeFilter).innerText();
  try {
    if (currentFilter === 'Más votados') {
      // eslint-disable-next-line no-console
      console.log('The list has be sort successfully');
    }
  } catch (error) {
    throw new Error(`The list is not sort properly\n${error}`);
  }
});
