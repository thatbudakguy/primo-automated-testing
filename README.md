# primo-automated-testing
automated testing of Ex Libris Primo new UI using Protractor for AngularJS.

borrows heavily from [qualityshepherd's protractor examples](https://github.com/qualityshepherd/protractor-example).

## usage
### setup
you need the latest versions of [node.js](nodejs.org) and [npm](npmjs.com) as well as the jdk and jre 8.
```
git clone https://github.com/thatbudakguy/primo-automated-testing.git
npm install
```
### run tests
start test server:
```
webdriver-manager start
```
run tests:
```
protractor conf.js
```
