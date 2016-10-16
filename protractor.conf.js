exports.config = {
  baseUrl: 'http://localhost:8080/',

  specs: ['./tmp/test/*_spec.js'],

  framework: 'jasmine2',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,

  capabilities: {
    browserName: 'chrome'
  },

  useAllAngular2AppRoots: true
}