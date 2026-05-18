const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  e2e: {
    setupNodeEvents(on, config) {
      return config;
      // implement node event listeners here
    },
    baseUrl: 'https://www.alura.com.br',
    requestTimeout: 10000,
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
  },
});