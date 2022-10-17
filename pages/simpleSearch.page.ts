import { $, ElementFinder, browser, element } from "protractor";

export class SearchPageObject {
  public catogoryList: ElementFinder;

  constructor() {
    this.catogoryList = $("[id='x-refine__group__0']");
  }
}
