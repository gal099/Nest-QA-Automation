/* eslint-disable no-console */
import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('That a user opens the browser', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto('https://google.com');
});

When('The user navigate to the site', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto('https://platzi.com/');
});

Then('The user should see the landing page', async function (this: ICustomWorld) {
  const page = this.page!;
  expect(await page.waitForSelector('.ButtonLogin', { state: 'visible' })).toBeTruthy;
});
