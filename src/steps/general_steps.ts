import { ICustomWorld } from '../support/custom-world';
import { urlMap } from '../pom';
import { selector } from '../utils/elements_selector';
import { Given, When } from '@cucumber/cucumber';

Given('A user is in the landing page', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(urlMap.get('platzi'));
});

When('The user searchs a topic', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.fill(selector.searchInput, 'javascript');
  await page.click(selector.searchBtn);
  await page.waitForTimeout(3000);
});

Given('A user is in the platzi blog landing page', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(urlMap.get('platzi'));
  await page.click(selector.menu);
  await page.click(selector.blog);
});

When('The user searchs a blog topic', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.fill(selector.blogSearchInput, 'javascript');
  await page.click(selector.blogSearchBtn);
  await page.waitForTimeout(3000);
});
