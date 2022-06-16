import { ICustomWorld } from '../support/custom-world';
import { selector } from '../utils/elements_selector';
import { Then } from '@cucumber/cucumber';

Then(
  'The name and likes of the first one should be displayed',
  async function (this: ICustomWorld) {
    const page = this.page!;
    const postName = await page.locator(selector.postTitle).first().innerText();
    const postLikes = await page.locator(selector.likes).first().innerText();
    // eslint-disable-next-line no-console
    console.log(
      `The name of the first most voted post is:\n "${postName}"\n and the number of likes is ${postLikes}`,
    );
  },
);
