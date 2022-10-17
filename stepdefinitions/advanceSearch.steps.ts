import { browser, element, by } from "protractor";
import { HomePageObject } from "../pages/home.page";
import { AdvanceSeaechPageObject } from "../pages/advanceSearch.page";
import { PageUtil } from "../support/pageutil";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const homePageObject: HomePageObject = new HomePageObject();
const advanceSeaechPageObject: AdvanceSeaechPageObject =
  new AdvanceSeaechPageObject();
const pageUtil: PageUtil = new PageUtil();

When(
  /^I perform advance search using keyword "(.*?)" and item category "(.*?)"$/,
  async (searchText: string, searchCatogary: string) => {
    await pageUtil.clickOnElementById(
      homePageObject.HomePageId.homeAdvanceSeachLink
    );
    await expect(await browser.getTitle()).to.equals(
      "eBay search: Advanced search"
    );
    await pageUtil.fillTextBoxByID(
      advanceSeaechPageObject.AdvanceSeaarchPageId.advanceSearchkeywordbyId,
      searchText
    );
    await pageUtil.selectDropDownOption(
      advanceSeaechPageObject.AdvanceSeaarchPageId
        .advanceSearchIntheCatogaryById,
      searchCatogary
    );
    await pageUtil.clickOnElementByXpath(
      advanceSeaechPageObject.AdvanceSeaarchPageId.advanceSearchButtonByXpath
    );
  }
);

Then(
  /^I verify the advance seach result for "(.*?)" and item category "(.*?)"$/,
  async (searchText: string, searchCatogary: string) => {
    await expect(await browser.getTitle()).to.equals(
      searchText + ": Search Result | eBay"
    );
    await expect(
      await pageUtil.getElementValueById(
        homePageObject.HomePageId.homeSearchTextBoxId
      )
    ).to.equals(
      searchText,
      "Advance search - Advance search keyword is not displayed afer search on home page"
    );
    let searchInstanceCount = await element
      .all(by.xpath(`//*[contains(text(), "${searchText}")]`))
      .count();
    if (searchInstanceCount < 5) {
      await expect(true).to.equals(
        false,
        "Advance search - The advance search result is NOT as expected. Serach result count is less than 5"
      );
    }
  }
);

Then(
  /^I see the product "(.*?)" listed in search result$/,
  async (product: string) => {
    await expect(
      await pageUtil.getElementTextByXpath(
        advanceSeaechPageObject.AdvanceSeaarchPageId
          .advanceSearchFirstValueByXpath
      )
    ).to.contain(
      product,
      "Advance search - First value for adviser search doesnt match the expexted value" +
        product
    );
  }
);
