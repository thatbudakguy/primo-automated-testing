var fullViewPage = function(institution, environment, recordid) {
    var self = this;
    self.institution = institution;
    self.environment = environment || 'sandbox';
    self.recordid = recordid;
    // URLs
    self.URLs = {
        sandbox: 'http://alliance-primo-sb.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=',
        production: 'http://alliance-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid='
    };
    // elements
    self.summitRequestForm = element(by.css('prm-alma-more-inst'));
    self.summitRequestButtons = element.all(by.repeater('almaInst in $ctrl.getInstitutions()'));
    // functions
    self.setView = function(view) {
        self.view = view;
        return self;
    };
    self.load = function() {
        url = self.environment == 'sandbox' ? self.URLs.sandbox : self.URLs.production;
        browser.get(url + self.recordid + '&context=L&vid=' + self.view);
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
    self.load = function() {
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

var loginPagePds = function(institution) {
    browser.ignoreSynchronization = true; // non-angular page
    var self = this;
    var EC = protractor.ExpectedConditions;
    self.institution = institution;
    // URLs
    self.URLs = {
        pds: 'https://alliance-primo-pds.hosted.exlibrisgroup.com/pds?',
        url: 'https://alliance-primo.hosted.exlibrisgroup.com:443/primo_library/libweb/pdsLogin?',
        production: 'https://alliance-primo.hosted.exlibrisgroup.com/primo-explore/search?vid=',

    };
    // https://alliance-primo-pds.hosted.exlibrisgroup.com/pds?func=load-login&calling_system=primo&institute=LCC&lang=und&url=https://alliance-primo.hosted.exlibrisgroup.com:443/primo_library/libweb/pdsLogin?targetURL=https://alliance-primo.hosted.exlibrisgroup.com/primo-explore/search?vid=LCC_NEWUI&sortby=rank&from-new-ui=1&authenticationProfile=BASE_PROFILE
    // elements
    // self.userMenuButton = element(by.css('.user-menu-button'));
    // self.loginButton = element(by.css('[ng-click="$ctrl.handleLogin();"]'));
    self.usernameField = $('input[name="bor_id"]');
    self.passwordField = $('input[name="bor_verification"]');
    // functions
    self.pageLoaded = function() {
        return EC.visibilityOf($('form[name="form1"]'));
    };
    self.setView = function(view) {
        self.view = view;
        return self;
    };
    self.load = function() {
        url = self.URLs.pds + 'func=load-login&calling_system=primo&institute=' + self.institution + '&url=' + self.URLs.url + 'targetURL=' + self.URLs.targetURL + self.view + '&sortby=rank&from-new-ui=1&authenticationProfile=BASE_PROFILE';
        browser.driver.get(url, 10000);
        return browser.driver.wait(self.pageLoaded(), 10000);
    };
    self.login = function(username, password) {
        self.usernameField.sendKeys(username);
        self.passwordField.sendKeys(password);
        browser.actions()
            .sendKeys(protractor.Key.ENTER)
            .perform();
    };
};

exports.fullViewPage = fullViewPage;
exports.searchPage = searchPage;
exports.loginPagePds = loginPagePds;
