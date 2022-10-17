import { HomePageObject } from "../pages/home.page";
import { PageUtil } from "../support/pageutil";
const { Given, Then } = require("cucumber");
import { browser, protractor, element, by } from "protractor";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const homePageObject: HomePageObject = new HomePageObject();
const pageUtil: PageUtil = new PageUtil();

Given(/^I am ebay home page$/, async () => {
  await pageUtil.clickOnElementById(homePageObject.HomePageId.homeEbayLogoId);

  expect(await browser.getTitle()).to.equals(
    "Electronics, Cars, Fashion, Collectibles & More | eBay"
  );
});

Then(/^I validate ebay home page$/, async () => {
  expect(
    await pageUtil.isElementDisplayedById(
      homePageObject.HomePageId.homeEbayLogoId
    )
  ).to.equals(true, "Ebay Home - Ebay logo is not displayed");
  expect(
    await pageUtil.isElementDisplayedById(
      homePageObject.HomePageId.homeTopMenuHeadersSectionId
    )
  ).to.equals(true, "Ebay Top Menu - Ebay Top section is NOT as expected");
  expect(
    await pageUtil.isElementDisplayedById(
      homePageObject.HomePageId.homeFooterSectionId
    )
  ).to.equals(
    true,
    "Ebay home page footer - Ebay home page footer is NOT as expected"
  );
  expect(
    await pageUtil.getElementTextById(
      homePageObject.HomePageId.homeShopByCategoryByID
    )
  ).to.equals(
    "Shop by category",
    "Ebay Shop by category - Ebay Shop by category textis NOT displayed"
  );
});
