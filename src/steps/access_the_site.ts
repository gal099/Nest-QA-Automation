import { ICustomWorld } from '../support/custom-world';
import { urlMap } from '../pom';
import { selector } from '../utils/elements_selector';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('That a user opens the browser', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(urlMap.get('default'));
});

When('The user navigate to the site', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(urlMap.get('platzi'));
});

Then('The user should see the landing page', async function (this: ICustomWorld) {
  const page = this.page!;
  expect(await page.waitForSelector(selector.loginBtn, { state: 'visible' })).toBeTruthy;
});
