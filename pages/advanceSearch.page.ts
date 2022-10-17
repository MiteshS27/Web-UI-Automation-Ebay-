import { $, ElementFinder, browser, element } from "protractor";

export class AdvanceSeaechPageObject {
  AdvanceSeaarchPageId = {
    advanceSearchkeywordbyId: "_nkw",
    advanceSearchIntheCatogaryById: "e1-1",
    advanceSearchButtonByXpath: "//*[text()='Search']",
    advanceSearchFirstValueByXpath:
      "//*[@id='srp-river-results']/ul/li[2]/div/div[2]/a/div",
  };
}
