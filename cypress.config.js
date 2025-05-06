const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here


    },
  },
  env: {  
    URL:'https://uat-pm.enpointe.io/login',
    HOME_URL: 'https://uat-pm.enpointe.io/home'
  }
});
