const { BeforeAll, After, AfterAll, Status } = require("cucumber");
import { browser } from "protractor";
import { config } from "../config/config";
import * as path from "path";
import { Reporter } from "../support/reporter";
const jsonReports = path.join(process.cwd(), "/reports/json");

BeforeAll({ timeout: 100 * 1000 }, async () => {
  await browser.driver.manage().deleteAllCookies();
  let { setDefaultTimeout } = require("cucumber");
  setDefaultTimeout(50 * 1000);

  Reporter.renamejsonfile();
  
  await browser.get(config.baseUrl);
});

After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  }
});

AfterAll({ timeout: 100 * 1000 }, async () => {
  await browser.quit();
});
