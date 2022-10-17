import {
  browser,
  element,
  by,
  By,
  ElementFinder,
  protractor,
} from "protractor";

export class PageUtil {
  async selectDropDownOption(listElement: any, optionText: string) {
    return await element(by.css(`[id*="${listElement}"]`))
      .element(by.xpath(`//option[. = "${optionText}"]`))
      .click();
  }

  async clickOnElementById(id: string) {
    await element(by.css(`[id=${id}]`)).click();
  }

  async getElementValueById(id: string) {
    return await element(by.css(`[id=${id}]`)).getAttribute("value");
  }

  async getElementTextByXpath(xpath: string) {
    return await element(by.xpath(`${xpath}`)).getText();
  }

  async clickOnElementByXpath(xpath: string) {
    await element(by.xpath(`${xpath}`)).click();
  }

  async clickOnElementByvalue(value: string) {
    await element(by.css(`[value=${value}]`)).click();
  }

  async fillTextBoxByID(id: string, text: string) {
    await element(by.css(`[id=${id}]`)).sendKeys(text);
  }

  async fillTextBoxByAlt(alt: string, text: string) {
    await element(by.css(`[alt=${alt}]`)).sendKeys(text);
  }
  async isElementDisplayedById(id: string) {
    return element(by.css(`[id=${id}]`)).isDisplayed();
  }

  async getElementTextById(id: string) {
    return element(by.css(`[id=${id}]`)).getText();
  }

  async getPageSource() {
    return browser.getPageSource();
  }

  async getVisibleTextById(id: string) {
    return element(by.css(`[id=${id}]`)).getText();
  }
}
