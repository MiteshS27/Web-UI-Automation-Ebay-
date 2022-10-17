import { browser, protractor, element, by } from "protractor";
import { HomePageObject } from "../pages/home.page";
import { SearchPageObject } from "../pages/simpleSearch.page";
import { PageUtil } from "../support/pageutil";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const homePageObject: HomePageObject = new HomePageObject();
const search: SearchPageObject = new SearchPageObject();
const pageUtil: PageUtil = new PageUtil();

When(/^I perform simple search "(.*?)"$/, async (text: string) => {
  await pageUtil.fillTextBoxByID(
    homePageObject.HomePageId.homeSearchTextBoxId,
    text
  );
  await pageUtil.clickOnElementByvalue(
    homePageObject.HomePageId.homeSearchSubmitButtonByValue
  );
});

Then(/^I verify the simple seach result for "(.*?)"$/, async (text: string) => {
  await expect(await browser.getTitle()).to.equals(
    text + ": Search Result | eBay"
  );
  await expect(await search.catogoryList.isDisplayed()).to.equals(
    true,
    "Ebay simple search - Left hand side catogary section is not displayed"
  );
  let searchInstanceCount = await element
    .all(by.xpath(`//*[contains(text(), "${text}")]`))
    .count();
  if (searchInstanceCount < 10) {
    await expect(true).to.equals(
      false,
      "Ebay simple search - The simple search result is not as expected. Serach result count is less than 10"
    );
  }
});
