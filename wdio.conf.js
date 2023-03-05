const {
  generate
} = require('multiple-cucumber-html-reporter');

exports.config = {
  runner: 'local',

  specs: ['./features/**/*.feature'],

  maxInstances: 1,

  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    acceptInsecureCerts: true,
  }, ],

  logLevel: 'error',

  bail: 0,

  baseUrl: '',

  waitforTimeout: 60000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: ['chromedriver'],

  framework: 'cucumber',

  reporters: ['cucumberjs-json'],

  cucumberOpts: {
    require: ['./step-definitions/steps.js', './helpers/parameterTypes.js'],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    tagExpression: '',
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },

  onComplete() {
    generate({
      jsonDir: '.tmp/json/',
      reportPath: '.tmp/report/',
    });
  },
};