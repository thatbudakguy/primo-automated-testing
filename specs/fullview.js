var FullViewPage = require('../pages/FullViewPage');

describe('a primo item record', function() {

    it('should show at least one summit request option for a remote resource', function() {
        FullViewPage.to('CP71176411730001451');
        expect(FullViewPage.summitRequestForm.isPresent()).toBeTruthy();
        expect(FullViewPage.summitRequestOptions.count()).toBeGreaterThan(0);
    });

});
