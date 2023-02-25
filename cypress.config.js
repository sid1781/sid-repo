const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ksi95u',
  videoCompression:false,
  CYPRESS_RECORD_KEY: "cf1c80c6-4337-49d4-ba37-fd916507d14e",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
