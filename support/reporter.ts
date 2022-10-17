import * as reporter from "cucumber-html-reporter";
import * as fs from "fs";
import * as mkdirp from "mkdirp";
import * as path from "path";
const reportFolder = path.join(process.cwd(), "/reports");
const jsonReports = path.join(process.cwd(), "/reports/json");
const htmlReports = path.join(process.cwd(), "/reports/html");
const targetJson = jsonReports + "/cucumber_report.json";

const cucumberReporterOptions = {
    jsonFile: targetJson,
    output: htmlReports + "/cucumber_reporter.html",
    reportSuiteAsScenarios: true,
    theme: "bootstrap",
};

export class Reporter {

    public static createDirectory(dir: string) {
        fs.rmSync(reportFolder , { recursive: true, force: true });

        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }

    public static renamejsonfile() {

        let fs = require('fs');
        const files = fs.readdirSync(jsonReports + "/");
        fs.rename(jsonReports+'/' + files, jsonReports+'/cucumber_report.json', function(err) {
            if ( err ) console.log('ERROR: ' + err);
        });
    }

    public static createHTMLReport() {
        try {
            reporter.generate(cucumberReporterOptions); 
        } catch (err) {
            if (err) {
                throw new Error("Failed to save cucumber test results to json file.");
            }
        }
    }
}
