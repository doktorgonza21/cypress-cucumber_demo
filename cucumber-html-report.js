const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "jsonlogs", // ** Path of .json file **//
  reportPath: "./report/cucumber-htmlreport",
  metadata: {
    browser: {
      name: "chrome",
      version: "XX",
    },
    device: "Github",
    platform: {
      name: "Ubuntu",
      version: "20.04",
    },
  },
});