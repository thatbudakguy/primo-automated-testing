var BasePage = require('./BasePage.js');

var SearchPage = function() {
    this.url = 'http://alliance-primo-sb.hosted.exlibrisgroup.com/primo-explore/search?vid=LCC_NEWUI';
    this.pageLoaded = this.inDom($('prm-search'));
    // header
    this.userMenu = element(by.css('.user-menu-button'));
    this.loginButton = element(by.css('[ng-click="$ctrl.handleLogin();"]'));
    // search
    this.searchBar = element(by.id('searchBar'));
    this.searchResults = element.all(by.repeater('item in $ctrl.itemlist'));
    this.searchResultsCount = element(by.css('.results-count'));
    this.searchScopes = element.all(by.repeater('item in group'));
    this.searchScopeNames = $$('.suggestion-scope');
    // advanced search
    this.advancedSearchForm = element(by.name('advancedSearch'));
    this.advancedSearchButton = element(by.css('.switch-to-advanced'));
    this.advancedSearchQuery = element(by.model('row.searchQuery'));
    this.materialType = element(by.model('$ctrl.materialType.selection'));
    this.materialTypeOptions = element.all(by.repeater('material in $ctrl.materialType.displayOptions'));

    /**
     * type in a search, but don't press enter - useful for checking if scopes appear
     * @param  {string} query
     */
    this.enterQuery = function(query) {
        this.searchBar.sendKeys(query);
    };

    /**
     * type in a search, then choose a scope from the dropdown, which will execute the search
     * @param  {string} query
     * @param  {int} scope index (0 would be the first scope) - defaults to 0
     */
    this.searchFor = function(query, scope) {
        scope = scope || 0;
        this.searchBar.sendKeys(query);
        this.searchScopes.get(scope).click();
    };

    /**
     * select a material type in the advanced search form.
     * @param  {int} type material type index (0 would be the first material type)
     */
    this.setMaterialType = function(type) {
        this.materialType.click();
        this.materialTypeOptions.get(type).click();
    };

    /**
     * type in a query in the advanced search form and press enter, executing the search
     * @param  {string} query
     */
    this.advancedSearchFor = function(query) {
        this.advancedSearchQuery.sendKeys(query);
        this.hitEnter();
    };

    /**
     * retrieve the total number of results primo reports after a search is performed.
     * @return  {int}
     */
    this.numberOfResults = function() {
        return this.searchResultsCount.getText().then(function(text) {
            return parseInt(text.split(" ")[0].replace(',',''));
        });
    };
};

SearchPage.prototype = BasePage;
module.exports = new SearchPage();
