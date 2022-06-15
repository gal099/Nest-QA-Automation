import { ICustomWorld } from '../support/custom-world';
import { Given, When } from '@cucumber/cucumber';

Given('A user is in the landing page', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto('https://platzi.com');
});

When('The user searchs a topic', async function (this: ICustomWorld) {
  const page = this.page!;
  const searchInput = page.locator('.NewSearch.NewSearch--noLogged > form > div > input');
  const searchButton = page.locator('.NewSearch-button > svg');
  await searchInput.fill('javascript');
  await searchButton.click();
  await page.waitForTimeout(3000);
});

Given('A user is in the platzi blog landing page', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto('https://platzi.com');
  await page.click('div.Menu-dropdown > div > svg');
  await page.click('li:nth-child(2) > a > div');
});

When('The user searchs a blog topic', async function (this: ICustomWorld) {
  const page = this.page!;
  const searchInput = page.locator('div.col-xs-12.col-md-5 > form > input');
  const searchButton = page.locator('div.col-xs-12.col-md-5 > form > div > input[type=submit]');
  await searchInput.fill('javascript');
  await searchButton.click();
  await page.waitForTimeout(3000);
});
