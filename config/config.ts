import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";
const automationUtils = require("../support/automationUtil");
const DEFAULT_LOCAL_BROWSER_CONFIG = "browser.local.chrome.json";

const URL = "https://www.ebay.com.au/";

export const config: Config = {
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",

  SELENIUM_PROMISE_MANAGER: true,

  baseUrl: URL,

  multiCapabilities: automationUtils.getCapabilities(
    DEFAULT_LOCAL_BROWSER_CONFIG
  ),
  ignoreUncaughtExceptions: true,

  params: {
    environments: {
      appUrl: {
        siteHostPrefix: automationUtils.siteHostPrefix(),
      },
    },
  },

  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),

  specs: ["../../features/*.feature"],
  //specs: ["../../features/ScenarioOutline.feature",],

  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    Reporter.createDirectory(jsonReports);
  },

  cucumberOpts: {
    compiler: "ts:ts-node/register",
    format: "json:./reports/json/cucumber_report.json",
    require: [
      "../../typeScript/stepdefinitions/*.js",
      "../../typeScript/support/*.js",
    ],
    strict: true,
    tags: "@ebayScenario",
  },

  onComplete: () => {
    Reporter.createHTMLReport();
  },
};
