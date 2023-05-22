const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const path = require('path');
// function getConfigurationByFile(file) {
//   const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`)

//   if(!fs.exitSync(pathToConfigFile)){
//     console.log("No custom config file found.")
//     return{};
//   }

//   return fs.readJson(pathToConfigFile)
// }

// plugins file
module.exports = (on, config) => {
}

module.exports = defineConfig({
  projectId: 'avkzsp',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // const file = config.env.configFile || 'development'

      // return getConfigurationByFile(file)
    },
    specPattern:"cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "http://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns:true,
    pageLoadTimeout: 120000,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
    retries:{
      runMode:2,
      openMode:1
    },
    env:{
      first_name: "Sarah",
      webdriveruni_hompage: "http://www.webdriveruniversity.com",
      // /Contact-Us/contactus.html
    }
  },
  
});
