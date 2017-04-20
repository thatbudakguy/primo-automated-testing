var BasePage = require('./BasePage.js');

var FullViewPage = function() {
    this.url = 'http://alliance-primo-sb.hosted.exlibrisgroup.com/primo-explore/fulldisplay?context=L&vid=LCC_NEWUI&docid=';
    this.pageLoaded = this.inDom($('prm-full-view'));
    this.summitRequestForm = element(by.css('prm-alma-more-inst'));
    this.summitRequestOptions = element.all(by.repeater('almaInst in $ctrl.getInstitutions()'));
    this.to = function(docid) {
        browser.get(this.url + docid, this.timeout.xl);
        return this.at();
    };
};

FullViewPage.prototype = BasePage;
module.exports = new FullViewPage();
