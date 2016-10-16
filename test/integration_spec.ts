import {browser, by, element, protractor, By} from 'protractor';

var scenarios = ['dev', 'bundling-app', 'bundling-full', 'treeshaking-rollup', 'treeshaking-webpack', 'aot-rollup', 'aot-webpack', 'lazyloading-webpack', 'universal'];

scenarios.forEach((scenario) => {
  describe('App ' + scenario, function() {

    beforeEach(() => {
      browser.get('/' + scenario + '/');
    });

    it('should load the welcome page', function() {
      expect(element(by.css('h2')).getText()).toEqual('Welcome');
    });

    it('should navigate to list page', function() {
      element.all(by.css('a')).get(1).click();
      expect(element(by.css('h2')).getText()).toEqual('Paginated list');

      expect(element(by.css('pre')).getText()).toEqual('Current page: 1');
      element.all(by.css('a.page-link')).get(4).click();
      expect(element(by.css('pre')).getText()).toEqual('Current page: 4');
    });

    it('should navigate to subscribe page', function() {
      element.all(by.css('a')).get(2).click();
      expect(element(by.css('h2')).getText()).toEqual('Subscribe');

      expect(element(by.css('pre')).getText()).toEqual('Value entered: ');
      element(by.css('input')).sendKeys('foo');
      expect(element(by.css('pre')).getText()).toEqual('Value entered: foo');
    });

    it('should navigate to search page', function() {
      element.all(by.css('a')).get(3).click();
      expect(element(by.css('h2')).getText()).toEqual('Search');

      expect(element.all(by.css('div')).count()).toEqual(2);
      element(by.css('input')).sendKeys('foo');
      element(by.css('button')).click();
      browser.driver.wait(protractor.until.elementLocated(By.css('search > div > div')), 10000);
      expect(element.all(by.css('div')).count()).toEqual(12);
    });
  });
});

