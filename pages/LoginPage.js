// TODO refactor
// var loginPagePds = function(institution) {
//     browser.ignoreSynchronization = true; // non-angular page
//     var self = this;
//     var EC = protractor.ExpectedConditions;
//     self.institution = institution;
//     // URLs
//     self.URLs = {
//         pds: 'https://alliance-primo-pds.hosted.exlibrisgroup.com/pds?',
//         url: 'https://alliance-primo.hosted.exlibrisgroup.com:443/primo_library/libweb/pdsLogin?',
//         production: 'https://alliance-primo.hosted.exlibrisgroup.com/primo-explore/search?vid=',
//
//     };
//     // https://alliance-primo-pds.hosted.exlibrisgroup.com/pds?func=load-login&calling_system=primo&institute=LCC&lang=und&url=https://alliance-primo.hosted.exlibrisgroup.com:443/primo_library/libweb/pdsLogin?targetURL=https://alliance-primo.hosted.exlibrisgroup.com/primo-explore/search?vid=LCC_NEWUI&sortby=rank&from-new-ui=1&authenticationProfile=BASE_PROFILE
//     // elements
//     // self.userMenuButton = element(by.css('.user-menu-button'));
//     // self.loginButton = element(by.css('[ng-click="$ctrl.handleLogin();"]'));
//     self.usernameField = $('input[name="bor_id"]');
//     self.passwordField = $('input[name="bor_verification"]');
//     // functions
//     self.pageLoaded = function() {
//         return EC.visibilityOf($('form[name="form1"]'));
//     };
//     self.setView = function(view) {
//         self.view = view;
//         return self;
//     };
//     self.load = function() {
//         url = self.URLs.pds + 'func=load-login&calling_system=primo&institute=' + self.institution + '&url=' + self.URLs.url + 'targetURL=' + self.URLs.targetURL + self.view + '&sortby=rank&from-new-ui=1&authenticationProfile=BASE_PROFILE';
//         browser.driver.get(url, 10000);
//         return browser.driver.wait(self.pageLoaded(), 10000);
//     };
//     self.login = function(username, password) {
//         self.usernameField.sendKeys(username);
//         self.passwordField.sendKeys(password);
//         browser.actions()
//             .sendKeys(protractor.Key.ENTER)
//             .perform();
//     };
// };
