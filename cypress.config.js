const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'r5abjh',
  videoCompression:false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
