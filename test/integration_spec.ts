import {by, protractor, By} from 'protractor';
var fs = require('fs');

var scenarios = ['baseline', 'dev', 'bundling-app', 'bundling-full', 'treeshaking-rollup', 'treeshaking-webpack', 'aot-closure', 'aot-rollup', 'aot-systemjs', 'aot-webpack', 'lazyloading-closure', 'lazyloading-systemjs', 'lazyloading-webpack', 'prerender'];
var report = {};

scenarios.forEach((scenario) => {
  report[scenario] = [];
  var isBaseline = scenario == 'baseline';

  describe('App ' + scenario, function() {

    beforeEach((done) => {
      protractor.browser.ignoreSynchronization = true;
      protractor.browser.get('/' + scenario + '/');
      protractor.browser.driver.wait(protractor.until.elementLocated(By.css('#perf')), 10000).then(() => {
        protractor.element(by.css('#output')).getText().then((text: string) => {
          report[scenario].push(parseInt(text));
          done();
        });
      });
    });

    afterAll(() => {
      if (scenario == scenarios[scenarios.length - 1]) {
        fs.writeFileSync('./tmp/perf.json', JSON.stringify(report), 'utf-8');
      }
    });

    it('should load the welcome page', function() {
      if (!isBaseline){
        expect<any>(protractor.element(by.css('h2')).getText()).toEqual('Welcome');
      } else {
        expect(true).toBeTruthy();
      }
    });

    it('should navigate to list page', function() {
      if (!isBaseline) {
        protractor.element.all(by.css('a')).get(2).click();
        protractor.browser.driver.wait(protractor.until.elementLocated(By.css('list')), 10000).then(() => {
          expect<any>(protractor.element(by.css('h2')).getText()).toEqual('Paginated list');

          expect<any>(protractor.element(by.css('pre')).getText()).toEqual('Current page: 1');
          protractor.element.all(by.css('a.page-link')).get(4).click();
          expect<any>(protractor.element(by.css('pre')).getText()).toEqual('Current page: 4');
        });
      } else {
        expect(true).toBeTruthy();
      }
    });

    it('should navigate to subscribe page', function() {
      if (!isBaseline) {
        protractor.element.all(by.css('a')).get(3).click();
        protractor.browser.driver.wait(protractor.until.elementLocated(By.css('subscribe')), 10000).then(() => {
          expect<any>(protractor.element(by.css('h2')).getText()).toEqual('Subscribe');

          expect<any>(protractor.element(by.css('pre')).getText()).toEqual('Value entered: ');
          protractor.element(by.css('input')).sendKeys('foo');
          expect<any>(protractor.element(by.css('pre')).getText()).toEqual('Value entered: foo');
        });
      } else {
        expect(true).toBeTruthy();
      }
    });

    it('should navigate to search page', function() {
      if (!isBaseline) {
        protractor.element.all(by.css('a')).get(4).click();
        protractor.browser.driver.wait(protractor.until.elementLocated(By.css('search')), 10000).then(() => {
          expect<any>(protractor.element(by.css('h2')).getText()).toEqual('Search');

          expect<any>(protractor.element.all(by.css('div')).count()).toEqual(3);
          protractor.element(by.css('input')).sendKeys('foo');
          protractor.element(by.css('button')).click();
          protractor.browser.driver.wait(protractor.until.elementLocated(By.css('search > div > div')), 10000);
          expect<any>(protractor.element.all(by.css('div')).count()).toEqual(13);
        });
      } else {
        expect(true).toBeTruthy();
      }
    });
  });
});
