const rimraf = require("rimraf");
const fs = require("fs");
const mkdir = require("mkdirp");

function deleteDirectory(dirPath) {
  rimraf.sync(dirPath);
}

function getRunTags() {
  return process.env.CUKE_TAGS;
}

function getCapabilities(defaultLocalBrowserConfig) {
  let browserConfig = defaultLocalBrowserConfig;
  return require(`../../browsers/${browserConfig}`);
}

function getTestDataEnv() {
  if (process.env.BASEURL === "Prod") {
    return "prod";
  }
  return "nonProd";
}

function siteHostPrefix() {
  if (process.env.BASEURL === "prod") {
    return "https://www.ebay.com.au";
  }

  return "https://${process.env.BASEURL}.ebay.com.au";
}

module.exports = {
  deleteDirectory: deleteDirectory,
  getRunTags: getRunTags,
  getCapabilities: getCapabilities,
  getTestDataEnv: getTestDataEnv,
  siteHostPrefix: siteHostPrefix,
};
