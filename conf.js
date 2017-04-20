exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['specs/*.js'],
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        displayStacktrace: true,
        displaySpecDuration: true
    },
    onPrepare: function() {
        browser.manage().window().maximize();
        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'spec'
        }));
    },
    multiCapabilities: [{
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        chromeOptions: {
            args: [
                '--disable-infobars',
                '--disable-extensions',
                'verbose'
            ],
            prefs: {
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        }
    }]
};
