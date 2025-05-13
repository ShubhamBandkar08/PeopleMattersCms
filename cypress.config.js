const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here


    },
  },
  env: {  
    URL:'https://beta-pm.peoplematters.in/login',
    HOME_URL: 'https://beta-pm.peoplematters.in/home'
  }
});
