const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    viewportWidth: 1920,
    viewportHeight: 1080,
    projectId: "879fh9",
    chromeWebSecurity: false,
    defaultCommandTimeout: 5000,
    downloadsFolder: "./trash/downloads",
    screenshotsFolder: "./trash/screenshots",
    videosFolder: "./trash/videos",
    video: false,
    screenshotOnRunFailure: true,
    taskTimeout: 50000,
  },
});
