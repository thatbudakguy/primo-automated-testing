var primo = require('../primo.js');

describe('primo item records', function() {
    it('should show the summit request form with at least one option for a remote resource', function() {
        // browser.get('https://alliance-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=CP71176411730001451&context=L&vid=LCC_NEWUI');
        // expect(summitRequestForm.isPresent()).toBeTruthy();
        // expect(summitRequestButtons.count()).toBeGreaterThan(0);
    });
    it('should not show the summit request form for a local resource', function() {
        // browser.get('https://alliance-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=CP71139633100001451&context=L&vid=LCC_NEWUI');
        // expect(summitRequestForm.isPresent()).toBeFalsy();
    });
    it('should be able to place a summit request', function() {
        // browser.get('https://alliance-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=CP71176411730001451&context=L&vid=LCC_NEWUI');
        // var firstSummitOption = summitRequestButtons.first();
        // first.click().then();
    });
});
