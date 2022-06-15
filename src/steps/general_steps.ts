import { ICustomWorld } from '../support/custom-world';
import { Given } from '@cucumber/cucumber';

Given('A user is in the landing page', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto('https://platzi.com');
});
