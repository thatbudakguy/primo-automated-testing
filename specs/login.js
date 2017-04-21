var LoginPagePDS = require('../pages/LoginPagePDS');
var SearchPage = require('../pages/SearchPage');
var users = require('../data/users.json');

describe('logging in to primo', function() {

    describe('through PDS', function() {

        beforeEach(function() {
            LoginPagePDS.to();
        });

        it('should deny invalid credentials', function() {
            LoginPagePDS.loginAs(users.bad);
            expect(LoginPagePDS.errorMessage()).toBe('Invalid UserID and/or Password. Please re-enter.');
        });

        it('should work with a dummy account', function() {
            LoginPagePDS.loginAs(users.dummy);
            expect(SearchPage.at()).toBeTruthy();
        });

    });

    // describe('through social login', function() {
    //
    //     it('should deny invalid credentials', function() {
    //         // TODO implement
    //     });
    //
    //     it('should work with a dummy account', function() {
    //         // TODO implement
    //     });
    //
    // });

});
