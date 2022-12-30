const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 500,
  viewportHeight: 800,
  projectId: '7g25kw',
  e2e: {
    baseUrl: 'https://petgram-drummes12-fs0sqt7lr-drummes12.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
