var fullViewPage = function(institution, environment, recordid) {
    var self = this;
    self.institution = institution;
    self.environment = environment || 'sandbox';
    // URLs
    self.URLs = {
        sandbox: 'http://alliance-primo-sb.hosted.exlibrisgroup.com/primo-explore/search?vid=',
        production: 'http://alliance-primo.hosted.exlibrisgroup.com/primo-explore/search?vid='
    };
    // elements
    self.summitRequestForm = element(by.css('prm-alma-more-inst'));
    self.summitRequestButtons = element.all(by.repeater('almaInst in $ctrl.getInstitutions()'));
    //self.userMenuButton = element(by.css('.user-menu-button'));
    //self.loginButton = element(by.css('[ng-click="$ctrl.handleLogin();"]'));
    // functions
    self.setView = function(view) {
        self.view = view;
        return self;
    };
    self.get = function() {
        url = self.environment == 'sandbox' ? self.URLs.sandbox : self.URLs.production;
        browser.get(url + self.view);
        browser.manage().window().maximize();
    };
    return self;
};

var searchPage = function(institution, environment) {
    var self = this;
    self.institution = institution;
    self.environment = environment || 'sandbox';
    // URLs
    self.URLs = {
        sandbox: 'http://alliance-primo-sb.hosted.exlibrisgroup.com/primo-explore/search?vid=',
        production: 'http://alliance-primo.hosted.exlibrisgroup.com/primo-explore/search?vid='
    };
    // elements
    self.searchBar = element(by.id('searchBar'));
    self.searchResults = element.all(by.repeater('item in $ctrl.itemlist'));
    self.searchResultsCount = element(by.css('.results-count'));
    self.userMenuButton = element(by.css('.user-menu-button'));
    self.loginButton = element(by.css('[ng-click="$ctrl.handleLogin();"]'));
    // functions
    self.setView = function(view) {
        self.view = view;
        return self;
    };
    self.get = function() {
        url = self.environment == 'sandbox' ? self.URLs.sandbox : self.URLs.production;
        browser.get(url + self.view);
        browser.manage().window().maximize();
    };
    self.search = function(query) {
        self.searchBar.sendKeys(query);
        browser.actions()
        .sendKeys(protractor.Key.ENTER)
        .perform();
        browser.waitForAngular();
    };
    self.results = function() {
        return new Promise(function(fulfill, reject) {
            self.searchResultsCount.getText().then(function(text) {
                fulfill(parseInt(text.split(" ")[0].replace(',','')));
            }, function(err){
                reject(err);
            });
        });
    };
    return self;
};

var loginPage = function() {
    // WIP
    //
    //     self.login = function(username, password) {
            /**
             * TODO: move self to onPrepare: function(){...} in conf.js
             * @type {[type]}
             */
             // var EC = protractor.ExpectedConditions;
             // browser.get('https://alliance-primo.hosted.exlibrisgroup.com/primo-explore/search?vid=LCC_NEWUI');
             // browser.actions().mouseMove(userMenuButton).perform();
             // browser.wait(EC.elementToBeClickable(loginButton), 5000).then(function(){
             //     loginButton.click();
             //     browser.wait(EC.urlContains('alliance-primo-pds.hosted.exlibrisgroup.com'));
             // });
        // };
};

exports.fullViewPage = fullViewPage;
exports.searchPage = searchPage;
exports.loginPage = loginPage;
