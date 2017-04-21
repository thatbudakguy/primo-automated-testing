browser.ignoreSynchronization = true;
var BasePage = require('./BasePage.js');
var queryString = require('query-string');
var config = require('../data/config.json');

var LoginPagePDS = function() {

    /**
     * URLs
     */
    this.url = [ // parameter order matters, so can't use queryString.stringify()...
        config.pdsBaseUrl,
        'func=load-login&calling_system=primo&institute=LCC&lang=eng&url=',
        config.pdsSandboxUrl,
        'targetURL=',
        config.sandboxUrl,
        'vid=LCC_NEWUI&lang=en%255FUS&sortby=rank&from-new-ui=1&authenticationProfile=pds'
        ].join('');
    this.pageLoaded = this.and(this.isVisible(element(by.name('form1'))));

    /**
     * Elements
     */
    this.usernameInput = element(by.name('bor_id'));
    this.passwordInput = element(by.name('bor_verification'));

    /**
     * Get the error message displayed, if any.
     * @return {string} text of the error message.
     */
    this.errorMessage = function() {
        return $('.msg').getText().then(function(text) {
            return text.trim();
        });
    };

    /**
     * Log in by passing a user object with credentials to use.
     * @param  {object} user crendentials taken from data/users.json file
     */
    this.loginAs = function(user) {
        this.usernameInput.sendKeys(user.username);
        this.passwordInput.sendKeys(user.password);
        this.hitEnter();
    };
};

LoginPagePDS.prototype = BasePage;
module.exports = new LoginPagePDS();
