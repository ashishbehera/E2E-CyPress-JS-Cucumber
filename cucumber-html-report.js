const report = require("multiple-cucumber-html-reporter");
var currentdate = new Date();
var datetime = currentdate.getDate() + "-" + (currentdate.getMonth() + 1)
  + "-" + currentdate.getFullYear() + "-"
  + currentdate.getHours() + "-"
  + currentdate.getMinutes();

report.generate({
  jsonDir: "jsonlogs", // ** Path of .json file **//
  reportPath: "./reports/cucumber-html-report"+"_"+datetime,
  metadata: {
    browser: {
      name: "chrome",
      version: "XX",
    },
    device: "Local test machine",
    platform: {
      name: "MAC",
      version: "12.0.1",
    },
  },
});