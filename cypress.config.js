const { defineConfig } = require("cypress");

module.exports = defineConfig({
  username: 'sicomit103@gexige.com',
  password: '9SZppp_MR99.4xq',
  mobileNumber: '40731883501',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
