var primo = require('../primo.js');

describe('primo searches', function() {
    it('should have at least 500,000 results for a search of "dogs" in production', function() {
        var lcPrimoProd = new primo.searchPage('LCC', 'production').setView('LCC_NEWUI');
        lcPrimoProd.get();
        lcPrimoProd.search('dogs');
        expect(lcPrimoProd.results()).toBeLessThan(500000);
    });
    it('should show the same number of results in sandbox and production', function() {
        var lcPrimoSB = new primo.searchPage('LCC', 'sandbox').setView('LCC_NEWUI').get();
        var lcPrimoProd = new primo.searchPage('LCC', 'production').setView('LCC_NEWUI').get();
    });
});
