var SearchPage = require('../pages/SearchPage');

describe('a primo search', function() {

    beforeEach(function() {
        SearchPage.to();
    });

    it('should have correct scopes', function() {
        SearchPage.enterQuery('dogs');
        expect(SearchPage.searchScopeNames.count()).toEqual(3);
        expect(SearchPage.searchScopeNames.get(0).getText()).toBe('L&C, Summit, and Articles, etc.');
        expect(SearchPage.searchScopeNames.get(1).getText()).toBe('L&C and Summit');
        expect(SearchPage.searchScopeNames.get(2).getText()).toBe('Lewis & Clark');
    });

    it('should return at least 500,000 results for "dogs" in the largest scope', function() {
        SearchPage.searchFor('dogs', 0);
        expect(SearchPage.numberOfResults()).toBeGreaterThan(500000);
    });

    it('should return less than 2,000 results for "dogs" in the LC scope', function() {
        SearchPage.searchFor('dogs', 2);
        expect(SearchPage.numberOfResults()).toBeLessThan(2000);
    });

});

describe('a primo advanced search', function() {

    beforeEach(function() {
        SearchPage.to();
        SearchPage.advancedSearchButton.click();
    });

    it('should return less than 8,000 results for horse ebooks', function() {
        SearchPage.setMaterialType(4);
        SearchPage.advancedSearchFor('horse');
        expect(SearchPage.numberOfResults()).toBeLessThan(8000);
    });

});
